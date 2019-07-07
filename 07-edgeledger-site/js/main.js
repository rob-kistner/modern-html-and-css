// map initialization
function initMap() {
  // --
  const mapZoom = 14
  const lat = 40.712776
  const lng = -74.005974
  const loc = {lat: lat, lng: lng}
  // --
  let map = new google.maps.Map(
    document.querySelector('.map'),
    {
      zoom: mapZoom,
      center: loc,
    }
  );
  const marker = new google.maps.Marker({ position: loc, map: map})
}
  
// When window scrolls,
// make the sticky background slightly transparent
window.addEventListener('scroll', function() {
  // --
  const scrollLimit = 150
  const scrollOpacity = 0.9
  // --
  if(window.scrollY > scrollLimit) {
    document.querySelector('#navbar').style.opacity = scrollOpacity
  } else {
    document.querySelector('#navbar').style.opacity = 1
  }
})
  
// smooth scrolling
$('#navbar a, .btn').on('click', function(e) {
    // --
    const targetoffset = 100
    const scrolltime = 600
    // --
  if(this.hash !== '') {
    e.preventDefault()

    const hash = this.hash
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - targetoffset
      },
      scrolltime
    )
  }
})