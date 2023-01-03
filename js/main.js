$(document).ready(function () {
  const zvezdnato = document.querySelector(".podnozje__zvezdnato");
  const okroglo = document.querySelector(".podnozje__okroglo");
  const nogice = document.querySelector(".noge__nogice");
  const kolescki = document.querySelector(".noge__kolescki");
  const zNaslonjalom = document.querySelector(".naslonjalo__z");
  const brezNaslonjala = document.querySelector(".naslonjalo__brez");

  zvezdnato.onclick = function () {
    zvezdnato.classList.add("selected1");
    okroglo.classList.remove("selected1");
    kolescki.classList.remove("selected2");
    nogice.classList.remove("selected2");

    document.getElementById("image").src = '../img/kolescki.png';
    document.querySelector(".naslonjalo").classList.add("hide");
    document.querySelector(".naslonjalo").classList.remove("show");

    document.querySelector(".noge").classList.remove("hide");
    document.querySelector(".noge").classList.add("show");
  }

  okroglo.onclick = function () {
    okroglo.classList.add("selected1");
    zvezdnato.classList.remove("selected1");
    zNaslonjalom.classList.remove("selected2");
    brezNaslonjala.classList.remove("selected2");

    document.getElementById("image").src = '../img/okroglo.png';
    document.querySelector(".noge").classList.add("hide");
    document.querySelector(".noge").classList.remove("show");

    document.querySelector(".naslonjalo").classList.remove("hide");
    document.querySelector(".naslonjalo").classList.add("show");
  }

  nogice.onclick = function () {
    document.getElementById("image").src = '../img/nogice.png';
    nogice.classList.add("selected2");
    kolescki.classList.remove("selected2");
  }

  kolescki.onclick = function () {
    document.getElementById("image").src = '../img/kolescki.png';
    kolescki.classList.add("selected2");
    nogice.classList.remove("selected2");
  }

  zNaslonjalom.onclick = function () {
    document.getElementById("image").src = '../img/okroglo.png';
    zNaslonjalom.classList.add("selected2");
    brezNaslonjala.classList.remove("selected2");
  }

  brezNaslonjala.onclick = function () {
    document.getElementById("image").src = '../img/brez.png';
    brezNaslonjala.classList.add("selected2");
    zNaslonjalom.classList.remove("selected2");
  }
});

