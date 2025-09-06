function FreeDVDBoot(){verificarSesionYAbrirEnlace("https://mega.nz/folder/OJQ3wJwT#NVGgoTWrqUyf_ILKqDQ5zw");}
function FreeDVDBootWeb(){verificarSesionYAbrirEnlace("https://github.com/CTurt/FreeDVDBoot");}
function FreeMemoryCardBoot(){verificarSesionYAbrirEnlace("https://mega.nz/folder/SVAWTTLb#dOt2fvuBsnqGFpqW7jZSYw");}
function FreeMemoryCardBootWeb(){verificarSesionYAbrirEnlace("https://www.psx-place.com/resources/free-memory-card-boot-fmcb-free-harddisk-drive-boot-fhdb-by-sp193.712/updates");}
function FunTuna(){verificarSesionYAbrirEnlace("https://mega.nz/folder/LYITyTjJ#V-WgMLYoAtrs0BY4V6p1Ow");}
function FunTunaWeb(){verificarSesionYAbrirEnlace("https://github.com/israpps/Funtuna-Fork");}
function PS2ApolloSaveTool(){verificarSesionYAbrirEnlace("https://mega.nz/folder/CY5UyCwR#Me7K6UpAD3u2-QWpQnmDZA");}
function PS2ApolloSaveToolWeb(){verificarSesionYAbrirEnlace("https://github.com/bucanero/apollo-ps2");}
function OpenPS2Loader(){verificarSesionYAbrirEnlace("https://mega.nz/folder/jRB3iT5K#tYTboCYhj6PzZlpOaQlOYg");}
function OpenPS2LoaderWeb(){verificarSesionYAbrirEnlace("https://github.com/ps2homebrew/Open-PS2-Loader");}
function Aplicaciones(){verificarSesionYAbrirEnlace("https://mega.nz/file/GE53VIgQ#g_No4H2bwJNwx341lHXO4VvXTD5wQB3I3OJGGB4px4E");}
function MEGAPACKAPPSPS2(){verificarSesionYAbrirEnlace("https://mega.nz/file/vBpEFChI#kfHwrD6MSz0WKeHBwMgOkwXeKGi76fSVL0ZBNdRf8X8");}
function PS2Temps(){verificarSesionYAbrirEnlace("https://mega.nz/folder/CRgV2KhT#X0NuceLpLABiPDczTNCqmQ");}
function PS2TempsWeb(){verificarSesionYAbrirEnlace("https://www.psx-place.com/threads/ps2temps.27864/ ");}
function wLaunchELFISR(){verificarSesionYAbrirEnlace("https://mega.nz/folder/2JwkEZoS#LVwtQw8MlxlubP24U2CqhA");}
function wLaunchELFISRWeb(){verificarSesionYAbrirEnlace("https://github.com/israpps/wLaunchELF_ISR");}
function PSXaPS2(){verificarSesionYAbrirEnlace("https://mega.nz/folder/TIBQhKgS#poYl08VUzSelt1F8c71bMw");}
function Retroarch(){verificarSesionYAbrirEnlace("https://mega.nz/folder/uUIUkRYT#AyJT9Mz5BAEt7PsCqEDOtA");}
function RetroarchWeb(){verificarSesionYAbrirEnlace("https://www.retroarch.com/?page=platforms");}
function APPSUSB(){verificarSesionYAbrirEnlace("https://mega.nz/folder/jc5SBQhA#8m1jvxaTsEpjj9p59uwO3Q");}
function OPLManager(){verificarSesionYAbrirEnlace("https://mega.nz/folder/7IYE3JQT#viGBs1qKb6Wzey-hG6l85A");}
function OPLManagerWeb(){verificarSesionYAbrirEnlace("https://oplmanager.com/site/index.php");}
function OPLSERVER(){verificarSesionYAbrirEnlace("https://mega.nz/folder/iAhAhbpD#s_n6rtINweFYGjc-H_5OdA");}
function OPLSERVERWeb(){verificarSesionYAbrirEnlace("https://github.com/elmariolo/OPL-Server");}
function PSXiSO(){verificarSesionYAbrirEnlace("https://mega.nz/folder/qA4ABR5Q#EndB6bpNyeAeZBNP6gTP5g");}
function PSXiSOWeb(){verificarSesionYAbrirEnlace("https://www.psx-place.com/threads/psxiso-compression-tool-v0-1-r4-chd-zso.37543/");}
function USBUTIL(){verificarSesionYAbrirEnlace("https://mega.nz/folder/jBx3QSRZ#Hsn4XZsSHdvyi-sZfNXREQ");}
function PackdeTemasOPL(){verificarSesionYAbrirEnlace("https://mega.nz/folder/fVozRBTB#bKaEZdxyi7rbXdPhvwg9Hw");}
function XtremeEliteBoot(){verificarSesionYAbrirEnlace("https://mega.nz/folder/vF5DlDgQ#XaER7fdgIrl7ApnsaTDgLA");}
function PS2SX(){verificarSesionYAbrirEnlace("https://mega.nz/folder/GMIGzBxD#ZZaKjzsWlOkisa_sewocTQ");}




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
