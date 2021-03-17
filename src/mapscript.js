

var[] xPos = {59.22022506832878, 59.199803985842124, 59.21368429502667, 51.4};
var[] yPos = {9.615463280937659, 9.595800722793395, 9.585710132976175, -0.09};



var liste = {
	0:{hus:"Rødt Hus",x:59.22022506832878, y:9.615463280937659, beskriv:"<br> Den er bra husen ja"}, 
	1:{hus:"Fiolett hus",x:59.199803985842124, y:9.595800722793395, beskriv:"<br> Den nesten bra husen ja"}, 
	2:{hus:"Blått hus",x:59.21368429502667, y:9.585710132976175, beskriv:"<br> Den er bra husen ja"}, 
	3:{hus:"Gult hus",x:51.4, y:-0.09, beskriv:"<br> Den er bra husen ja"}
};

var interest = {
	0:{hus:"Dominos Pizza",x:59.2094436, y:9.602231, beskriv:"<br> VeldeBRA PIZZE"}, 
	1:{hus:"Hanken Barnehage",x:59.2085648, y:9.6018662, beskriv:"<br> Masse lekre barn ;)"}, 
	2:{hus:"Blått hus",x:59.2101218, y:9.6207422, beskriv:"<br> Den er bra husen ja"}, 
	3:{hus:"Gult hus",x:59.2020116, y:9.6153242, beskriv:"<br> Den er bra husen ja"}
};

var redIcon = L.icon({
	iconUrl: 'redMark.png',
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
    .bindPopup(liste[v].hus + liste[v].beskriv);
    // .openPopup();
});


//For interessepunkter
Object.keys(interest).forEach((v)=>{
L.marker([interest[v].x, interest[v].y]).addTo(map)
    .bindPopup(interest[v].hus + interest[v].beskriv);
    // .openPopup();
});

