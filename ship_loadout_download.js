var http = require('http');
var fs = require('fs');

var ship_array = [
    'AEGS_Avenger_Stalker.json',
    'AEGS_Avenger_Titan.json',
    'AEGS_Avenger_Titan_Renegade.json',
    'AEGS_Avenger_Warlock.json',
    'AEGS_Gladius.json',
    'AEGS_Gladius_Valiant.json',
    'AEGS_Redeemer.json',
    'AEGS_Retaliator.json',
    'AEGS_Sabre.json',
    'AEGS_Sabre_Comet.json',
    'AEGS_Vanguard.json',
    'AEGS_Vanguard_Hoplite.json',
    'ANVL_Gladiator.json',
    'ANVL_Hornet_F7A.json',
    'ANVL_Hornet_F7C.json',
    'ANVL_Hornet_F7CM.json',
    'ANVL_Hornet_F7CR.json',
    'ANVL_Hornet_F7CS.json',
    'ANVL_Hornet_F7C_Wildfire.json',
    'ANVL_Lightning_F8.json',
    'ARGO_MPUV.json',
    'ARGO_MPUV_Transport.json',
    'CNOU_Mustang_Alpha.json',
    'CNOU_Mustang_Beta.json',
    'CNOU_Mustang_Delta.json',
    'CNOU_Mustang_Gamma.json',
    'CNOU_Mustang_Omega.json',
    'DRAK_Buccaneer.json',
    'DRAK_Caterpillar.json',
    'DRAK_Cutlass_Black.json',
    'DRAK_Cutlass_Blue.json',
    'DRAK_Cutlass_Red.json',
    'DRAK_Dragonfly.json',
    'DRAK_Herald.json',
    'KRIG_P52_Merlin.json',
    'MISC_Freelancer.json',
    'MISC_Prospector.json',
    'MISC_Reliant.json',
    'MISC_Starfarer.json',
    'MISC_Starfarer_Gemini.json',
    'ORIG_300i.json',
    'ORIG_315p.json',
    'ORIG_325a.json',
    'ORIG_350r.json',
    'ORIG_85X.json',
    'ORIG_m50.json',
    'RSI_Aurora_CL.json',
    'RSI_Aurora_ES.json',
    'RSI_Aurora_LN.json',
    'RSI_Aurora_LX.json',
    'RSI_Aurora_MR.json',
    'RSI_Constellation_Andromeda.json',
    'RSI_Constellation_Aquila.json',
    'RSI_Constellation_Phoenix.json',
    'RSI_Constellation_Taurus.json',
    'VNCL_Glaive.json',
    'VNCL_Scythe.json',
    'XIAN_Scout.json',]

var base_url = 'http://starcitizendb.com/static/ships/loadouts/';

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
    download_json(base_url + ship_array[i], `./ship_loadouts/${ship_array[i]}`, function (message) {
        message ? console.log(message) : console.log(`file downloaded`);
    });
}