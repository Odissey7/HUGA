const menu = document.querySelector(".menu");
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const huga = document.querySelector(`.my__name`);
const huga_team = document.querySelector(`.about_my-team-none`);

huga.onclick = function (evt) {
  evt.preventDefault();
    huga_team.classList.toggle(`about_my-team`);
    document.onkeydown = function (evt) {
      if (evt.key === `Escape` || this.onclick) {
          huga_team.classList.remove(`about_my-team`);
      }
    };
  }
document.querySelector('.burger').onclick = function () {
  document.querySelector('.burger').classList.toggle('active');
  document.querySelector('.burger_popup-active').classList.toggle('burger_popup');
};

document.getElementById("switchMode").onclick = function () {
  document.querySelector('.strange_btn_img_sec').classList.toggle('strange_btn_img_active');

  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") === "./css/light.css") {
    theme.href = "./css/dark.css";
  } else if (theme.getAttribute("href") === "./css/dark.css") {
    theme.href = "./css/light.css";
  }

  let theme2 = document.getElementById("theme2");
  if (theme2.getAttribute("href") === "./css/dark.css") {
    theme2.href = "./css/light.css";
  } else if (theme2.getAttribute("href") === "./css/light.css") {
    theme2.href = "./css/dark.css";
  }
}


let img1 = document.querySelector("#img1");


// let New_photos_ALL = ["url(../img/oldmoney.jpeg) no-repeat fixed top center /cover", , "url(../img/oldmoney1.jpeg) no-repeat fixed top center /cover", "url(../img/oldmoney2.jpeg) no-repeat fixed top center /cover", "url(../img/oldmoney3.jpeg) no-repeat fixed top center /cover", "url(../img/oldmoney4.jpeg) no-repeat fixed top center /cover", "url(./img/oldmoney5.jpeg) no-repeat fixed top center /cover", "url(../img/oldmoney6.jpeg) no-repeat fixed top center /cover", "url(../img/oldmoney7.jpeg) no-repeat fixed top center /cover", "url(../img/oldmoney8.jpeg) no-repeat fixed top center /cover", "url(../img/oldmoney_wt2.jpeg) no-repeat fixed top center /cover", "url(../img/oldmoney_wt3.jpeg) no-repeat fixed top center /cover"];

// let het_1 = ["url(../img/hetag2.jpeg) no-repeat fixed top center /cover"];

// if (window.innerWidth <= 1300) {
//   img1.style.background = "url(../img/oldmoney.jpeg) no-repeat fixed top center /cover";
// }

// if (img1.style.background = "url(../img/oldmoney.jpeg) no-repeat fixed top center /cover") {
//   setInterval(() => img1.style.background = New_photos_ALL[Math.floor(Math.random() * New_photos_ALL.length)], 3000);
// };

// if (window.innerWidth > 1300) {
//   setInterval(() => img1.style.background = het_1, 3000);
// } else {
//   console.log("+")
// };



let New_photos_ALL = ["./img/oldmoney.jpeg", "./img/oldmoney1.jpeg", "./img/oldmoney2.jpeg", "./img/oldmoney3.jpeg", "./img/oldmoney4.jpeg", "./img/oldmoney5.jpeg", "./img/oldmoney6.jpeg", "./img/oldmoney7.jpeg", "./img/oldmoney8.jpeg", "./img/oldmoney_wt2.jpeg", "./img/oldmoney_wt3.jpeg"];

let het_1 = ["../img/hetag2.jpeg"];

if (window.innerWidth <= 1300) {
  img1.src = "../img/oldmoney4.jpeg";
}

if (img1.src = "../img/oldmoney4.jpeg") {
  setInterval(() => img1.src = New_photos_ALL[Math.floor(Math.random() * New_photos_ALL.length)], 3000);
};

if (window.innerWidth > 1300) {
  img1.src = het_1
  setInterval(() => img1.src = het_1, 3000);
} else {
  console.log("zzzzqqq")
};
