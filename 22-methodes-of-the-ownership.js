// Métodos de Propiedad

const player = {
    play : function(id){
        console.log("playing song...", id );
    },

    pause : function(id){
        console.log(`Pausing...", ${id}`);
    },
    delete : function(id){
        console.log(`delete...", ${id}`);
    }, 
    Playlist : function(id){
        console.log(`Creating Playlist... ${id}`); 
    }
};

console.log(player);
player.play(217);
player.pause(217);
player.delete(217);
player.Playlist(217);
const Playlist = {
    
};
// Ejercicio de práctica, Eliminarlo
