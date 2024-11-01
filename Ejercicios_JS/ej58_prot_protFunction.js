// La función prototipo
const songPrototype = {
  like: function () {
    this.isLiked = !this.isLiked;
  },
};

// Función para crear canciones
function createSong(title, artist) {
  // Crea objeto vacío con prototipo songPrototype
  const newSong = Object.create(songPrototype);

  // Agrega las propiedades del objeto
  newSong.title = title;
  newSong.artist = artist;
  newSong.isLiked = false;

  // Devuelve el objeto creado
  return newSong;
}

const song1 = createSong("Agosto", "Bad Bunny");
const song2 = createSong("Un Verano", "Bad Bunny");

console.log(song1);
console.log(song2.__proto__);
console.log(song1.like === song2.like);
