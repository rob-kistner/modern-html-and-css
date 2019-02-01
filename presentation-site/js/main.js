// smooth scrolling
$('.btn').on('click', function(e) {
    // --
  const targetoffset = 0
  const scrolltime = 750
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