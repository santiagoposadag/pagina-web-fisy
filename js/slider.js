//IIFE for the automatic slider
((d) => {
  const $slider = d.querySelector("#slider");
  let $sliderSection = d.querySelectorAll(".slider__section"),
    $sliderSectionLast = $sliderSection[$sliderSection.length - 1];

  const $btnLeft = d.querySelector("#btn-left"),
    $btnRight = d.querySelector("#btn-right");

  $slider.insertAdjacentElement("afterbegin", $sliderSectionLast);

  function nextCertificate() {
    let $sliderSectionFirst = d.querySelectorAll(".slider__section")[0];
    $slider.style.marginLeft = "-200%";
    $slider.style.transition = "all 0.5s";
    setTimeout(function () {
      $slider.style.transition = "none";
      $slider.insertAdjacentElement("beforeend", $sliderSectionFirst);
      $slider.style.marginLeft = "-100%";
    }, 500);
  }

  function previusCertificate() {
    let $sliderSection = d.querySelectorAll(".slider__section");
    $sliderSectionLast = $sliderSection[$sliderSection.length - 1];
    $slider.style.marginLeft = "-200%";
    $slider.style.transition = "all 0.5s";
    setTimeout(() => {
      $slider.style.transition = "none";
      $slider.insertAdjacentElement("afterbegin", $sliderSectionLast);
      $slider.style.marginLeft = "-100%";
    }, 500);
  }

  $btnRight.addEventListener("click", nextCertificate);
  $btnLeft.addEventListener("click", previusCertificate);

  //Next certificate each six seconds -> The slider goes forward
  setInterval(nextCertificate, 5000);
})(document);
