// Función utilizando operador new
function Song(title, artist) {
  // this = {};   -> Esto lo hace el motor
  this.title = title;
  this.artist = artist;
  this.isLiked = false;
  // return this; -> Esto lo hace el motor
}

// Agrega propiedad prototype para agregar función
Song.prototype.like = function () {
  this.isLiked = !this.isLiked;
};

// Genera constructor
const song = new Song("Agosto", "Bad Bunny");

console.log(song);
console.log(song.isLiked);
song.like();
console.log(song.isLiked);
