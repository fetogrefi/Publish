var wms_layers = [];


        var lyr_WorldBase_0 = new ol.layer.Tile({
            'title': 'World Base',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://fetogrefi.github.io/Publish/Worldbase/{z}/{x}/{y}.png'
            })
        });

lyr_WorldBase_0.setVisible(true);
var layersList = [lyr_WorldBase_0];
