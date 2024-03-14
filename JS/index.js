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
  document.querySelector('.hetag_img').classList.toggle('hetag_img_none');
  document.querySelector('.hetag_img_sec').classList.toggle('hetag_img_none_none');


  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") === "./css/light.css") {
    theme.href = "./css/dark.css";
  }
  else if (theme.getAttribute("href") === "./css/dark.css") {
    theme.href = "./css/light.css";
  }

  let theme2 = document.getElementById("theme2");
  if (theme2.getAttribute("href") === "./css/dark.css") {
    theme2.href = "./css/light.css";
  }
  else if (theme2.getAttribute("href") === "./css/light.css") {
    theme2.href = "./css/dark.css";
  }

  // if (img1.getAttribute("src") == "./img/oldmoneyBIG.jpg") {
  //   setInterval(() => img1.src = New_photos_BIG_ALL[Math.floor(Math.random() * New_photos_BIG_ALL.length)], 3000 )
  //   setInterval(() => img2.src = New_photos_BIG_ALL_WT[Math.floor(Math.random() * New_photos_BIG_ALL_WT.length)], 3000 )
  // } else if (img1.getAttribute("src") == "./img/oldmoneyBIG1.jpg") {
  //   setInterval(() => img1.src = New_photos_BIG_ALL[Math.floor(Math.random() * New_photos_BIG_ALL.length)], 3000 )
  //   setInterval(() => img2.src = New_photos_BIG_ALL_WT[Math.floor(Math.random() * New_photos_BIG_ALL_WT.length)], 3000 )
  // } else if (img1.getAttribute("src") == "./img/oldmoneyBIG2.jpg") {
  //   setInterval(() => img1.src = New_photos_BIG_ALL[Math.floor(Math.random() * New_photos_BIG_ALL.length)], 3000 )
  //   setInterval(() => img2.src = New_photos_BIG_ALL_WT[Math.floor(Math.random() * New_photos_BIG_ALL_WT.length)], 3000 )
  // }
  
  
  // if (img1.getAttribute("src") == "./img/oldmoneyBIG_wt.jpg") {
  //   setInterval(() => img2.src = New_photos_BIG_ALL[Math.floor(Math.random() * New_photos_BIG_ALL.length)], 3000 )
  //   setInterval(() => img1.src = New_photos_BIG_ALL_WT[Math.floor(Math.random() * New_photos_BIG_ALL_WT.length)], 3000 )
  // } else if (img1.getAttribute("src") == "./img/oldmoneyBIG_wt1.jpg") {
  //   setInterval(() => img2.src = New_photos_BIG_ALL[Math.floor(Math.random() * New_photos_BIG_ALL.length)], 3000 )
  //   setInterval(() => img1.src = New_photos_BIG_ALL_WT[Math.floor(Math.random() * New_photos_BIG_ALL_WT.length)], 3000 )
  // } else if (img1.getAttribute("src") == "./img/oldmoneyBIG_wt2.jpg") {
  //   setInterval(() => img2.src = New_photos_BIG_ALL[Math.floor(Math.random() * New_photos_BIG_ALL.length)], 3000 )
  //   setInterval(() => img1.src = New_photos_BIG_ALL_WT[Math.floor(Math.random() * New_photos_BIG_ALL_WT.length)], 3000 )
  // } else if (img1.getAttribute("src") == "./img/oldmoneyBIG_wt3.jpg") {
  //   setInterval(() => img2.src = New_photos_BIG_ALL[Math.floor(Math.random() * New_photos_BIG_ALL.length)], 3000 )
  //   setInterval(() => img1.src = New_photos_BIG_ALL_WT[Math.floor(Math.random() * New_photos_BIG_ALL_WT.length)], 3000 )
  // } else if (img1.getAttribute("src") == "./img/oldmoneyBIG_wt4.jpg") {
  //   setInterval(() => img2.src = New_photos_BIG_ALL[Math.floor(Math.random() * New_photos_BIG_ALL.length)], 3000 )
  //   setInterval(() => img1.src = New_photos_BIG_ALL_WT[Math.floor(Math.random() * New_photos_BIG_ALL_WT.length)], 3000 )
  // } else if (img1.getAttribute("src") == "./img/oldmoneyBIG_wt5.jpg") {
  //   setInterval(() => img2.src = New_photos_BIG_ALL[Math.floor(Math.random() * New_photos_BIG_ALL.length)], 3000 )
  //   setInterval(() => img1.src = New_photos_BIG_ALL_WT[Math.floor(Math.random() * New_photos_BIG_ALL_WT.length)], 3000 )
  // } else if (img1.getAttribute("src") == "./img/oldmoneyBIG_wt6.jpg") {
  //   setInterval(() => img2.src = New_photos_BIG_ALL[Math.floor(Math.random() * New_photos_BIG_ALL.length)], 3000 )
  //   setInterval(() => img1.src = New_photos_BIG_ALL_WT[Math.floor(Math.random() * New_photos_BIG_ALL_WT.length)], 3000 )
  // }
  
}



