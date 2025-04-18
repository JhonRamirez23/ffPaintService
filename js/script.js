let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn => {
  btn.onclick = () =>{
      let src = btn.getAttribute('data-src');
      document.querySelector('.about .video-container .video').src = src;
  }
})

let videoContainer = document.querySelector('.about .video-container');
let videos = document.querySelectorAll('.about .video-container .controls .control-btn');
let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % videos.length;
  let nextVideoSrc = videos[currentIndex].getAttribute('data-src');
  videoContainer.querySelector('.video').src = nextVideoSrc;
}, 7000);