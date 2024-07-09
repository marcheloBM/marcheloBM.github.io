function PS2ApolloSaveTool(){verificarSesionYAbrirEnlace("https://mega.nz/folder/qVIWlCLR#kZnXtrmBdxj9hj6ZEk1svw");}
function PS2ApolloSaveToolWeb(){verificarSesionYAbrirEnlace("https://github.com/bucanero/apollo-ps2");}
function FreeDVDBoot(){verificarSesionYAbrirEnlace("https://mega.nz/folder/eNJU2ACR#dfkKW8hHc-FwgCOz3C4sJA");}
function FreeDVDBootWeb(){verificarSesionYAbrirEnlace("https://github.com/CTurt/FreeDVDBoot");}
function FreeMemoryCardBoot(){verificarSesionYAbrirEnlace("https://mega.nz/folder/iMwQTSxQ#dVtETs8KUVYrxKX5-8Q9bw");}
function FreeMemoryCardBootWeb(){verificarSesionYAbrirEnlace("https://www.psx-place.com/resources/free-memory-card-boot-fmcb-free-harddisk-drive-boot-fhdb-by-sp193.712/updates");}
function FunTuna(){verificarSesionYAbrirEnlace("https://mega.nz/folder/iVJUmRiS#UZnePqmhyeFU_YYk_Nk6Eg");}
function FunTunaWeb(){verificarSesionYAbrirEnlace("https://github.com/israpps/Funtuna-Fork");}
function OpenPS2Loader(){verificarSesionYAbrirEnlace("https://mega.nz/folder/7c4CCYgT#3Am-DMOcMZpO75t7f4vOhQ");}
function OpenPS2LoaderWeb(){verificarSesionYAbrirEnlace("https://github.com/ps2homebrew/Open-PS2-Loader");}
function Aplicaciones(){verificarSesionYAbrirEnlace("https://mega.nz/file/eARDUaQa#sgEheVugmdVlfzWu0zlsPq629lHV3SdBPWLV0Zwz7Eo");}
function MEGAPACKAPPSPS2(){verificarSesionYAbrirEnlace("https://mega.nz/file/CJIhnBib#JZT6g3lws7VsIqorpKgDrgDNCdgaJMMp37hIrwoeAOg");}
function Retroarch(){verificarSesionYAbrirEnlace("https://mega.nz/folder/nQBCUJDb#ZwGmtPJ_n83I1sEmY3SWKA");}
function RetroarchWeb(){verificarSesionYAbrirEnlace("https://www.retroarch.com/?page=platforms");}
function PSXaPS2(){verificarSesionYAbrirEnlace("https://mega.nz/folder/zUgEhTYJ#7EmZRfMOrpw2xZqOjXCGzg");}
function OPLManager(){verificarSesionYAbrirEnlace("https://mega.nz/folder/PFRWhATR#bSc9f4yLBrvxELPZ8Npv6A");}
function OPLManagerWeb(){verificarSesionYAbrirEnlace("https://oplmanager.com/site/index.php");}
function OPLSERVER(){verificarSesionYAbrirEnlace("https://mega.nz/folder/DQQQxYwb#BB1bNQpZtbvEO3yIH2p_2g");}
function OPLSERVERWeb(){verificarSesionYAbrirEnlace("https://github.com/elmariolo/OPL-Server");}
function USBUTIL(){verificarSesionYAbrirEnlace("https://mega.nz/folder/PQQk0LhZ#pxeawP7k9NaMSBDvQj-Lyg");}
function APPSUSB(){verificarSesionYAbrirEnlace("https://mega.nz/folder/uRwVhBxI#Ro8Ml82lvP-lRKr9-Vkvkw");}
function PackdeTemasOPL(){verificarSesionYAbrirEnlace("https://mega.nz/file/GEYmjLSb#3oM-f3S9bUC_lzjkxqpgbtMJzwZzw2exfSLm3obdSXI");}
function XtremeEliteBoot(){verificarSesionYAbrirEnlace("https://mega.nz/folder/WR5EDC4Q#qCbxFTYubVRjdYPyXcVZgA");}
function PS2SX(){verificarSesionYAbrirEnlace("https://mega.nz/folder/yNQlXYwR#qpnYEiDe_0bczjgp7s1cAg");}
function PS2Temps(){verificarSesionYAbrirEnlace("https://mega.nz/folder/eNRgXYgI#G4kERdP2vvoDQEIVisyy0Q");}
function PS2TempsWeb(){verificarSesionYAbrirEnlace("https://www.psx-place.com/threads/ps2temps.27864/ ");}
function PSXiSO(){verificarSesionYAbrirEnlace("https://mega.nz/folder/fJQxnA5D#ZE7ygsALpiGvInXhwG6hCw");}
function PSXiSOWeb(){verificarSesionYAbrirEnlace("https://www.psx-place.com/threads/psxiso-compression-tool-v0-1-r4-chd-zso.37543/");}
function wLaunchELFISR(){verificarSesionYAbrirEnlace("https://mega.nz/folder/SVhHXI7a#mc9oorr_fZLxvcf252NBAQ");}
function wLaunchELFISRWeb(){verificarSesionYAbrirEnlace("https://github.com/israpps/wLaunchELF_ISR");}



function nombre(){verificarSesionYAbrirEnlace("");}
function Web(){verificarSesionYAbrirEnlace("");}


function verificarSesionYAbrirEnlace(enlace) {
    if (sessionStorage.length > 0) {
        // Hay una sesión activa
        window.open(enlace);
    } else {
        iniciarSesion();
    }
}

function iniciarSesion() {
    var resultado = window.confirm('Sesión no iniciada.\n¿Desea iniciar sesión?');
    if (resultado === true) {
        window.alert('Ingrese los datos a continuación');
        window.location.href = '../Login.html';
    } else {
        window.alert('Sesión no iniciada');
    }
}
