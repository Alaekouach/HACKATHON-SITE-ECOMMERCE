/* le boutton toggle du menu sur mobile */
const bar= document.getElementById("bar")
const navbar=document.getElementById("navbar")
    bar.addEventListener("click",function(event){
        navbar.classList.toggle("aff")
        event.preventDefault()
    })



    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    
    var slideIndex = 0;
    
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 4000); // Change image every 2 seconds
    }







