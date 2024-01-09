// ____________SideBar_______________
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, );
});

// const sideNav = document.querySelectorAll('.sidenav'); // js tolong carikan element dengan nama sidenav
// M.Sidenav.init(sideNav);

// ____________Slider_______________
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  trasition: 600, //PerpindahanFoto
  interval: 7000, //TiapGambarPindah
}); // parameter didalam init adalh elemen yang sudah kita tangkap

// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.slider');
//   var instances = M.Slider.init(elems, );
// });

// ____________Paralax_______________
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);
// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.parallax');
//   var instances = M.Parallax.init(elems, options);
// });

//____________Portfolio_______________
const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

//____________ScrollSpy_______________
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
  scrollOffset: 50,
});

// https://youtu.be/C8gzfALgQVc?si=xFzTicsc_igW9DoV
