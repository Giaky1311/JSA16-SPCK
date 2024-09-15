let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("google-map"), {
    center: { lat: 21.009057, lng: 105.860751 },
    zoom: 8,
  });
}

initMap();

const btnLogin = document.getElementById("btnLogin");
btnLogin.onclick = () => {
  window.location.href = "./login.html";
};

const btnAbout = document.getElementById("btnAbout");
btnAbout.onclick = () => {
  window.location.href = "./about.html";
};

const btnBlog = document.getElementById("btnBlog");
btnBlog.onclick = () => {
  window.location.href = "./blog.html";
};

const btnContact = document.getElementById("btnContact");
btnContact.onclick = () => {
  window.location.href = "./contact.html";
};

const btnHome = document.getElementById("btnHome");
btnContact.onclick = () => {
  window.location.href = "./index.html";
};

