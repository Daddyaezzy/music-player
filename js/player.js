const songs = [
  "Burna_Boy_Ft_Ed_Sheeran_-_For_My_Hand.mp3",
  "Chris_Brown_ft_Wizkid_-_Call_Me_Everyday.mp3",
  "Wizkid_-_Anoti.mp3",
  "Buju-BNXN-Many-Ways-ft-Wizkid-).mp3",
  "Burna_Boy_-_It_s_Plenty.mp3",
  "Burna_Boy_Ft_Victony_-_Different_Size.mp3",
  "Darkoo_Ft_Buju_TSB_-_Bad_From_Early.mp3",
  "DJ_Spinall_Ft_Asake_-_Palazzo.mp3",
  "King_Promise_ft_Wstrn_-_Bad_Rude.mp3",
  "Tay_Iwar_-_Bad4U.mp3",
];

let songIndex;

const player = document.getElementById("player");
const controlSymbol = document.getElementById("controlSymbol");

musicImg = document.querySelector(".img-area");
const createSongList = () => {
  const list = document.createElement("ol");
  for (songIndex = 0; songIndex < songs.length; songIndex++) {
    const item = document.createElement("li");

    item.appendChild(document.createTextNode(songs[songIndex]));
    list.appendChild(item);
  }
  return list;
};

const songList = document.getElementById("songList");
songList.appendChild(createSongList());

const source = document.getElementById("source");

const links = document.querySelectorAll("li");
for (const link of links) {
  link.addEventListener("click", setSong);
}

function setSong(x) {
  document.getElementById("headphones").classList.remove("pulse");
  source.src = "songs/" + x.target.innerText;
  musicImg.src = ``;
  console.log(x);
  document.getElementById(
    "currentSong"
  ).innerText = `Now playing: ${x.target.innerText}`;

  player.load();
  player.play();
  document.getElementById("headphones").classList.add("pulse");
  console.log(x);
}

const play = document.getElementsByClassName("fa-play");
let change = function (icon) {
  icon.classList.toggle("fa-play");
  icon.classList.toggle("fa-pause");

  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
};

const backWard = document.getElementById("prev");
const forWard = document.getElementById("next");

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  source.src = `songs/${songs[songIndex]}`;

  player.load();
  player.play();

  document.getElementById(
    "currentSong"
  ).innerText = `Now Playing: ${songs[songIndex]}`;
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  source.src = `songs/${songs[songIndex]}`;

  player.load();
  player.play();
  document.getElementById(
    "currentSong"
  ).innerText = `Now Playing: ${songs[songIndex]}`;

  console.log(songIndex);
  console.log(source.src);
}

const slider = document.getElementById("volumeSlider");

slider.oninput = function (e) {
  const volume = e.target.value;
  player.volume = volume;
};

const progressBar = document.getElementById("progress");

function updateProgress() {
  if (player.currentTime > 0) {
    progressBar.value = player.currentTime;
    progressBar.max = player.duration;
  }
}

// progressBar.addEventListener("click", (e) => {
//   let progressWidth = progressBar.clientWidth;
//   let clickedOffSetX = e.offsetX;
//   let songDuration = player.duration;

//   player.currentTime = (clickedOffSetX / progressWidth) * songDuration;

//   player.play();
// });
function updateTime(e) {
  player.currentTime = e.target.value;
  console.log(e.target.value);
}
