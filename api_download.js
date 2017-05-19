var http = require('http');
var fs = require('fs');

var ship_array = ['AEGS_Avenger_Stalker.json', 'AEGS_Gladius.json', 'AEGS_Retaliator.json', 'AEGS_Sabre.json', 'AEGS_Vanguard.json',
    'ANVL_Gladiator.json', 'ANVL_Hornet.json', 'ARGO_MPUV.json', 'CNOU_Mustang.json', 'DRAK_Buccaneer.json', 'DRAK_Caterpillar.json',
    'DRAK_Cutlass_Black.json', 'DRAK_Herald.json', 'GRIN_PTV.json', 'KRIG_P52_Merlin.json', 'MISC_Freelancer.json', 'MISC_Reliant.json',
    'MISC_Starfarer.json', 'ORIG_300i.json', 'ORIG_85X.json', 'ORIG_m50.json', 'RSI_Aurora.json', 'RSI_Constellation.json', 'XIAN_Scout.json'
];

var base_url = 'http://starcitizendb.com/static/ships/specs/';

var download_json = function (url, dest, cb) {
    var file = fs.createWriteStream(dest);
    var request = http.get(url, function (response) {
        response.pipe(file);
        file.on('finish', function () {
            file.close(cb);
        });
    }).on('error', function (err) {
        fs.unlink(dest);
        if (cb) cb(err.message);
    });
}

for (var i = 0; i < ship_array.length; i++) {
    download_json(base_url + ship_array[i], `./raw_ship_data/${ship_array[i]}`, function (message) {
        message ? console.log(message) : console.log(`file downloaded`);
    });
}