let imgs = [
  "img/bild0.jpg",
  "img/bild1.jpg",
  "img/bild2.jpg",
  "img/bild3.jpg",
  "img/bild4.jpg",
  "img/bild5.jpg",
  "img/bild6.jpg",
  "img/bild7.jpg",
  "img/bild8.jpg",
  "img/bild9.jpg",
  "img/bild10.jpg",
  "img/bild11.jpg",
  "img/bild12.jpg",
  "img/bild13.jpg",
  "img/bild14.jpg",
  "img/bild15.jpg",
  "img/bild16.jpg",
  "img/bild17.jpg",
  "img/bild18.jpg",
  "img/bild19.jpg",
  "img/bild20.jpg",
  "img/bild21.jpg",
  "img/bild22.jpg",
  "img/bild23.jpg",
  "img/bild24.jpg",
  "img/bild25.jpg",
  "img/bild26.jpg",
  "img/bild27.jpg",
  "img/bild28.jpg",
  "img/bild29.jpg",
  "img/bild30.jpg",
  "img/bild31.jpg",
  "img/bild32.jpg",
  "img/bild33.jpg",

  
];

function loadImg() {
  let img = document.getElementById("img");
  img.innerHTML = "";
  for (let i = 0; i < imgs.length; i++) {
    imgContent.innerHTML += "";
    imgContent.innerHTML += `
<div onclick="openImg(${i})"><img class="img" src="img/bild${i}.jpg"></div>`;
  }
}

function openImg(i) {
  var open = document.getElementById("imgFullScreen");
  open.classList.remove("d-none");
  open = document.getElementById("imgFullScreen").value;
  imgFullScreen.innerHTML = renderImg(open, i);
}

function renderImg(open, i) {
  return `
<div id="imgFullScreen${open}" class="openImgCountainer">
  <div class="openImgCountainer">
      <div class="openImgIcons"> <img onclick="closeImg()" src="icons/close.png" class="closeIcon">

          <div href="" class="openImgIcons"> <img onclick="leftImg(${[
            i,
          ]})" src="icons/left.png" class="imgIcons">
          </div>
          <a href="img/bild${i}.jpg" class="openImg"><img id="openImg" src="img/bild${i}.jpg" class="fullImg">
          </a>

          <div href="" class="openImgIcons"> <img onclick="rightImg(${[
            i,
          ]})" src="icons/right.png" class="imgIcons">
          </div>
      </div>
  </div>
</div>`;
}
function closeImg() {
  let close = document.getElementById("imgFullScreen");
  close.classList.add("d-none");
}

function rightImg(i) {
  if (i > 32) {
    i = 0;
    openImg(i);
  } else {
    i++;
    openImg(i);
  }
}

function leftImg(i) {
  if (i < 1) {
    i = 33;
    openImg(i);
  } else {
    i--;
    openImg(i);
  }
}

//
