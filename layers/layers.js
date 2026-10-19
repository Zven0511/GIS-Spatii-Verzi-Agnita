ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3844").setExtent([466099.859989, 496564.580597, 474552.733085, 502209.380597]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_SVLocuinteCondominiu_3 = new ol.format.GeoJSON();
var features_SVLocuinteCondominiu_3 = format_SVLocuinteCondominiu_3.readFeatures(json_SVLocuinteCondominiu_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVLocuinteCondominiu_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVLocuinteCondominiu_3.addFeatures(features_SVLocuinteCondominiu_3);
var lyr_SVLocuinteCondominiu_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVLocuinteCondominiu_3, 
                style: style_SVLocuinteCondominiu_3,
                popuplayertitle: 'SV-Locuinte Condominiu',
                interactive: true,
                title: '<img src="styles/legend/SVLocuinteCondominiu_3.png" /> SV-Locuinte Condominiu'
            });
var format_SVZoneVerziSpecializate_4 = new ol.format.GeoJSON();
var features_SVZoneVerziSpecializate_4 = format_SVZoneVerziSpecializate_4.readFeatures(json_SVZoneVerziSpecializate_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVZoneVerziSpecializate_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVZoneVerziSpecializate_4.addFeatures(features_SVZoneVerziSpecializate_4);
var lyr_SVZoneVerziSpecializate_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVZoneVerziSpecializate_4, 
                style: style_SVZoneVerziSpecializate_4,
                popuplayertitle: 'SV-Zone Verzi Specializate',
                interactive: true,
                title: '<img src="styles/legend/SVZoneVerziSpecializate_4.png" /> SV-Zone Verzi Specializate'
            });
var format_SVParcuri_5 = new ol.format.GeoJSON();
var features_SVParcuri_5 = format_SVParcuri_5.readFeatures(json_SVParcuri_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVParcuri_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVParcuri_5.addFeatures(features_SVParcuri_5);
var lyr_SVParcuri_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVParcuri_5, 
                style: style_SVParcuri_5,
                popuplayertitle: 'SV-Parcuri',
                interactive: true,
                title: '<img src="styles/legend/SVParcuri_5.png" /> SV-Parcuri'
            });
var format_SVDAliniamentInfrastructura_6 = new ol.format.GeoJSON();
var features_SVDAliniamentInfrastructura_6 = format_SVDAliniamentInfrastructura_6.readFeatures(json_SVDAliniamentInfrastructura_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVDAliniamentInfrastructura_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVDAliniamentInfrastructura_6.addFeatures(features_SVDAliniamentInfrastructura_6);
var lyr_SVDAliniamentInfrastructura_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVDAliniamentInfrastructura_6, 
                style: style_SVDAliniamentInfrastructura_6,
                popuplayertitle: 'SVD-Aliniament Infrastructura',
                interactive: true,
                title: '<img src="styles/legend/SVDAliniamentInfrastructura_6.png" /> SVD-Aliniament Infrastructura'
            });
var format_SVAliniamentInfrastructura_7 = new ol.format.GeoJSON();
var features_SVAliniamentInfrastructura_7 = format_SVAliniamentInfrastructura_7.readFeatures(json_SVAliniamentInfrastructura_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVAliniamentInfrastructura_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVAliniamentInfrastructura_7.addFeatures(features_SVAliniamentInfrastructura_7);
var lyr_SVAliniamentInfrastructura_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVAliniamentInfrastructura_7, 
                style: style_SVAliniamentInfrastructura_7,
                popuplayertitle: 'SV-Aliniament Infrastructura',
                interactive: true,
                title: '<img src="styles/legend/SVAliniamentInfrastructura_7.png" /> SV-Aliniament Infrastructura'
            });
var format_Gardurivii_8 = new ol.format.GeoJSON();
var features_Gardurivii_8 = format_Gardurivii_8.readFeatures(json_Gardurivii_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Gardurivii_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gardurivii_8.addFeatures(features_Gardurivii_8);
var lyr_Gardurivii_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gardurivii_8, 
                style: style_Gardurivii_8,
                popuplayertitle: 'Garduri vii',
                interactive: true,
                title: '<img src="styles/legend/Gardurivii_8.png" /> Garduri vii'
            });
