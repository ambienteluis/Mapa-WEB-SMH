var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_CUENCADEAPORTERIORONQUILLO_1 = new ol.format.GeoJSON();
var features_CUENCADEAPORTERIORONQUILLO_1 = format_CUENCADEAPORTERIORONQUILLO_1.readFeatures(json_CUENCADEAPORTERIORONQUILLO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CUENCADEAPORTERIORONQUILLO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CUENCADEAPORTERIORONQUILLO_1.addFeatures(features_CUENCADEAPORTERIORONQUILLO_1);
var lyr_CUENCADEAPORTERIORONQUILLO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CUENCADEAPORTERIORONQUILLO_1, 
                style: style_CUENCADEAPORTERIORONQUILLO_1,
                popuplayertitle: 'CUENCA DE APORTE RIO RONQUILLO',
                interactive: true,
                title: '<img src="styles/legend/CUENCADEAPORTERIORONQUILLO_1.png" /> CUENCA DE APORTE RIO RONQUILLO'
            });
var format_UnidaddeAnlisisUASMH_2 = new ol.format.GeoJSON();
var features_UnidaddeAnlisisUASMH_2 = format_UnidaddeAnlisisUASMH_2.readFeatures(json_UnidaddeAnlisisUASMH_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnidaddeAnlisisUASMH_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidaddeAnlisisUASMH_2.addFeatures(features_UnidaddeAnlisisUASMH_2);
var lyr_UnidaddeAnlisisUASMH_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidaddeAnlisisUASMH_2, 
                style: style_UnidaddeAnlisisUASMH_2,
                popuplayertitle: 'Unidad de Análisis (UA) - SMH',
                interactive: true,
    title: 'Unidad de Análisis (UA) - SMH<br />\
    <img src="styles/legend/UnidaddeAnlisisUASMH_2_0.png" /> UA_02<br />\
    <img src="styles/legend/UnidaddeAnlisisUASMH_2_1.png" /> UA_03<br />\
    <img src="styles/legend/UnidaddeAnlisisUASMH_2_2.png" /> UA_04<br />' });
var format_REDHDRICA_3 = new ol.format.GeoJSON();
var features_REDHDRICA_3 = format_REDHDRICA_3.readFeatures(json_REDHDRICA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REDHDRICA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REDHDRICA_3.addFeatures(features_REDHDRICA_3);
var lyr_REDHDRICA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REDHDRICA_3, 
                style: style_REDHDRICA_3,
                popuplayertitle: 'RED HÍDRICA',
                interactive: true,
    title: 'RED HÍDRICA<br />\
    <img src="styles/legend/REDHDRICA_3_0.png" /> Rio principal<br />\
    <img src="styles/legend/REDHDRICA_3_1.png" /> Rios secundarios<br />' });
var format_CAPTACINRONQUIILLO_4 = new ol.format.GeoJSON();
var features_CAPTACINRONQUIILLO_4 = format_CAPTACINRONQUIILLO_4.readFeatures(json_CAPTACINRONQUIILLO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAPTACINRONQUIILLO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAPTACINRONQUIILLO_4.addFeatures(features_CAPTACINRONQUIILLO_4);
cluster_CAPTACINRONQUIILLO_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CAPTACINRONQUIILLO_4
});
var lyr_CAPTACINRONQUIILLO_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CAPTACINRONQUIILLO_4, 
                style: style_CAPTACINRONQUIILLO_4,
                popuplayertitle: 'CAPTACIÓN RONQUIILLO',
                interactive: true,
                title: '<img src="styles/legend/CAPTACINRONQUIILLO_4.png" /> CAPTACIÓN RONQUIILLO'
            });
