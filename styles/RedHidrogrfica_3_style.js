var size = 0;
var placement = 'point';
function categories_RedHidrogrfica_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'RIOS PRINCIPALES':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(104,219,254,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RIOS SECUNDARIOS':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(148,250,252,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.14}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_RedHidrogrfica_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("q2wHide_categoria");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_RedHidrogrfica_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