var format_CopaciRuja_9 = new ol.format.GeoJSON();
var features_CopaciRuja_9 = format_CopaciRuja_9.readFeatures(json_CopaciRuja_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_CopaciRuja_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CopaciRuja_9.addFeatures(features_CopaciRuja_9);
var lyr_CopaciRuja_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CopaciRuja_9, 
                style: style_CopaciRuja_9,
                popuplayertitle: 'Copaci Ruja',
                interactive: true,
                title: '<img src="styles/legend/CopaciRuja_9.png" /> Copaci Ruja'
            });
var format_CopaciCoves_10 = new ol.format.GeoJSON();
var features_CopaciCoves_10 = format_CopaciCoves_10.readFeatures(json_CopaciCoves_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_CopaciCoves_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CopaciCoves_10.addFeatures(features_CopaciCoves_10);
var lyr_CopaciCoves_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CopaciCoves_10, 
                style: style_CopaciCoves_10,
                popuplayertitle: 'Copaci Coves',
                interactive: true,
                title: '<img src="styles/legend/CopaciCoves_10.png" /> Copaci Coves'
            });
var format_CopaciAgnita_11 = new ol.format.GeoJSON();
var features_CopaciAgnita_11 = format_CopaciAgnita_11.readFeatures(json_CopaciAgnita_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_CopaciAgnita_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CopaciAgnita_11.addFeatures(features_CopaciAgnita_11);
var lyr_CopaciAgnita_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CopaciAgnita_11, 
                style: style_CopaciAgnita_11,
                popuplayertitle: 'Copaci Agnita',
                interactive: true,
                title: '<img src="styles/legend/CopaciAgnita_11.png" /> Copaci Agnita'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_SVLocuinteCondominiu_3.setVisible(true);lyr_SVZoneVerziSpecializate_4.setVisible(true);lyr_SVParcuri_5.setVisible(true);lyr_SVDAliniamentInfrastructura_6.setVisible(true);lyr_SVAliniamentInfrastructura_7.setVisible(true);lyr_Gardurivii_8.setVisible(true);lyr_CopaciRuja_9.setVisible(true);lyr_CopaciCoves_10.setVisible(true);lyr_CopaciAgnita_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleMaps_1,lyr_GoogleSatelliteHybrid_2,lyr_SVLocuinteCondominiu_3,lyr_SVZoneVerziSpecializate_4,lyr_SVParcuri_5,lyr_SVDAliniamentInfrastructura_6,lyr_SVAliniamentInfrastructura_7,lyr_Gardurivii_8,lyr_CopaciRuja_9,lyr_CopaciCoves_10,lyr_CopaciAgnita_11];
