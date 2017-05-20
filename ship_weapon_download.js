var http = require('http');
var fs = require('fs');

var weapon_array = [
    'AEGS_BallisticRepeater_S5.json',
    'AMRS_LaserCannon_S1.json',
    'AMRS_LaserCannon_S2.json',
    'AMRS_LaserCannon_S3.json',
    'AMRS_LaserCannon_S4.json',
    'AMRS_ScatterGun_S3.json',
    'APAR_BallisticGatling_S4.json',
    'APAR_MassDriver_S2.json',
    'BEHR_BallisticCannon_S4.json',
    'BEHR_BallisticRepeater_S2.json',
    'BEHR_LaserCannon_S1.json',
    'BEHR_LaserCannon_S2.json',
    'BEHR_LaserCannon_S3.json',
    'BEHR_LaserCannon_S4.json',
    'BEHR_LaserCannon_S5.json',
    'BEHR_LaserCannon_VNG_S2.json',
    'BEHR_LaserCannon_Vanguard_S2.json',
    'CNOU_Delta_RocketPod_x18.json',
    'GATS_BallisticCannon_S2.json',
    'GATS_BallisticCannon_S3.json',
    'GATS_BallisticGatling_S2.json',
    'GATS_BallisticGatling_S3.json',
    'JOKR_DistortionCannon_S1.json',
    'KBAR_BallisticCannon_S1.json',
    'KBAR_BallisticCannon_S3.json',
    'KLWE_LaserRepeater_S1.json',
    'KLWE_LaserRepeater_S2.json',
    'KLWE_LaserRepeater_S3.json',
    'KLWE_MassDriverCannon_S1.json',
    'KLWE_MassDriverCannon_S2.json',
    'KLWE_MassDriver_S2.json',
    'KRNG_LaserCannon_S4.json',
    'MXOX_BallisticRepeater_S5.json',
    'MXOX_LaserGatling_S5.json',
    'MXOX_NeutronCannon_S1.json',
    'MXOX_NeutronCannon_S2.json',
    'RSI_BallisticRepeater_S9.json',
    'VNCL_Blade_LaserRepeater_S3.json',
    'VNCL_Blade_PlasmaCannon_S2.json',
    'VNCL_LC_S1_Q1.json',
    'VNCL_LaserCannon_S1.json',
    'VNCL_NC_S5_Q1.json',
    'VNCL_NeutronCannon_S5.json',
    'VNCL_PC_Scythe_Right.json',
    'VNCL_PlasmaCannon.json',
    'VNCL_PlasmaCannon_S5.json',
    'VNCL_PlasmaCannon_Stinger_S5.json',
    'VNCL_Stinger_NC_S5.json',
    'VNCL_War_NC_S5.json',
    'VNCL_Weak_LC_S1.json',
    'VNCL_Wrath_PC_S5.json',
    'XIAN_LaserCannon_S3.json'
]

var base_url = 'http://starcitizendb.com/static/components/VehicleWeapon/VehicleWeapon/WeaponGun/Gun/';

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

for (var i = 0; i < weapon_array.length; i++) {
    download_json(base_url + weapon_array[i], `./ship_weapons/${weapon_array[i]}`, function (message) {
        message ? console.log(message) : console.log(`file downloaded`);
    });
}