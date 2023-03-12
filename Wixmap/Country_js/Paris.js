
            
        var antPath = L.polyline.antPath;
        var path = antPath(arrs, {
            "paused": false,   
            "reverse": false,
            "delay": 3000,
            "dashArray": [10, 20],
            "weight": 5,
            "opacity": 0.5,
            "color": "#0000FF",
            "pulseColor": "#FFFFFF"
        });
        path.addTo(map);
       
        
       
    

  


        
var marker = L.marker([48.84749266641209, 2.3384611778502427],{icon: Orangepin});marker.bindPopup('<iframe src="https://www.instagram.com/florencekahnboutique/tagged/?hl=fr" width="580" height="480"></iframe>' , {maxWidth : 600 },{keepInView: true});map.addLayer(marker);
var marker1 = L.marker([48.85679110827451, 2.35236240249764],{icon: ParisPin});marker1.bindPopup('<iframe src="https://fetogrefi.life/maptest" width="580" height="480"></iframe>' , {maxWidth : 600 });map.addLayer(marker1);
var marker2 = L.marker([48.405210995515006, 2.7013194226488144],{icon: Orangepin});marker2.bindPopup('<iframe src="https://fetogrefi.life/maptest" width="580" height="480"></iframe>' , {maxWidth : 600 });map.addLayer(marker2);
var marker3 = L.marker([48.559429362536406, 3.2986401763456987],{icon: Orangepin});marker3.bindPopup('<iframe src="https://fetogrefi.life/maptest" width="580" height="480"></iframe>' , {maxWidth : 600 });map.addLayer(marker3);
var marker4 = L.marker([48.582220215898, 7.748441285443961],{icon: Orangepin});marker4.bindPopup('<iframe src="https://fetogrefi.life/maptest" width="580" height="480"></iframe>' , {maxWidth : 600 });map.addLayer(marker4);
     

map.on('zoomend', function () {
    if (map.getZoom() < 14 && map.hasLayer(marker)) { map.removeLayer(marker); } if (map.getZoom() >14 && map.hasLayer(marker) == false) { map.addLayer(marker); }   
    if (map.getZoom() > 10 && map.hasLayer(marker1))  { map.removeLayer(marker1); }  if (map.getZoom() <10 && map.hasLayer(marker1) == false) { map.addLayer(marker1); }   
    if (map.getZoom() < 6 && map.hasLayer(marker2))  { map.removeLayer(marker2); }  if (map.getZoom() >6 && map.hasLayer(marker2) == false) { map.addLayer(marker2); }   
    if (map.getZoom() < 6 && map.hasLayer(marker3))  { map.removeLayer(marker3); }  if (map.getZoom() >6 && map.hasLayer(marker3) == false) { map.addLayer(marker3); }   
    if (map.getZoom() < 6 && map.hasLayer(marker4))  { map.removeLayer(marker4); }  if (map.getZoom() >6 && map.hasLayer(marker4) == false) { map.addLayer(marker4); }   
  

}); 



