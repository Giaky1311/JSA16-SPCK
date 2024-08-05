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

const btnLogin = document.getElementById("btnLogin");
btnLogin.onclick = () => {
  window.location.href = "./login.html";
};

const btnLogin = document.getElementById("btnAbout");
btnLogin.onclick = () => {
  window.location.href = "./about.html";
};

const btnLogin = document.getElementById("btnBlog");
btnLogin.onclick = () => {
  window.location.href = "./blog.html";
};

const btnLogin = document.getElementById("btnContact");
btnLogin.onclick = () => {
  window.location.href = "./contact.html";
};
