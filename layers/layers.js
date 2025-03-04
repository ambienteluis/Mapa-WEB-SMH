var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_CARonquillo_1 = new ol.format.GeoJSON();
var features_CARonquillo_1 = format_CARonquillo_1.readFeatures(json_CARonquillo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CARonquillo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CARonquillo_1.addFeatures(features_CARonquillo_1);
var lyr_CARonquillo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CARonquillo_1, 
                style: style_CARonquillo_1,
                popuplayertitle: 'CA Ronquillo',
                interactive: true,
                title: '<img src="styles/legend/CARonquillo_1.png" /> CA Ronquillo'
            });
var format_UASMH_2 = new ol.format.GeoJSON();
var features_UASMH_2 = format_UASMH_2.readFeatures(json_UASMH_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UASMH_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UASMH_2.addFeatures(features_UASMH_2);
var lyr_UASMH_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UASMH_2, 
                style: style_UASMH_2,
                popuplayertitle: 'UA SMH',
                interactive: true,
    title: 'UA SMH<br />\
    <img src="styles/legend/UASMH_2_0.png" /> UA_02<br />\
    <img src="styles/legend/UASMH_2_1.png" /> UA_03<br />\
    <img src="styles/legend/UASMH_2_2.png" /> UA_04<br />' });
var format_RedHidrogrfica_3 = new ol.format.GeoJSON();
var features_RedHidrogrfica_3 = format_RedHidrogrfica_3.readFeatures(json_RedHidrogrfica_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedHidrogrfica_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedHidrogrfica_3.addFeatures(features_RedHidrogrfica_3);
var lyr_RedHidrogrfica_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RedHidrogrfica_3, 
                style: style_RedHidrogrfica_3,
                popuplayertitle: 'Red Hidrográfica',
                interactive: true,
    title: 'Red Hidrográfica<br />\
    <img src="styles/legend/RedHidrogrfica_3_0.png" /> Rio principal<br />\
    <img src="styles/legend/RedHidrogrfica_3_1.png" /> Rios secundarios<br />' });
var format_Captacion_4 = new ol.format.GeoJSON();
var features_Captacion_4 = format_Captacion_4.readFeatures(json_Captacion_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Captacion_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Captacion_4.addFeatures(features_Captacion_4);
cluster_Captacion_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Captacion_4
});
var lyr_Captacion_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Captacion_4, 
                style: style_Captacion_4,
                popuplayertitle: 'Captacion',
                interactive: true,
                title: '<img src="styles/legend/Captacion_4.png" /> Captacion'
            });
var format_EstacionesSMH_5 = new ol.format.GeoJSON();
var features_EstacionesSMH_5 = format_EstacionesSMH_5.readFeatures(json_EstacionesSMH_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstacionesSMH_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstacionesSMH_5.addFeatures(features_EstacionesSMH_5);
var lyr_EstacionesSMH_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstacionesSMH_5, 
                style: style_EstacionesSMH_5,
                popuplayertitle: 'Estaciones SMH',
                interactive: true,
    title: 'Estaciones SMH<br />\
    <img src="styles/legend/EstacionesSMH_5_0.png" /> HIDRO 01<br />\
    <img src="styles/legend/EstacionesSMH_5_1.png" /> HIDRO 02<br />\
    <img src="styles/legend/EstacionesSMH_5_2.png" /> METEO 01<br />\
    <img src="styles/legend/EstacionesSMH_5_3.png" /> METEO 02<br />\
    <img src="styles/legend/EstacionesSMH_5_4.png" /> METEO 03<br />\
    <img src="styles/legend/EstacionesSMH_5_5.png" /> TURBIDIMETRO <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_CARonquillo_1.setVisible(true);lyr_UASMH_2.setVisible(true);lyr_RedHidrogrfica_3.setVisible(true);lyr_Captacion_4.setVisible(true);lyr_EstacionesSMH_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_CARonquillo_1,lyr_UASMH_2,lyr_RedHidrogrfica_3,lyr_Captacion_4,lyr_EstacionesSMH_5];
lyr_CARonquillo_1.set('fieldAliases', {'Name': 'Name', 'Perímetro': 'Perímetro', 'Área': 'Área', });
lyr_UASMH_2.set('fieldAliases', {'fid': 'fid', 'Caserio': 'Caserio', 'Rio': 'Rio', 'Area km2': 'Area km2', 'Nombre': 'Nombre', });
lyr_RedHidrogrfica_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'nombre': 'nombre', 'Shape_Leng': 'Shape_Leng', 'categoria': 'categoria', 'subcuenca': 'subcuenca', 'interes': 'interes', 'cushuro': 'cushuro', 'Longitud K': 'Longitud K', });
lyr_Captacion_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'nombre': 'nombre', 'cuenca_cap': 'cuenca_cap', 'coor_x': 'coor_x', 'coor_y': 'coor_y', });
lyr_EstacionesSMH_5.set('fieldAliases', {'id': 'id', 'Tipo': 'Tipo', 'ComunidadC': 'ComunidadC', 'Propietari': 'Propietari', 'X': 'X', 'Y': 'Y', 'UA': 'UA', 'Nombre': 'Nombre', 'Estado': 'Estado', 'Ini_regist': 'Ini_regist', 'Foto': 'Foto', });
lyr_CARonquillo_1.set('fieldImages', {'Name': 'TextEdit', 'Perímetro': 'TextEdit', 'Área': 'TextEdit', });
lyr_UASMH_2.set('fieldImages', {'fid': 'Hidden', 'Caserio': 'TextEdit', 'Rio': 'TextEdit', 'Area km2': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_RedHidrogrfica_3.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'nombre': 'TextEdit', 'Shape_Leng': 'Hidden', 'categoria': 'Hidden', 'subcuenca': 'Hidden', 'interes': 'Hidden', 'cushuro': 'Hidden', 'Longitud K': 'Hidden', });
lyr_Captacion_4.set('fieldImages', {'OBJECTID': 'Hidden', 'nombre': 'TextEdit', 'cuenca_cap': 'Hidden', 'coor_x': 'Hidden', 'coor_y': 'Hidden', });
lyr_EstacionesSMH_5.set('fieldImages', {'id': 'Hidden', 'Tipo': 'TextEdit', 'ComunidadC': 'TextEdit', 'Propietari': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'UA': 'TextEdit', 'Nombre': 'Hidden', 'Estado': 'TextEdit', 'Ini_regist': 'DateTime', 'Foto': 'Hidden', });
lyr_CARonquillo_1.set('fieldLabels', {'Name': 'no label', 'Perímetro': 'no label', 'Área': 'no label', });
lyr_UASMH_2.set('fieldLabels', {'Caserio': 'no label', 'Rio': 'no label', 'Area km2': 'no label', 'Nombre': 'no label', });
lyr_RedHidrogrfica_3.set('fieldLabels', {'nombre': 'no label', });
lyr_Captacion_4.set('fieldLabels', {'nombre': 'no label', });
lyr_EstacionesSMH_5.set('fieldLabels', {'Tipo': 'inline label - always visible', 'ComunidadC': 'inline label - always visible', 'Propietari': 'no label', 'X': 'no label', 'Y': 'no label', 'UA': 'inline label - always visible', 'Estado': 'header label - always visible', 'Ini_regist': 'inline label - visible with data', });
lyr_EstacionesSMH_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});