let img1 = document.querySelector("#img1");
// if (img1.getAttribute("src") == "./img/oldmoneyBIG.jpg") {
//   img1.src = Random();
// }

  // if (img1.getAttribute("src") == "./img/oldmoneyBIG.jpg") {
  //   setInterval(() => img1.src = New_photos_BIG_ALL[Math.floor(Math.random() * New_photos_BIG_ALL.length)], 3000 )
  // } else if (img1.getAttribute("src") == "./img/oldmoneyBIG1.jpg") {
  //   setInterval(() => img1.src = New_photos_BIG_ALL[Math.floor(Math.random() * New_photos_BIG_ALL.length)], 3000 )
  // } else if (img1.getAttribute("src") == "./img/oldmoneyBIG2.jpg") {
  //   setInterval(() => img1.src = New_photos_BIG_ALL[Math.floor(Math.random() * New_photos_BIG_ALL.length)], 3000 )
  // }


let img2 = document.querySelector("#img2");
// if (img1.getAttribute("src") == "./img/oldmoneyBIG_wt.jpg") {
//   theme.href = "./css/dark.css";
//   theme2.href = "./css/light.css";
//   img2.src = Random2();
//   setInterval(() => img1.src = New_photos_BIG_ALL_WT[Math.floor(Math.random() * New_photos_BIG_ALL_WT.length)], 3000 )
// } else if (img1.getAttribute("src") == "./img/oldmoneyBIG_wt1.jpg") {
//   theme.href = "./css/dark.css";
//   theme2.href = "./css/light.css";
//   img2.src = Random2();
//   setInterval(() => img1.src = New_photos_BIG_ALL_WT[Math.floor(Math.random() * New_photos_BIG_ALL_WT.length)], 3000 )
// } else if (img1.getAttribute("src") == "./img/oldmoneyBIG_wt2.jpg") {
//   theme.href = "./css/dark.css";
//   theme2.href = "./css/light.css";
//   img2.src = Random2();
// setInterval(() => img1.src = New_photos_BIG_ALL_WT[Math.floor(Math.random() * New_photos_BIG_ALL_WT.length)], 3000 )
// } else if (img1.getAttribute("src") == "./img/oldmoneyBIG_wt3.jpg") {
//   theme.href = "./css/dark.css";
//   theme2.href = "./css/light.css";
//   img2.src = Random2();
// setInterval(() => img1.src = New_photos_BIG_ALL_WT[Math.floor(Math.random() * New_photos_BIG_ALL_WT.length)], 3000 )
// } else if (img1.getAttribute("src") == "./img/oldmoneyBIG_wt4.jpg") {
//   theme.href = "./css/dark.css";
//   theme2.href = "./css/light.css";
//   img2.src = Random2();
// setInterval(() => img1.src = New_photos_BIG_ALL_WT[Math.floor(Math.random() * New_photos_BIG_ALL_WT.length)], 3000 )
// } else if (img1.getAttribute("src") == "./img/oldmoneyBIG_wt5.jpg") {
//   theme.href = "./css/dark.css";
//   theme2.href = "./css/light.css";
//   img2.src = Random2();
// setInterval(() => img1.src = New_photos_BIG_ALL_WT[Math.floor(Math.random() * New_photos_BIG_ALL_WT.length)], 3000 )
// } else if (img1.getAttribute("src") == "./img/oldmoneyBIG_wt6.jpg") {
//   theme.href = "./css/dark.css";
//   theme2.href = "./css/light.css";
//   img2.src = Random2();
//   setInterval(() => img1.src = New_photos_BIG_ALL_WT[Math.floor(Math.random() * New_photos_BIG_ALL_WT.length)], 3000 )
// }



