// Sticky menu background
window.addEventListener('scroll', function() {
  if (this.window.scrollY > 30 ) {
    this.document.querySelector('#navbar').style.opacity = 0.8;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// Typewriter Javascript
var typed = new Typed(".auto-type", {
  strings: ["Welcome To My Personal Portfolio"],
  typeSpeed: 150,
  backSpeed: 150,
  looped : true
})

  