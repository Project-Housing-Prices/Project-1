$(document).ready(function(){
  var objDb;
  var bilder
  $.getJSON("boligDb.php", function(data){
    objDb = data.bolig;
    bilder = data.bilder;
  })
  .done(function(){
    $.each(objDb, function(key, value){
      
      var bildeArr = new Array(3);
      for(var i = 0; i < 3; i++){
        for (var j = 0; j < bilder.length; j++) {
          if (value.Boligid == bilder[j].Bolig_Boligid) {
            bildeArr[i] = bilder[j].pathname;
          }
        }
      }
      objDb[key].bilder = bildeArr;
    })
    
  })
  .fail(function(){
    alert("Kunne ikke hente datasett");
  }).then(function(){


  console.log(objDb);
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

//  values i objDb

//    Adresse: "Schweigaardstun"
//    AdresseNR: "3"
//    Bad: "1"
//    Beskrivelse: "her er det en beskrivelse"
//    Boligid: "13"
//    Boligtype_idBoligtype: "1"
//    Byggerår: "2014"
//    Eier_PersonId: "2"
//    Email: "adrian_dahl@gmail.com"
//    Etternavn: "Dahl"
//    Fornavn: "Adrian"
//    Merknad: "C"
//    MobilNr: "45232789"
//    PersonId: "2"
//    Postnummer: "3717"
//    Prisantydning: "1360000"
//    Rom: "3"
//    Soverom: "2"
//    Tomteareal: "1323"
//    adrChar: null
//    bilder:
//        0: "Hus83"
//        1: "Hus83"
//        2: "Hus83"
//    energimerkning_Merknad: "C"
//    etasje_idetasje: "2"
//    idBoligtype: "1"
//    idetasje: "2"
//    kord:
//        0: 9.608882
//        1: 59.213178
//    postkode_Postnummer: "3717"
//    type: "Leilighet"

var ikon = [
  L.icon({
  iconUrl: 'university.png',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
}), 
  L.icon({
  iconUrl: 'tree.png',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
}), 
  L.icon({
  iconUrl: 'drink.png',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
}),
  L.icon({
  iconUrl: 'cycling.png',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
}),
  L.icon({
  iconUrl: 'restaurant.png',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
}),
  L.icon({
  iconUrl: 'bar.png',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
}),
  L.icon({
  iconUrl: 'supermarket.png',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
}),
];




var interessepunkt = {
//skole
0:{x:59.208943581063195, y:9.60219503183486, ikon:0},
1:{x:59.208943581063195, y:9.60219503183486, ikon:0},
2:{x:59.21913584708619, y:9.592150432799269, ikon:0},
3:{x:59.20002356261162, y:9.619273980630346, ikon:0},
4:{x:59.208943824270676, y:9.6051990372395, ikon:0},
5:{x:59.226428211100384, y:9.610264619497698, ikon:0},
6:{x:59.226558991997166, y:9.597044232757426, ikon:0},
7:{x:59.21944291077725, y:9.589663459156709, ikon:0},
8:{x:59.20581453103942, y:9.62071315793716, ikon:0},
9:{x:59.19348995538338, y:9.608749267896274, ikon:0},
10:{x:59.21263418825141, y:9.587271553315984, ikon:0},
11:{x:59.22616722733918, y:9.60980693828646, ikon:0},

// park
12:{x:59.2133591390522, y:9.602568545500633, ikon:1},
13:{x:59.21371237739377, y:9.603147464671757, ikon:1},
14:{x:59.20968843039397, y:9.606045262449669, ikon:1},
15:{x:59.20984147610822, y:9.607922958572047, ikon:1},
16:{x:59.209286508260455,  y:9.613293681125075, ikon:1},
17:{x:59.2091593173847, y:9.607563572086743, ikon:1},
18:{x:59.20939037128026, y:9.60910999446804, ikon:1},
19:{x:59.20909975928936, y:9.607906983646894, ikon:1},
20:{x:59.209497250252305,  y:9.605953422312572, ikon:1},

// kafe
21:{x:59.20782415730116, y:9.605244225124027, ikon: 2},
22:{x:59.210901835043536, y:9.602567767117936, ikon: 2},
23:{x:59.21086535731143, y:9.608218523351127, ikon: 2},
24:{x:59.21002115363121, y:9.607353372350408, ikon: 2},
25:{x:59.207668329053796, y:9.613679339665122, ikon: 2},
26:{x:59.20570319992506, y:9.611840810698679, ikon: 2},
27:{x:59.20810375150784, y:9.605809722133896, ikon: 2},
28:{x:59.207987459244535, y:9.608784132760391, ikon: 2},
29:{x:59.211115884106526, y:9.607561531922597, ikon: 2},
30:{x:59.19739050362428, y:9.604810011560742, ikon: 2},
31:{x:59.22131952420739, y:9.590958925290447, ikon: 2},
32:{x:59.20802612236165, y: 9.607398775611614, ikon: 2},

//trening 
33:{x:59.206924213980585, y:9.6116378043426, ikon:3},
34:{x:59.206956784823724, y:9.601987629623341, ikon:3},
35:{x:59.21267214561783, y:9.593596805437098, ikon:3},
36:{x:59.2117036332751, y:9.606214327962228, ikon:3},
37:{x:59.21460893672359, y:9.585772826474138, ikon:3},
38:{x:59.19963353639063, y:9.612201503293994, ikon:3},

// rest
39:{x:59.212511651527244, y:9.602470900361343, ikon:5},
40:{x:59.207910956648156, y:9.601113994804223, ikon:5},
41:{x:59.20781699391744, y:9.612888542654337, ikon:5},
42:{x:59.20867919089992, y:9.612043276970876, ikon:5},
43:{x:59.20805738552167, y:9.605002784155504, ikon:5},
44:{x:59.20486414909474, y:9.611528493696735, ikon:5},
45:{x:59.20258961635763, y:9.589410033643063, ikon:5},

// bar
46:{x:59.20887050797321, y:9.610088384112736, ikon:6},
47:{x:59.20695646488725, y:9.608806037629057, ikon:6},
48:{x:59.20589303156487, y:9.606453760541308, ikon:6},
49:{x:59.2090865443241, y:9.603612881003654, ikon:6},
50:{x:59.204074049478095, y:9.612672184007568, ikon:6},
51:{x:59.20742291002027, y:9.605285218015005, ikon:6},
52:{x:59.21324641732921, y:9.602672552014596, ikon:6},

//dVare
53:{x:59.21237080643502, y:9.607230558916356, ikon:7},
54:{x:59.21081110574426, y:9.606500767659615, ikon:7},
55:{x:59.20703240368848, y:9.608216374608425, ikon:7},
56:{x:59.21245879533682, y:9.587746173178683, ikon:7},
57:{x:59.21162411124486, y:9.59079335517739, ikon:7},
58:{x:59.2295227837957, y:9.601093959454515, ikon:7},
59:{x:59.21937778036585, y:9.606715667149075, ikon:7},
60:{x:59.21048125239358, y:9.622766577416893, ikon:7},
61:{x:59.1972107140948, y:9.604912548837554, ikon:7},
62:{x:59.19419961086238, y:9.610710971648787, ikon:7}
};

var redIcon = L.icon({
	iconUrl: '../public/icons/house.png',
	iconSize: [40, 40], // ikon-størrelse
	iconAnchor: [40/2, 40] // ikon-anker. Der iconet treffer kartet
});

var map = L.map('mapid').setView([59.2089493, 9.6022095], 15); 
//SKIEN
/*
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); */

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiYWRyaWFuZGFobG1hcCIsImEiOiJja25lcWp0dGsxdHg4MnBtcjV3OGEwMHA2In0._wE-cZAqan2qohwR39JEQQ'
}).addTo(map);



L.control.fullscreen().addTo(map);

//for salgsobjekter

var tellern = 0;

//Object.keys(liste).forEach((v)=>{
//L.marker([liste[v].x, liste[v].y], {icon: redIcon}).addTo(map)
//    .bindPopup(liste[v].hus + liste[v].beskriv + "<br>" + Math.round(liste[v].pris) + "kr");
//    // .openPopup();

function tallMedMellomrom(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
    
$.each(objDb, function(key, value){
var kordinat = value.kord.split(",");
var adressen = "";
if (adrChar = null) {
  adressen = value.Adresse + " " + value.AdresseNR;
} else{
  adressen = value.Adresse + " " + value.AdresseNR + value.adrChar;
}
L.marker([kordinat[0], kordinat[1]], {icon: redIcon}).addTo(map)
    .bindPopup( " " + adressen + "<br>" + Math.round(liste[v].pris) + "kr" +
      '<br> <br> <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#popup' + tellern + '">' +
      'Vis mer' +
      '</button>'
      );
    // .openPopup();
    $("#resultat-data").append(" " + 
      '<div class="modal fade" id="popup' + tellern + '" tabindex="-1" aria-labelledby="label' + tellern + '" aria-hidden="true">'+
      '<div class="modal-dialog">'+
      '<div class="modal-content">'+
      '<div class="modal-header">'+
      '<h5 class="modal-title" id="label' + tellern + '">'+ adressen +'</h5>'+
      '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
      '</div>'+
      '<div class="modal-body">'+
      '<img src="https://dnb-nextgen-cdn-cms.azureedge.net/cms-blobs/39991387b089437ba3c26946c4a3651b/2619c237c8b94dc89789250433bd0bd4.jpg">'+
      '<p>' + value.Beskrivelse + '</p>'+
      '</div>'+
      '<div class="modal-footer">'+
      '</div>'+
      '</div>'+
      '</div>'
      );

    $("#annonser").append(" "+
    '<div class="col product-card">'+
    '<div class="product-image">'+
    '<img src="Hus/'+ value.bilder[0] +'.jpg">'+
    '</div>'+
    '<div class="product">'+
    '<div class="product-top clearfix">'+
    '<div class="left">'+
    '<i class="fas fa-hand-holding-usd"></i>'+
    '<span>'+tallMedMellomrom(Math.round(liste[v].pris))+',-</span>'+
    '</div>'+
    '<div class="right">'+
    '<i class="fas fa-home"></i>'+
    '<span>400 m</span>'+
    '<sup>2</sup>'+
    '</div>'+
    '</div>'+
    '<div class="product-mid clearfix">'+
    '<div class="adresse">'+
    '<div>'+
    '<small>Skien '+ value.postkode_Postnummer +'</small>'+
    '</div>'+
    '<div>'+adressen+'</div>'+
    '</div>'+
    '<div class="distanse">'+
    '<div class="icondistanse"><small class="iconpadding"><i class="fas fa-shopping-cart"></i> 526m</small></div>'+
    '<div class="icondistanse"><small class="iconpadding"><i class="fas fa-shopping-cart"></i> 526m</small></div>'+
    '<div class="icondistanse"><small class="iconpadding"><i class="fas fa-shopping-cart"></i> 526m</small></div>'+
    '</div>'+
    '</div>'+
    '<div class="product-bot clearfix">'+
    '<div class="boticon lefticon">'+
    '<i class="far fa-building"></i>'+
    '<div><small>'+value.type+'</small></div>'+
    '</div>'+
    '<div class="boticon midicon">'+
    '<i class="fas fa-bath"></i>'+
    '<div><small>'+value.Bad+' baderom</small></div>'+
    '</div>'+
    '<div class="boticon righticon">'+
    '<i class="fas fa-bed"></i>'+
    '<div><small>'+ value.Soverom +' soverom</small></div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>');
    
    tellern++;
});/*
Object.keys(liste).forEach((v)=>{
L.marker([liste[v].x, liste[v].y], {icon: redIcon}).addTo(map)
    .bindPopup( " " + liste[v].hus + "<br>" + Math.round(liste[v].pris) + "kr" +
      '<br> <br> <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#popup' + tellern + '">' +
      'Vis mer' +
      '</button>'
      );
    // .openPopup();
    $("#resultat-data").append(" " + 
      '<div class="modal fade" id="popup' + tellern + '" tabindex="-1" aria-labelledby="label' + tellern + '" aria-hidden="true">'+
      '<div class="modal-dialog">'+
      '<div class="modal-content">'+
      '<div class="modal-header">'+
      '<h5 class="modal-title" id="label' + tellern + '">'+ liste[v].hus +'</h5>'+
      '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
      '</div>'+
      '<div class="modal-body">'+
      '<img src="https://dnb-nextgen-cdn-cms.azureedge.net/cms-blobs/39991387b089437ba3c26946c4a3651b/2619c237c8b94dc89789250433bd0bd4.jpg">'+
      '<p>' + liste[v].beskriv + '</p>'+
      '</div>'+
      '<div class="modal-footer">'+
      '</div>'+
      '</div>'+
      '</div>'
      );

    $("#annonser").append(" "+
    '<div class="col product-card">'+
    '<div class="product-image">'+
    '<img src="">'+
    '</div>'+
    '<div class="product">'+
    '<div class="product-top clearfix">'+
    '<div class="left">'+
    '<i class="fas fa-hand-holding-usd"></i>'+
    '<span>'+tallMedMellomrom(Math.round(liste[v].pris))+',-</span>'+
    '</div>'+
    '<div class="right">'+
    '<i class="fas fa-home"></i>'+
    '<span>400 m</span>'+
    '<sup>2</sup>'+
    '</div>'+
    '</div>'+
    '<div class="product-mid clearfix">'+
    '<div class="adresse">'+
    '<div>'+
    '<small>Skien</small>'+
    '</div>'+
    '<div>Schweigaardstun 3</div>'+
    '</div>'+
    '<div class="distanse">'+
    '<div class="icondistanse"><small class="iconpadding"><i class="fas fa-shopping-cart"></i> 526m</small></div>'+
    '<div class="icondistanse"><small class="iconpadding"><i class="fas fa-shopping-cart"></i> 526m</small></div>'+
    '<div class="icondistanse"><small class="iconpadding"><i class="fas fa-shopping-cart"></i> 526m</small></div>'+
    '</div>'+
    '</div>'+
    '<div class="product-bot clearfix">'+
    '<div class="boticon lefticon">'+
    '<i class="far fa-building"></i>'+
    '<div><small>Leilighet</small></div>'+
    '</div>'+
    '<div class="boticon midicon">'+
    '<i class="fas fa-bath"></i>'+
    '<div><small>2 baderom</small></div>'+
    '</div>'+
    '<div class="boticon righticon">'+
    '<i class="fas fa-bed"></i>'+
    '<div><small>'+liste[v].hus+'soverom</small></div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>');
    
    tellern++;

});*/

//var liste = {
//  0:{hus:"Rødt Hus",x:59.22022506832878, pris:pris[0], y:9.615463280937659, beskriv:"<br> Den er bra husen ja"}, 
//  1:{hus:"Fiolett hus",x:59.199803985842124, pris:pris[1], y:9.595800722793395, beskriv:"<br> Den nesten bra husen ja"}, 
//  2:{hus:"Blått hus",x:59.21368429502667, pris:pris[2], y:9.585710132976175, beskriv:"<br> Den er bra husen ja"}, 
//  3:{hus:"Gult hus",x:51.4, y:-0.09, pris:pris[2], beskriv:"<br> Den er bra husen ja"}
//};


//For interessepunkter
Object.keys(interessepunkt).forEach((v)=>{
L.marker([interessepunkt[v].x, interessepunkt[v].y], {icon: ikon[interessepunkt[v].ikon]}).addTo(map);
/*, {icon: ikon[interest[v].ikon]} */
});
});
});