lyr_SVLocuinteCondominiu_3.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Supr.[mp]': 'Supr.[mp]', 'Localitate': 'Localitate', });
lyr_SVZoneVerziSpecializate_4.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Supr.[mp]': 'Supr.[mp]', 'Localitate': 'Localitate', });
lyr_SVParcuri_5.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Supr.[mp]': 'Supr.[mp]', 'Localitate': 'Localitate', });
lyr_SVDAliniamentInfrastructura_6.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Supr.[mp]': 'Supr.[mp]', 'Localitate': 'Localitate', });
lyr_SVAliniamentInfrastructura_7.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Supr.[mp]': 'Supr.[mp]', 'Localitate': 'Localitate', });
lyr_Gardurivii_8.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Specie/H': 'Specie/H', 'Supr.[mp]': 'Supr.[mp]', 'Localitate': 'Localitate', });
lyr_CopaciRuja_9.set('fieldAliases', {'Nr. ID': 'Nr. ID', 'Specie': 'Specie', 'Diam. [cm]': 'Diam. [cm]', 'Inaltim[m]': 'Inaltim[m]', 'Stare': 'Stare', 'X [m]': 'X [m]', 'Y [m]': 'Y [m]', 'Z [m]': 'Z [m]', });
lyr_CopaciCoves_10.set('fieldAliases', {'Nr. ID': 'Nr. ID', 'Specie': 'Specie', 'Diam. [cm]': 'Diam. [cm]', 'Inaltim[m]': 'Inaltim[m]', 'Stare': 'Stare', 'X [m]': 'X [m]', 'Y [m]': 'Y [m]', 'Z [m]': 'Z [m]', });
lyr_CopaciAgnita_11.set('fieldAliases', {'Nr. ID': 'Nr. ID', 'Specie': 'Specie', 'Diam. [cm]': 'Diam. [cm]', 'Inaltim[m]': 'Inaltim[m]', 'Stare': 'Stare', 'X [m]': 'X [m]', 'Y [m]': 'Y [m]', 'Z [m]': 'Z [m]', });
lyr_SVLocuinteCondominiu_3.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Supr.[mp]': 'TextEdit', 'Localitate': 'TextEdit', });
lyr_SVZoneVerziSpecializate_4.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Supr.[mp]': 'TextEdit', 'Localitate': 'TextEdit', });
lyr_SVParcuri_5.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Supr.[mp]': 'TextEdit', 'Localitate': 'TextEdit', });
lyr_SVDAliniamentInfrastructura_6.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Supr.[mp]': 'TextEdit', 'Localitate': 'TextEdit', });
lyr_SVAliniamentInfrastructura_7.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Supr.[mp]': 'TextEdit', 'Localitate': 'TextEdit', });
lyr_Gardurivii_8.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Specie/H': 'TextEdit', 'Supr.[mp]': 'TextEdit', 'Localitate': 'TextEdit', });
lyr_CopaciRuja_9.set('fieldImages', {'Nr. ID': 'TextEdit', 'Specie': 'TextEdit', 'Diam. [cm]': 'TextEdit', 'Inaltim[m]': 'TextEdit', 'Stare': 'TextEdit', 'X [m]': 'TextEdit', 'Y [m]': 'TextEdit', 'Z [m]': 'TextEdit', });
lyr_CopaciCoves_10.set('fieldImages', {'Nr. ID': 'TextEdit', 'Specie': 'TextEdit', 'Diam. [cm]': 'TextEdit', 'Inaltim[m]': 'TextEdit', 'Stare': 'TextEdit', 'X [m]': 'TextEdit', 'Y [m]': 'TextEdit', 'Z [m]': 'TextEdit', });
lyr_CopaciAgnita_11.set('fieldImages', {'Nr. ID': 'TextEdit', 'Specie': 'TextEdit', 'Diam. [cm]': 'TextEdit', 'Inaltim[m]': 'TextEdit', 'Stare': 'TextEdit', 'X [m]': 'TextEdit', 'Y [m]': 'TextEdit', 'Z [m]': 'TextEdit', });
lyr_SVLocuinteCondominiu_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Supr.[mp]': 'inline label - visible with data', 'Localitate': 'inline label - visible with data', });
lyr_SVZoneVerziSpecializate_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Supr.[mp]': 'inline label - visible with data', 'Localitate': 'inline label - visible with data', });
lyr_SVParcuri_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Supr.[mp]': 'inline label - visible with data', 'Localitate': 'inline label - visible with data', });
lyr_SVDAliniamentInfrastructura_6.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Supr.[mp]': 'inline label - visible with data', 'Localitate': 'inline label - visible with data', });
lyr_SVAliniamentInfrastructura_7.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Supr.[mp]': 'inline label - visible with data', 'Localitate': 'inline label - visible with data', });
lyr_Gardurivii_8.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Specie/H': 'inline label - visible with data', 'Supr.[mp]': 'inline label - visible with data', 'Localitate': 'inline label - visible with data', });
lyr_CopaciRuja_9.set('fieldLabels', {'Nr. ID': 'inline label - visible with data', 'Specie': 'inline label - visible with data', 'Diam. [cm]': 'inline label - visible with data', 'Inaltim[m]': 'inline label - visible with data', 'Stare': 'inline label - visible with data', 'X [m]': 'inline label - visible with data', 'Y [m]': 'inline label - visible with data', 'Z [m]': 'inline label - visible with data', });
lyr_CopaciCoves_10.set('fieldLabels', {'Nr. ID': 'inline label - visible with data', 'Specie': 'inline label - visible with data', 'Diam. [cm]': 'inline label - visible with data', 'Inaltim[m]': 'inline label - visible with data', 'Stare': 'inline label - visible with data', 'X [m]': 'inline label - visible with data', 'Y [m]': 'inline label - visible with data', 'Z [m]': 'inline label - visible with data', });
lyr_CopaciAgnita_11.set('fieldLabels', {'Nr. ID': 'inline label - visible with data', 'Specie': 'inline label - visible with data', 'Diam. [cm]': 'inline label - visible with data', 'Inaltim[m]': 'inline label - visible with data', 'Stare': 'inline label - visible with data', 'X [m]': 'inline label - visible with data', 'Y [m]': 'inline label - visible with data', 'Z [m]': 'inline label - visible with data', });
lyr_CopaciAgnita_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});