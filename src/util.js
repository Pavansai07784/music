import { v4 as uuidv4 } from "uuid";

function music() {
  return [
    {
      name: "3",
      artist: "Anirudh",
      cover: "https://wallpapercave.com/wp/wp5375368.jpg",
      id: uuidv4(),
      active: true,
      color: ["#24174D", "#0C0B10"],
      audio: "https://cdn.pagalworld.us/songs/old/3-A Life Full Of Love.mp3",
    },
    {
        name: "3",
        artist: "Anirudh",
        cover: "https://wallpapercave.com/wp/wp4646499.jpg",
        id: uuidv4(),
        active: false,
        color: ["#24174D", "#0C0B10"],
        audio: "https://cdn.pagalworld.us/songs/old/3-A Life Full Of Love.mp3",
      }
  ];
}

export default music;