var metro_1 = L.geoJson(metro_1, {style: function(feature) { return {stroke: true, color: "#ffcd00", weight: 3,"opacity": 0.65}; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
var metro_2 = L.geoJson(metro_2, {style: function(feature) { return {stroke: true, color: "#003ca6", weight: 3,"opacity": 0.65 }; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
var metro_3 = L.geoJson(metro_3, {style: function(feature) { return {stroke: true, color: "#837902", weight: 3,"opacity": 0.65 }; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
var metro_4 = L.geoJson(metro_4, {style: function(feature) { return {stroke: true, color: "#cf009e", weight: 3,"opacity": 0.65 }; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
var metro_5 = L.geoJson(metro_5, {style: function(feature) { return {stroke: true, color: "#ff7e2e", weight: 3,"opacity": 0.65 }; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
var metro_6 = L.geoJson(metro_6, {style: function(feature) { return {stroke: true, color: "#6eca97", weight: 3,"opacity": 0.65 }; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
var metro_7 = L.geoJson(metro_7, {style: function(feature) { return {stroke: true, color: "#fa9aba", weight: 3,"opacity": 0.65 }; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
var metro_8 = L.geoJson(metro_8, {style: function(feature) { return {stroke: true, color: "#e19bdf", weight: 3,"opacity": 0.65 }; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
var metro_9 = L.geoJson(metro_9, {style: function(feature) { return {stroke: true, color: "#b6bd00", weight: 3,"opacity": 0.65 }; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
var metro_10 = L.geoJson(metro_10, {style: function(feature) { return {stroke: true, color: "#c9910d", weight: 3,"opacity": 0.65 }; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
var metro_11 = L.geoJson(metro_11, {style: function(feature) { return {stroke: true, color: "#704b1c", weight: 3,"opacity": 0.65 }; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
var metro_12 = L.geoJson(metro_12, {style: function(feature) { return {stroke: true, color: "#007852", weight: 3,"opacity": 0.65 }; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
var metro_13 = L.geoJson(metro_13, {style: function(feature) { return {stroke: true, color: "#6ec4e8", weight: 3,"opacity": 0.65 }; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
var metro_14 = L.geoJson(metro_14, {style: function(feature) { return {stroke: true, color: "#62259d", weight: 3,"opacity": 0.65 }; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);

L.geoJson(champ_de_mars, {style: function(feature) { return {stroke: true, color: "#729b6f", weight: 0 ,fill: true, fillOpacity: .3,fillColor: 'rgba(114,155,111,1.0)',interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup( feature.properties.name + '<iframe src="https://fetogrefi.life/maptest" width="580" height="480"></iframe>', {maxWidth : 600 }); } }).addTo(map);
L.geoJson(cimetiere_du_pere_lachaise, {style: function(feature) { return {stroke: true, color: "#729b6f", weight: 0 ,fill: true, fillOpacity: .3,fillColor: 'rgba(114,155,111,1.0)',interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup( feature.properties.name); } }).addTo(map);
L.geoJson(esplanade_gaston_monnerville, {style: function(feature) { return {stroke: true, color: "#729b6f", weight: 0 ,fill: true, fillOpacity: .3,fillColor: 'rgba(114,155,111,1.0)',interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
L.geoJson(jardin_des_erands_explorateurs, {style: function(feature) { return {stroke: true, color: "#729b6f", weight: 0 ,fill: true, fillOpacity: .3,fillColor: 'rgba(114,155,111,1.0)',interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
L.geoJson(jardin_des_tuileries, {style: function(feature) { return {stroke: true, color: "#729b6f", weight: 0 ,fill: true, fillOpacity: .3,fillColor: 'rgba(114,155,111,1.0)',interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup( feature.properties.name); } }).addTo(map);
L.geoJson(jardin_du_luxembourg, {style: function(feature) { return {stroke: true, color: "#729b6f", weight: 0 ,fill: true, fillOpacity: .3,fillColor: 'rgba(114,155,111,1.0)',interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup( feature.properties.name); } }).addTo(map);
L.geoJson(jardins_du_trocadero, {style: function(feature) { return {stroke: true, color: "#729b6f", weight: 0 ,fill: true, fillOpacity: .3,fillColor: 'rgba(114,155,111,1.0)',interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup( feature.properties.name); } }).addTo(map);
L.geoJson(place_de_la_concorde, {style: function(feature) { return {stroke: true, color: "#729b6f", weight: 0 ,fill: true, fillOpacity: .3,fillColor: 'rgba(114,155,111,1.0)',interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
L.geoJson(place_des_vosges, {style: function(feature) { return {stroke: true, color: "#729b6f", weight: 0 ,fill: true, fillOpacity: .3,fillColor: 'rgba(114,155,111,1.0)',interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
L.geoJson(square_jean_XXIII, {style: function(feature) { return {stroke: true, color: "#729b6f", weight: 0 ,fill: true, fillOpacity: .3,fillColor: 'rgba(114,155,111,1.0)',interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
L.geoJson(square_louise_michel, {style: function(feature) { return {stroke: true, color: "#729b6f", weight: 0 ,fill: true, fillOpacity: .3,fillColor: 'rgba(114,155,111,1.0)',interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);


L.geoJson(palais_du_louvre, {style: function(feature) { return {stroke: true, color: "#f2c10e", weight: 0 ,fill: true, fillOpacity: .4,fillColor: "#f2c10e",interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
L.geoJson(basilique_du_sacre_coeur , {style: function(feature) { return {stroke: true, color: "#f2c10e", weight: 0 ,fill: true, fillOpacity: .4,fillColor: "#f2c10e",interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
L.geoJson(tour_eiffel , {style: function(feature) { return {stroke: true, color: "#f2c10e", weight: 0 ,fill: true, fillOpacity: .4,fillColor: "#f2c10e",interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
L.geoJson(arc_de_triomphe , {style: function(feature) { return {stroke: true, color: "#f2c10e", weight: 0 ,fill: true, fillOpacity: .4,fillColor: "#f2c10e",interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
L.geoJson(musee_national_picasso_paris , {style: function(feature) { return {stroke: true, color: "#f2c10e", weight: 0 ,fill: true, fillOpacity: .4,fillColor: "#f2c10e",interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
L.geoJson(musee_d_art_moderne_de_paris , {style: function(feature) { return {stroke: true, color: "#f2c10e", weight: 0 ,fill: true, fillOpacity: .4,fillColor: "#f2c10e",interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
L.geoJson(palais_de_tokyo, {style: function(feature) { return {stroke: true, color: "#f2c10e", weight: 0 ,fill: true, fillOpacity: .4,fillColor: "#f2c10e",interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
L.geoJson(colonne_de_juillet, {style: function(feature) { return {stroke: true, color: "#f2c10e", weight: 0 ,fill: true, fillOpacity: .4,fillColor: "#f2c10e",interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
L.geoJson(institut_du_monde_arabe, {style: function(feature) { return {stroke: true, color: "#f2c10e", weight: 0 ,fill: true, fillOpacity: .4,fillColor: "#f2c10e",interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
L.geoJson(musee_de_l_orangerie, {style: function(feature) { return {stroke: true, color: "#f2c10e", weight: 0 ,fill: true, fillOpacity: .4,fillColor: "#f2c10e",interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
L.geoJson(opera_garnier, {style: function(feature) { return {stroke: true, color: "#f2c10e", weight: 0 ,fill: true, fillOpacity: .4,fillColor: "#f2c10e",interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
L.geoJson(palais_du_luxembourg, {style: function(feature) { return {stroke: true, color: "#f2c10e", weight: 0 ,fill: true, fillOpacity: .4,fillColor: "#f2c10e",interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
L.geoJson(cathedrale_notre_dame_de_paris, {style: function(feature) { return {stroke: true, color: "#f2c10e", weight: 0 ,fill: true, fillOpacity: .4,fillColor: "#f2c10e",interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);

var rail_1 = L.geoJson(Ligne_PLM_de_Paris_à_Lyon, {style: function(feature) { return {stroke: true, color: "#000000", weight: 3 ,fill: true, fillOpacity: 0,fillColor: "#ffffff",interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
var rail_2 = L.geoJson(Ligne_de_Longueville_à_Esternay, {style: function(feature) { return {stroke: true, color: "#000000", weight: 3 ,fill: true, fillOpacity: 0,fillColor: "#ffffff",interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
var rail_3 = L.geoJson(Ligne_de_Paris_Est_à_Mulhouse_Ville, {style: function(feature) { return {stroke: true, color: "#000000", weight: 3 ,fill: true, fillOpacity: 0,fillColor: "#ffffff",interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);
var rail_4 = L.geoJson(LGV_Est_européenne, {style: function(feature) { return {stroke: true, color: "#000000", weight: 3 ,fill: true, fillOpacity: 0,fillColor: "#ffffff",interactive: true,}; }, onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name); } }).addTo(map);




map.on('zoomend', function () {
    if (map.getZoom() < 12 && map.hasLayer(metro_1)) { map.removeLayer(metro_1); } if (map.getZoom() > 12 && map.hasLayer(metro_1) == false) { map.addLayer(metro_1); }   
    if (map.getZoom() < 12 && map.hasLayer(metro_2)) { map.removeLayer(metro_2); } if (map.getZoom() > 12 && map.hasLayer(metro_2) == false) { map.addLayer(metro_2); }   
    if (map.getZoom() < 12 && map.hasLayer(metro_3)) { map.removeLayer(metro_3); } if (map.getZoom() > 12 && map.hasLayer(metro_3) == false) { map.addLayer(metro_3); }   
    if (map.getZoom() < 12 && map.hasLayer(metro_4)) { map.removeLayer(metro_4); } if (map.getZoom() > 12 && map.hasLayer(metro_4) == false) { map.addLayer(metro_4); }   
    if (map.getZoom() < 12 && map.hasLayer(metro_5)) { map.removeLayer(metro_5); } if (map.getZoom() > 12 && map.hasLayer(metro_5) == false) { map.addLayer(metro_5); }   
    if (map.getZoom() < 12 && map.hasLayer(metro_6)) { map.removeLayer(metro_6); } if (map.getZoom() > 12 && map.hasLayer(metro_6) == false) { map.addLayer(metro_6); }    
    if (map.getZoom() < 12 && map.hasLayer(metro_7)) { map.removeLayer(metro_7); } if (map.getZoom() > 12 && map.hasLayer(metro_7) == false) { map.addLayer(metro_7); }   
    if (map.getZoom() < 12 && map.hasLayer(metro_8)) { map.removeLayer(metro_8); } if (map.getZoom() > 12 && map.hasLayer(metro_8) == false) { map.addLayer(metro_8); }   
    if (map.getZoom() < 12 && map.hasLayer(metro_9)) { map.removeLayer(metro_9); } if (map.getZoom() > 12 && map.hasLayer(metro_9) == false) { map.addLayer(metro_9); }   
    if (map.getZoom() < 12 && map.hasLayer(metro_10)) { map.removeLayer(metro_10); } if (map.getZoom() > 12 && map.hasLayer(metro_10) == false) { map.addLayer(metro_10); }   
    if (map.getZoom() < 12 && map.hasLayer(metro_11)) { map.removeLayer(metro_11); } if (map.getZoom() > 12 && map.hasLayer(metro_11) == false) { map.addLayer(metro_11); }   
    if (map.getZoom() < 12 && map.hasLayer(metro_12)) { map.removeLayer(metro_12); } if (map.getZoom() > 12 && map.hasLayer(metro_12) == false) { map.addLayer(metro_12); }   
    if (map.getZoom() < 12 && map.hasLayer(metro_13)) { map.removeLayer(metro_13); } if (map.getZoom() > 12 && map.hasLayer(metro_13) == false) { map.addLayer(metro_13); }   
    if (map.getZoom() < 12 && map.hasLayer(metro_14)) { map.removeLayer(metro_14); } if (map.getZoom() > 12 && map.hasLayer(metro_14) == false) { map.addLayer(metro_14); }   
  

});  



map.on('zoomend', function () {
    if (map.getZoom() < 6 && map.hasLayer(rail_1 )) { map.removeLayer(rail_1 ); } if (map.getZoom() >6 && map.hasLayer(rail_1 ) == false) { map.addLayer(rail_1 ); }   
    if (map.getZoom() < 6 && map.hasLayer(rail_2 )) { map.removeLayer(rail_2 ); } if (map.getZoom() >6 && map.hasLayer(rail_2 ) == false) { map.addLayer(rail_2 ); }   
    if (map.getZoom() < 6 && map.hasLayer(rail_3 )) { map.removeLayer(rail_3 ); } if (map.getZoom() >6 && map.hasLayer(rail_3 ) == false) { map.addLayer(rail_3 ); }   
    if (map.getZoom() < 6 && map.hasLayer(rail_4 )) { map.removeLayer(rail_4 ); } if (map.getZoom() >6 && map.hasLayer(rail_4 ) == false) { map.addLayer(rail_4 ); }   
 

}); 

  





       
 
