var map = "";
var center;

function initialize() {
  var mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(-23.013104, -43.394365),
    scrollwheel: false,
  };

  map = new google.maps.Map(document.getElementById("google-map"), mapOptions);

  google.maps.event.addDomListener(map, "idle", function () {
    calculateCenter();
  });

  google.maps.event.addDomListener(window, "resize", function () {
    map.setCenter(center);
  });
}

function calculateCenter() {
  center = map.getCenter();
}

function loadGoogleMap() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyDVWt4rJfibfsEDvcuaChUaZRS5NXey1Cs&v=3.exp&sensor=false&" +
    "callback=initialize";
  document.body.appendChild(script);
}

function setCarousel() {
  if ($(".tm-article-carousel").hasClass("slick-initialized")) {
    $(".tm-article-carousel").slick("destroy");
  }

  if ($(window).width() < 438) {
    // Slick carousel
    $(".tm-article-carousel").slick({
      infinite: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  } else {
    $(".tm-article-carousel").slick({
      infinite: false,
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
    });
  }
}

function setPageNav() {
  if ($(window).width() > 991) {
    $("#tm-top-bar").singlePageNav({
      currentClass: "active",
      offset: 79,
    });
  } else {
    $("#tm-top-bar").singlePageNav({
      currentClass: "active",
      offset: 65,
    });
  }
}

function togglePlayPause() {
  vid = $(".tmVideo").get(0);

  if (vid.paused) {
    vid.play();
    $(".tm-btn-play").hide();
    $(".tm-btn-pause").show();
  } else {
    vid.pause();
    $(".tm-btn-play").show();
    $(".tm-btn-pause").hide();
  }
}

$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $(".tm-top-bar").addClass("active");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $(".tm-top-bar").removeClass("active");
    }
  });

  // Google Map
  loadGoogleMap();

  // Date Picker
  const pickerCheckIn = datepicker("#inputCheckIn");
  const pickerCheckOut = datepicker("#inputCheckOut");

  // Slick carousel
  setCarousel();
  setPageNav();

  $(window).resize(function () {
    setCarousel();
    setPageNav();
  });

  // Close navbar after clicked
  $(".nav-link").click(function () {
    $("#mainNav").removeClass("show");
  });

  // Control video
  $(".tm-btn-play").click(function () {
    togglePlayPause();
  });

  $(".tm-btn-pause").click(function () {
    togglePlayPause();
  });

  // Update the current year in copyright
  $(".tm-current-year").text(new Date().getFullYear());
});

document.getElementById("btnBlog").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "./blog.html";
});

document
  .getElementById("btnContact")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "./contact.html";
  });

document.getElementById("btnLogin").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "./login.html";
});

const showHiddenPass = (loginPass, loginEye) => {
  const input = document.getElementById(loginPass),
    iconEye = document.getElementById(loginEye);

  iconEye.addEventListener("click", () => {
    if (input.type === "password") {
      input.type = "text";

      iconEye.classList.add("ri-eye-line");
      iconEye.classList.remove("ri-eye-off-line");
    } else {
      input.type = "password";

      iconEye.classList.remove("ri-eye-line");
      iconEye.classList.add("ri-eye-off-line");
    }
  });
};

showHiddenPass("login-pass", "login-eye");
