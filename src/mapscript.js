
var liste = {
	0:{hus:"Rødt Hus",x:51.1, y:-0.09, beskriv:"<br> Den er bra husen ja"}, 
	1:{hus:"Fiolett hus",x:51.2, y:-0.09, beskriv:"<br> Den nesten bra husen ja"}, 
	2:{hus:"Blått hus",x:51.3, y:-0.09, beskriv:"<br> Den er bra husen ja"}, 
	3:{hus:"Gult hus",x:51.4, y:-0.09, beskriv:"<br> Den er bra husen ja"}
};

var map = L.map('mapid').setView([59.412369, 9.067760], 15); 
//59°17′26″N 11°12′10″Ø

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 


Object.keys(liste).forEach((v)=>{
L.marker([liste[v].x, liste[v].y]).addTo(map)
    .bindPopup(liste[v].hus + liste[v].beskriv);
    // .openPopup();
});