let New_photos_ALL = ["./img/oldmoney.jpg", "./img/oldmoney1.jpg", "./img/oldmoney2.jpg", "./img/oldmoney3.jpg","./img/oldmoney4.jpg", "./img/oldmoney5.jpg", "./img/oldmoney6.jpg", "./img/oldmoney7.jpg", "./img/oldmoney8.jpg", "./img/oldmoney_wt2.jpg", "./img/oldmoney_wt3.jpg"]

let New_photos = ["./img/oldmoney.jpg", "./img/oldmoney1.jpg", "./img/oldmoney2.jpg", "./img/oldmoney3.jpg", "./img/oldmoney4.jpg", "./img/oldmoney5.jpg", "./img/oldmoney6.jpg", "./img/oldmoney7.jpg", "./img/oldmoney8.jpg"]

let New_photos_WT = ["./img/oldmoney_wt2.jpg", "./img/oldmoney_wt3.jpg"]


function Random_min() {
  return New_photos_ALL[Math.floor(Math.random() * New_photos_ALL.length)]
}
function Random_min1() {
  return New_photos[Math.floor(Math.random() * New_photos.length)]
}
function Random_min2() {
  return New_photos_WT[Math.floor(Math.random() * New_photos_WT.length)]
}



// if (window.innerWidth <= 1300) {
  // img1.src = Random_min();
  // img2.src = Random_min();
// }

  if (window.innerWidth > 1300) {
    img1.src = "./img/hetag2.jpeg";
    img2.src = "./img/hetag2.jpeg";
  }

