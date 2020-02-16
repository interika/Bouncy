// ssm.addStates([
//   {
//     id: "mobile",
//     query: "(max-width: 640px)",
//     onEnter: function() {
//       initMobile();
//     }
//   },
//   {
//     id: "tablet",
//     query: "(min-width: 641px) and (max-width: 992px)",
//     onEnter: function() {
//       initTablet();
//     }
//   },
//   {
//     id: "desktop",
//     query: "(min-width: 993px)",
//     onEnter: function() {
//       initDesktop();
//     }
//   }
// ]);

$(".gallery").isotope({
  itemSelector: ".gallery-item",
  masonry: {
    /*fitWidth: true*/
  }
});

$(document).on("click", ".portfolio-nav__link", e => {
  e.preventDefault();
  e.stopPropagation();
  const filter = "." + $(e.target).data("filter");
  $(".gallery").isotope({ filter });
});

//console.log("ISOTOPE");

new SmoothScroll('a[href*="#"]', {
  speed: 300
});
console.log("scroll");

$(".sliders__items").slick({
  autoplay: true,
  slidesToShow: 1,
  arrows: false,
  dots: true,
  appendDots: ".dotts"
});

$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  slidesToShow: 1,
  dots: true
});
//console.log("slider");

let map;
const cnt = { lat: 46.478766, lng: 30.723594 };
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: cnt,
    zoom: 16
  });
  const marker = new google.maps.Marker({
    position: cnt,
    map: map,
    title: "BOUNCY",
    icon: "../i/favicon.png"
  });
}
//console.log(map);
