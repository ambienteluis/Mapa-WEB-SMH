var size = 0;
var placement = 'point';
function categories_UASMH_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'UA_02':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(9,134,0,0.39899999999999997)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.268}),fill: new ol.style.Fill({color: 'rgba(191,253,187,0.39899999999999997)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'UA_03':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(143,11,134,0.39899999999999997)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.268}),fill: new ol.style.Fill({color: 'rgba(251,140,238,0.39899999999999997)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'UA_04':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(242,234,4,0.39899999999999997)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.268}),fill: new ol.style.Fill({color: 'rgba(251,248,189,0.39899999999999997)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_UASMH_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("Nombre");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_UASMH_2(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