var format_ESTACIONESSMH_5 = new ol.format.GeoJSON();
var features_ESTACIONESSMH_5 = format_ESTACIONESSMH_5.readFeatures(json_ESTACIONESSMH_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTACIONESSMH_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTACIONESSMH_5.addFeatures(features_ESTACIONESSMH_5);
var lyr_ESTACIONESSMH_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTACIONESSMH_5, 
                style: style_ESTACIONESSMH_5,
                popuplayertitle: 'ESTACIONES SMH',
                interactive: true,
    title: 'ESTACIONES SMH<br />\
    <img src="styles/legend/ESTACIONESSMH_5_0.png" /> HIDRO 01<br />\
    <img src="styles/legend/ESTACIONESSMH_5_1.png" /> HIDRO 02<br />\
    <img src="styles/legend/ESTACIONESSMH_5_2.png" /> METEO 01<br />\
    <img src="styles/legend/ESTACIONESSMH_5_3.png" /> METEO 02<br />\
    <img src="styles/legend/ESTACIONESSMH_5_4.png" /> METEO 03<br />\
    <img src="styles/legend/ESTACIONESSMH_5_5.png" /> TURBIDIMETRO <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_CUENCADEAPORTERIORONQUILLO_1.setVisible(true);lyr_UnidaddeAnlisisUASMH_2.setVisible(true);lyr_REDHDRICA_3.setVisible(true);lyr_CAPTACINRONQUIILLO_4.setVisible(true);lyr_ESTACIONESSMH_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_CUENCADEAPORTERIORONQUILLO_1,lyr_UnidaddeAnlisisUASMH_2,lyr_REDHDRICA_3,lyr_CAPTACINRONQUIILLO_4,lyr_ESTACIONESSMH_5];
lyr_CUENCADEAPORTERIORONQUILLO_1.set('fieldAliases', {'Name': 'Name', 'Perímetro': 'Perímetro', 'Área': 'Área', });
lyr_UnidaddeAnlisisUASMH_2.set('fieldAliases', {'fid': 'fid', 'Caserio': 'Caserio', 'Rio': 'Rio', 'Area km2': 'Area km2', 'Nombre': 'Nombre', });
lyr_REDHDRICA_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'nombre': 'nombre', 'Shape_Leng': 'Shape_Leng', 'categoria': 'categoria', 'subcuenca': 'subcuenca', 'interes': 'interes', 'cushuro': 'cushuro', 'Longitud K': 'Longitud K', });
lyr_CAPTACINRONQUIILLO_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'nombre': 'nombre', 'cuenca_cap': 'cuenca_cap', 'coor_x': 'coor_x', 'coor_y': 'coor_y', });
lyr_ESTACIONESSMH_5.set('fieldAliases', {'id': 'id', 'Tipo': 'Tipo', 'ComunidadC': 'ComunidadC', 'Propietari': 'Propietari', 'X': 'X', 'Y': 'Y', 'UA': 'UA', 'Nombre': 'Nombre', 'Estado': 'Estado', 'Ini_regist': 'Ini_regist', 'Foto': 'Foto', });
lyr_CUENCADEAPORTERIORONQUILLO_1.set('fieldImages', {'Name': 'TextEdit', 'Perímetro': 'TextEdit', 'Área': 'TextEdit', });
lyr_UnidaddeAnlisisUASMH_2.set('fieldImages', {'fid': 'Hidden', 'Caserio': 'TextEdit', 'Rio': 'TextEdit', 'Area km2': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_REDHDRICA_3.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'nombre': 'TextEdit', 'Shape_Leng': 'Hidden', 'categoria': 'Hidden', 'subcuenca': 'Hidden', 'interes': 'Hidden', 'cushuro': 'Hidden', 'Longitud K': 'Hidden', });
lyr_CAPTACINRONQUIILLO_4.set('fieldImages', {'OBJECTID': 'Hidden', 'nombre': 'TextEdit', 'cuenca_cap': 'Hidden', 'coor_x': 'Hidden', 'coor_y': 'Hidden', });
lyr_ESTACIONESSMH_5.set('fieldImages', {'id': 'Hidden', 'Tipo': 'TextEdit', 'ComunidadC': 'TextEdit', 'Propietari': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'UA': 'TextEdit', 'Nombre': 'Hidden', 'Estado': 'TextEdit', 'Ini_regist': 'DateTime', 'Foto': 'ExternalResource', });
lyr_CUENCADEAPORTERIORONQUILLO_1.set('fieldLabels', {'Name': 'no label', 'Perímetro': 'no label', 'Área': 'no label', });
lyr_UnidaddeAnlisisUASMH_2.set('fieldLabels', {'Caserio': 'no label', 'Rio': 'no label', 'Area km2': 'no label', 'Nombre': 'no label', });
lyr_REDHDRICA_3.set('fieldLabels', {'nombre': 'no label', });
lyr_CAPTACINRONQUIILLO_4.set('fieldLabels', {'nombre': 'no label', });
lyr_ESTACIONESSMH_5.set('fieldLabels', {'Tipo': 'inline label - always visible', 'ComunidadC': 'inline label - always visible', 'Propietari': 'no label', 'X': 'no label', 'Y': 'no label', 'UA': 'inline label - always visible', 'Estado': 'header label - always visible', 'Ini_regist': 'inline label - visible with data', });
lyr_ESTACIONESSMH_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});