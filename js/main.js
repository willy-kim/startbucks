const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500){
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 실행시간) => 스크롤 이벤트에서 너무 많이 실행되는 것을 방지

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  //gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index +1)*0.7, //0.7초 뒤에 실행됨
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 방향
  autoplay: true, // 자동 재생
  loop: true // 반복
});

new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', // 기본값
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보기  
  loop: true,
  // autoplay: {
  //   delay: 500 //0.5초 딜레이
  // }
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 가능 여부        
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  },
});

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    // 숨김처리
    promotionEl.classList.add('hide'); //hide라는 클래스를 만들어 더하고, CSS처리
  } else {
    // 보임처리
    promotionEl.classList.remove('hide');
  }
})

function random(min, max) {
  return parseFloat((Math.random() * (max -min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, 
    random(1.5, 2.5), 
    {
      y: size,
      repeat: -1, // 무한 반복
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
})