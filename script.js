
document.addEventListener('DOMContentLoaded', function(event) {



  /// Init GLIDE for carousel slideshow
  new Glide('.glide').mount()

  /// Init LOZAD for lazy loading
  const observer = lozad('.lozad', {
    loaded: function(el) {
      el.classList.add('lozad-fully-loaded');
    }
  });
  observer.observe();

});
