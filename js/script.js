// Play and pause music
const audioIconwrapper = document.querySelector(".audio-icon-wrapper");
const audioIcon = document.querySelector(".audio-icon-wrapper i");
const song = document.querySelector("audio"); // Selektor untuk elemen audio
let isPlaying = false;

const rootElement = document.documentElement; // Menyimpan root element

// Fungsi untuk mencegah scroll
function disableScroll() {
  const yOffset = window.scrollY; // Posisi scroll vertikal saat ini
  const xOffset = window.scrollX; // Posisi scroll horizontal

  // Menjaga halaman tidak dapat di-scroll
  window.onscroll = function () {
    window.scrollTo(yOffset, xOffset); // Kembali ke posisi semula
  };

  rootElement.style.scrollBehavior = "auto"; // Mematikan smooth scroll
}

// Fungsi untuk mengaktifkan scroll
function enableScroll() {
  window.onscroll = function () {}; // Menonaktifkan pembatasan scroll
  rootElement.style.scrollBehavior = "smooth"; // Mengaktifkan smooth scroll
  localStorage.setItem("opened", "true"); // Menyimpan status
  playAudio(); // Memulai pemutaran audio
}

// Fungsi untuk memutar audio
function playAudio() {
  song.volume = 0.1;
  audioIconwrapper.style.display = "flex"; // Menampilkan elemen audio
  song.play();
  isPlaying = true;
}

// Memeriksa status apakah audio sedang dimainkan dan halaman perlu scroll
audioIconwrapper.onclick = function () {
  if (isPlaying) {
    song.pause();
    audioIcon.classList.remove("bi-disc");
    audioIcon.classList.add("bi-pause-circle");
  } else {
    song.play();
    audioIcon.classList.add("bi-disc");
    audioIcon.classList.remove("bi-pause-circle");
  }

  isPlaying = !isPlaying;
};

// Pada saat halaman pertama kali dimuat, pastikan scroll bisa dilakukan
if (!localStorage.getItem('opened')) {
  // Jika pertama kali membuka halaman, biarkan scroll aktif
  enableScroll(); 
} else {
  // Jika sudah membuka sebelumnya, scroll tetap aktif
  enableScroll(); 
}






