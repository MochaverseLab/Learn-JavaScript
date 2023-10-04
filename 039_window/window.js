// window digunakan untuk mengelola jendela browser
// window digunakan untuk mencari tahu ukuran layar dan lain-lain yang berkaitan dengan jendela browser

/* <===============================================================================> */
/* <===============================================================================> */

let showInfo = document.getElementById("info");

showInfo.textContent = `Lebar layar = ${window.screen.width}, Tinggi layar = ${window.screen.height}`;

// sebenarnya masih ada banyak sekali property-property dari object window ini
// namun sangat tidak mungkin jika dijelaskan semua sekaligus
// temen-temen bisa eksplorasi sendiri

/* <===============================================================================> */