// if (img1.getAttribute("src") == "./img/oldmoney.jpg") {
//   img2.src = Random_min();
//   theme.href = "./css/light.css";
//   theme2.href = "./css/dark.css";
//   setInterval(() => img1.src = New_photos_ALL[Math.floor(Math.random() * New_photos_ALL.length)], 3000);
//   setInterval(() => img2.src = New_photos_ALL[Math.floor(Math.random() * New_photos_ALL.length)], 3000);
// } else if (img1.getAttribute("src") == "./img/oldmoney1.jpg") {
//   img2.src = Random_min();
//   theme.href = "./css/light.css";
//   theme2.href = "./css/dark.css";
//   setInterval(() => img1.src = New_photos_ALL[Math.floor(Math.random() * New_photos_ALL.length)], 3000);
//   setInterval(() => img2.src = New_photos_ALL[Math.floor(Math.random() * New_photos_ALL.length)], 3000);
// } else if (img1.getAttribute("src") == "./img/oldmoney2.jpg") {
//   img2.src = Random_min();
//   theme.href = "./css/light.css";
//   theme2.href = "./css/dark.css";
//   setInterval(() => img1.src = New_photos_ALL[Math.floor(Math.random() * New_photos_ALL.length)], 3000);
//   setInterval(() => img2.src = New_photos_ALL[Math.floor(Math.random() * New_photos_ALL.length)], 3000);
// } else if (img1.getAttribute("src") == "./img/oldmoney3.jpg") {
//   img2.src = Random_min();
//   theme.href = "./css/light.css";
//   theme2.href = "./css/dark.css";
//   setInterval(() => img1.src = New_photos_ALL[Math.floor(Math.random() * New_photos_ALL.length)], 3000);
//   setInterval(() => img2.src = New_photos_ALL[Math.floor(Math.random() * New_photos_ALL.length)], 3000);
// } else if (img1.getAttribute("src") == "./img/oldmoney4.jpg") {
//   img2.src = Random_min();
//   theme.href = "./css/light.css";
//   theme2.href = "./css/dark.css";
//   setInterval(() => img1.src = New_photos_ALL[Math.floor(Math.random() * New_photos_ALL.length)], 3000);
//   setInterval(() => img2.src = New_photos_ALL[Math.floor(Math.random() * New_photos_ALL.length)], 3000);
// } else if (img1.getAttribute("src") == "./img/oldmoney5.jpg") {
//   img2.src = Random_min();
//   theme.href = "./css/light.css";
//   theme2.href = "./css/dark.css";
//   setInterval(() => img1.src = New_photos_ALL[Math.floor(Math.random() * New_photos_ALL.length)], 3000);
//   setInterval(() => img2.src = New_photos_ALL[Math.floor(Math.random() * New_photos_ALL.length)], 3000);
// } else if (img1.getAttribute("src") == "./img/oldmoney6.jpg") {
//   img2.src = Random_min2();
//   theme.href = "./css/light.css";
//   theme2.href = "./css/dark.css";
//   setInterval(() => img1.src = New_photos_ALL[Math.floor(Math.random() * New_photos_ALL.length)], 3000);
//   setInterval(() => img2.src = New_photos_ALL[Math.floor(Math.random() * New_photos_ALL.length)], 3000);
// } else if (img1.getAttribute("src") == "./img/oldmoney7.jpg") {
//   img2.src = Random_min();
//   theme.href = "./css/light.css";
//   theme2.href = "./css/dark.css";
//   setInterval(() => img1.src = New_photos_ALL[Math.floor(Math.random() * New_photos_ALL.length)], 3000);
//   setInterval(() => img2.src = New_photos_ALL[Math.floor(Math.random() * New_photos_ALL.length)], 3000);
// } else if (img1.getAttribute("src") == "./img/oldmoney8.jpg") {
//   img2.src = Random_min();
//   theme.href = "./css/light.css";
//   theme2.href = "./css/dark.css";
//   setInterval(() => img1.src = New_photos_ALL[Math.floor(Math.random() * New_photos_ALL.length)], 3000);
//   setInterval(() => img2.src = New_photos_ALL[Math.floor(Math.random() * New_photos_ALL.length)], 3000);
// }

// if (img1.getAttribute("src") == "./img/oldmoney_wt2.jpg") {
//   img2.src = Random_min();
//   theme.href = "./css/dark.css";
//   theme2.href = "./css/light.css";
//   setInterval(() => img2.src = New_photos_ALL[Math.floor(Math.random() * New_photos_ALL.length)], 3000);
//   setInterval(() => img1.src = New_photos_ALL[Math.floor(Math.random() * New_photos_ALL.length)], 3000);
// } else if (img1.getAttribute("src") == "./img/oldmoney_wt3.jpg") {
//   img2.src = Random_min();
//   theme.href = "./css/dark.css";
//   theme2.href = "./css/light.css";
//   setInterval(() => img2.src = New_photos_ALL[Math.floor(Math.random() * New_photos_ALL.length)], 3000);
//   setInterval(() => img1.src = New_photos_ALL[Math.floor(Math.random() * New_photos_ALL.length)], 3000);
// }



// if (window.devicePixelRatio !== 1) { // Костыль для определения иных устройств, с коэффициентом отличным от 1		
//   var dpt = window.devicePixelRatio;
//   var widthM = window.screen.width * dpt;
//   var widthH = window.screen.height * dpt;
//   document.write('<meta name="viewport" content="width=' + widthM+ ', height=' + widthH + '">');
// }