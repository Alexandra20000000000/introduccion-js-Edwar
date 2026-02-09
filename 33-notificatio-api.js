//Notification API
// La notifications api es una interfaz del navegador que permite a las aplicaiones web mostrar notificaciones nativas del sistema operativo, incluso cuando la pestaña NO está activa

const button = document.querySelector(".button");

button.addEventListener('click', () => {
    console.log("You made click");
    Notification.requestPermission().then(Permission => {
        if(Permission === "granted") {
            new Notification("Esta es una Notificación"), {
            body : "Aprendiendo JS en el SENA"
            };
        }else {
            console.log("permiso denegado");
        }
    });
});