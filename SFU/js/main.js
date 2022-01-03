// ▼ mo_ham_menu
(function () {
  const hamBtnEl = document.querySelector(".ham_btn");
  const tabMenuEl = document.querySelector(".tab_menu_wrap");

  hamBtnEl.addEventListener("click", () => {
    hamBtnEl.classList.toggle("active");
    tabMenuEl.classList.toggle("slide");
  });
})();

// ▼ ad_pop_up delete
(function(){

  const adEl = document.querySelector('.pop_ad');
  const firEl = document.querySelector('.section_1')

  function removead () {

    adEl.className = 'non_ad'
    firEl.classList.add('plusmargin');

  }
  adEl.addEventListener('click', removead)

})();

// ▼ section_1 slide
(function(){

  var albumBox = document.querySelector('.album_box');
  var slide = document.querySelectorAll('.album_box li');
  var currentIdx = 0;
  var slideCount = slide.length;
  var slideWidth = 350;
  var slideMargin = 30;
  var nextBtn = document.querySelector('.arrow .next');

  albumBox.style.width = (slideWidth + slideMargin)*slideCount - slideMargin + 'px';

    function moveSlide (num){
      albumBox.style.left = -num * 380 + 'px';
      currentIdx = num;
    }

    nextBtn.addEventListener('click', function(){
        if(currentIdx < slideCount - 4){
            moveSlide(currentIdx + 1);
            // console.log(currentIdx);
        }else{
            moveSlide(0);
        }
    });

})();

// ▼ Section_4 slide
(function(){

  const slider = document.querySelector('.talk_box');
  const progressBar = document.querySelector('.prog_bar_inner');

  let sliderGrabbed = false;

  slider.parentElement.addEventListener('scroll', (e) => {
      progressBar.style.width = `${getScrollPercentage()}%`
  })

  slider.addEventListener('mousedown', (e) => {
      sliderGrabbed = true;
      slider.style.cursor = 'grabbing';
  })

  slider.addEventListener('mouseup', (e) => {
      sliderGrabbed = false;
      slider.style.cursor = 'grab';
  })

  slider.addEventListener('mouseleave', (e) => {
      sliderGrabbed = false;
      slider.style.cursor = 'grab';
  })

  slider.addEventListener('mousemove', (e) => {
      if(sliderGrabbed){
          slider.parentElement.scrollLeft -= e.movementX;
      }
  })

  slider.addEventListener('wheel', (e) => {
      e.preventDefault();
      slider.parentElement.scrollLeft += e.deltaY;
  })

  function getScrollPercentage(){
      return ((slider.parentElement.scrollLeft / (slider.parentElement.scrollWidth - slider.parentElement.clientWidth)) * 100)
  }

})();