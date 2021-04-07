$(document).ready(function(){
  var objDb;
  var kord;
  $.getJSON("boligDb.php", function(data){
    objDb = data;
  })
  .done(function(){
    $.each(objDb, function(key, value){
      var geoapi = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+value.Adresse+"%20"+value.AdresseNummer+"%20&"+value.postkode+".json?types=address&types=postcode&limit=1&access_token=pk.eyJ1IjoibGlucmlrIiwiYSI6ImNrbGl3c3I4cjFtbDMydXByY3Fwb2FiNWcifQ.c6ZaUObW0b5T2_Banm1Zjg";
      $.getJSON(geoapi, function(pos){
        kord = pos.features.geometry;
      })
    })
    .fail(function(){
      alert("Kunne ikke hente datasett");
    });

//Tores kalkulator
var buss = 32;
var bussMax = 52;
var skole = 6;
var skoleMax = 21;
var dVare = 12;
var dVareMax = 41;
var rest = 20;
var restMax = 30;
var park = 6;
var parkMax = 15;
var barer = 16;
var barerMax = 17;
var trening = 6;
var treningMax = 12;
var kafe = 12;
var kafeMax = 20;

var aFac = (((trening / treningMax) + (kafe / kafeMax) + (buss / bussMax) + (skole / skoleMax) + (dVare / dVareMax) + (rest / restMax) + (park / parkMax) + (barer / barerMax)) / 8) * (skole + dVare + buss + barer + park + rest + trening + kafe);
var gjennomsnitt7 = (((skole / skoleMax) / skole) * aFac); //*teater);
var gjennomsnitt2 = (((barer / barerMax) / barer) * aFac); // *barer);
var gjennomsnitt3 = (((dVare / dVareMax) / dVare) * aFac); //*dVare);
var gjennomsnitt4 = (((park / parkMax) / park) * aFac); //*bibliotek);
var gjennomsnitt5 = (((rest / restMax) / rest) * aFac); //*kino);
var bussStopp = (((buss / bussMax)) * aFac); //*bibliotek);
var gjennomsnitt1 = (((kafe / kafeMax) / kafe) * aFac);
var gjennomsnitt8 = (((trening / treningMax) / trening) * aFac);

var pris = [900000, 1400000, 3100000, 2600000];

  for (i = 0; i<4; i++){

  var prisRel = pris[i] / (bussStopp * 7);
  var prisRel3 = pris[i] / (gjennomsnitt2 * 8);
  var prisRel4 = pris[i] / (gjennomsnitt3 * 13);
  var prisRel5 = pris[i] / (gjennomsnitt4 * 15);
  var prisRel6 = pris[i] / (gjennomsnitt5 * 12);
  var prisRel7 = pris[i] / (gjennomsnitt7 * 9);
  var prisRel8 = pris[i] / (gjennomsnitt8 * 8);
  var prisRel9 = pris[i] / (gjennomsnitt1 * 13);



 pris[i] += (prisRel + prisRel7 + prisRel6 + prisRel5 + prisRel4 + prisRel3 + prisRel9 + prisRel8);
 }



var liste = {
	0:{hus:"Rødt Hus",x:59.22022506832878, pris:pris[0], y:9.615463280937659, beskriv:"<br> Den er bra husen ja"}, 
	1:{hus:"Fiolett hus",x:59.199803985842124, pris:pris[1], y:9.595800722793395, beskriv:"<br> Den nesten bra husen ja"}, 
	2:{hus:"Blått hus",x:59.21368429502667, pris:pris[2], y:9.585710132976175, beskriv:"<br> Den er bra husen ja"}, 
	3:{hus:"Gult hus",x:51.4, y:-0.09, pris:pris[2], beskriv:"<br> Den er bra husen ja"}
};

var ikon = [
    L.icon({
    iconUrl: '../public/icons/eat.png',
    iconSize: [20, 20],
    iconAnchor: [10, 10]
}), 
    L.icon({
    iconUrl: '../public/icons/kindergarden.png',
    iconSize: [20, 20],
    iconAnchor: [10, 10]
}), 
    L.icon({
    iconUrl: '../public/icons/bus.png',
    iconSize: [20, 20],
    iconAnchor: [10, 10]
})
];

var interest = {
	0:{hus:"Dominos Pizza",x:59.2094436, y:9.602231, ikon:0, beskriv:"<br> VeldeBRA PIZZE"}, 
	1:{hus:"Hanken Barnehage",x:59.2085648, y:9.6018662, ikon:1, beskriv:"<br> Masse lekre barn ;)"}, 
	2:{hus:"Blått hus",x:59.2101218, y:9.6207422, ikon:2, beskriv:"<br> Den er bra husen ja"}, 
	3:{hus:"Gult hus",x:59.2020116, y:9.6153242, ikon:2, beskriv:"<br> Den er bra husen ja"}
};

var redIcon = L.icon({
	iconUrl: '../public/icons/house.png',
	iconSize: [40, 40], // ikon-størrelse
	iconAnchor: [40/2, 40] // ikon-anker. Der iconet treffer kartet
});

var map = L.map('mapid').setView([59.2089493, 9.6022095], 15); 
//SKIEN

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 


//for salgsobjekter
Object.keys(liste).forEach((v)=>{
L.marker([liste[v].x, liste[v].y], {icon: redIcon}).addTo(map)
    .bindPopup(liste[v].hus + liste[v].beskriv + "<br>" + Math.round(liste[v].pris) + "kr");
    // .openPopup();
});


//For interessepunkter
Object.keys(interest).forEach((v)=>{
L.marker([interest[v].x, interest[v].y], {icon: ikon[interest[v].ikon]} ).addTo(map)
    .bindPopup(interest[v].hus + interest[v].beskriv);
    // .openPopup();
});
})

});