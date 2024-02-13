let album = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];

const newAlbum = () => {
  const spliceNewAlbum = album.map((data) => {
    if (data.includes(".")) {
      return data.slice(0, -4).toLowerCase();
    } else {
      return "invalide";
    }
  });
  return spliceNewAlbum;
};

console.log(newAlbum());
