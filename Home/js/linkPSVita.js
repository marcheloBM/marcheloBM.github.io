function NanoHencore(){verificarSesionYAbrirEnlace("https://mega.nz/folder/rYY3XbSL#ftqXpibkNckXgsQSCGTyaw");}
function QCMA(){verificarSesionYAbrirEnlace("https://mega.nz/folder/rQ5A0JoQ#i_uyaaB4jc0jeEW8viIsHw");}
function Sd2vita(){verificarSesionYAbrirEnlace("https://mega.nz/folder/OcpFXKLZ#vMma7tJShftbrZu5Cxmelw");}
function ApolloSaveTool(){verificarSesionYAbrirEnlace("https://mega.nz/folder/KMY1SaKD#A2kfuro4P1DSSRrHeSoLaA");}
function AutoPlugin2(){verificarSesionYAbrirEnlace("https://mega.nz/folder/SUwhAZbI#pBsm_uWBZSU9M-k0BZewRw");}
function enso365(){verificarSesionYAbrirEnlace("https://mega.nz/folder/eBhGlA4C#dMNSFBprIEmiJfYm2BzQ9g");}
function PlaystationMOBILE(){verificarSesionYAbrirEnlace("https://mega.nz/folder/vQwkVCBD#CXqRMU-QTKzDL2XHv9DXVg");}
function VitaDeploy(){verificarSesionYAbrirEnlace("https://mega.nz/folder/jBQE1DrA#5sTFmJeVM2aeGSgrBIc6-g");}
function VitaShell(){verificarSesionYAbrirEnlace("https://mega.nz/folder/WBYXjTJa#JZQAWL_kTGvDWut9F2Us2g");}
function VitaDB(){verificarSesionYAbrirEnlace("https://mega.nz/folder/nEQCHbYR#vRD01xGsPPvjvl5E2ZqxrA");}
function CapcomPlaySystem3(){verificarSesionYAbrirEnlace("https://mega.nz/folder/3EQiRKTY#Rfng-e8Aevr_DBM8m-RhWw");}
function DREAMCAST(){verificarSesionYAbrirEnlace("https://mega.nz/folder/nNogwaoQ#uIzbmCwY1EIL7XIr8QidnA");}
function GBAGBC(){verificarSesionYAbrirEnlace("https://mega.nz/folder/OJJVXKaJ#ur9aSi_RFI_41F__lc5r9g");}
function MegaDriveSegaCDMasterSystemGameGear(){verificarSesionYAbrirEnlace("https://mega.nz/folder/CVQliSpR#c9NQT2Zu1pxXXOooCMc51g");}
function N64(){verificarSesionYAbrirEnlace("https://mega.nz/folder/eEBl1Y6Q#4Jgx8O6KHeD0n3PpeRxhFQ");}
function Pico8(){verificarSesionYAbrirEnlace("https://mega.nz/folder/CdZgEYwA#20a-b8TyyXNjYfPB6TQy2A");}
function RETROARCH(){verificarSesionYAbrirEnlace("https://mega.nz/folder/zYID1ArQ#4KhmiG5v5k80uIjFEsmJNw");}
function SNES(){verificarSesionYAbrirEnlace("https://mega.nz/folder/7NR0lSgJ#VWSkA88RtUloNDzllnlupg");}
function YOYOLOADER(){verificarSesionYAbrirEnlace("https://mega.nz/folder/aIo0WZjC#D1Q900Q4IPMgQgGCuDvJ0Q");}
function PNES(){verificarSesionYAbrirEnlace("https://mega.nz/folder/uYZi0TZQ#iDo-Ryw9MxzkLS54EyPYCA");}
function PSNES(){verificarSesionYAbrirEnlace("https://mega.nz/folder/uJpRkAja#BECrnbyobL-uW1WfNVmJog");}
function PFBNEO(){verificarSesionYAbrirEnlace("https://mega.nz/folder/yIBnBLyI#v0Aiz_jhvzRwDL5wi248JQ");}
function PGEN(){verificarSesionYAbrirEnlace("https://mega.nz/folder/yNRBjZCT#7M7GtIkEYL-PzSF9eLgCXQ");}
function Rockstar(){verificarSesionYAbrirEnlace("https://mega.nz/folder/aQJwVCZI#jD-zCVK20Gcm2xvaFbBWbA");}
function CTManager(){verificarSesionYAbrirEnlace("https://mega.nz/folder/vBgxAQbb#eU8urXumQwFO15gf-AiVbQ");}

function UX0toSD(){verificarSesionYAbrirEnlace("https://mega.nz/folder/mBpRkA5B#mMI5Oygy_ydWPGX2LPE6QA");}
function rinnegatWeb(){verificarSesionYAbrirEnlace("https://www.rinnegatamante.eu/vitadb/#/");}



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
