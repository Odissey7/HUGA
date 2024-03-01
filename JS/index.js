const menu=document.querySelector(".menu");
const toggle=document.querySelector(".toggle");
toggle.addEventListener("click",()=>{
  menu.classList.toggle("active");
})


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


document.getElementById("switchMode").onclick = function () {
  document.querySelector('.strange_btn_img_sec').classList.toggle('strange_btn_img_active');


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
  else if (theme.getAttribute("href") === "./css/light.css") {
    theme2.href = "./css/dark.css";
  }


  
  // let theme11 = document.getElementById("theme");
  // if (theme11.getAttribute("href") === "./css/dark.css") {
  //   theme11.href = "./css/light.css";
  // }
  // else {
  //   theme11.href = "./css/light.css";
  // }

  // let theme222 = document.getElementById("theme2");
  // if (theme222.getAttribute("href") === "./css/light.css") {
  //   theme222.href = "./css/dark.css";
  // }
  // else {
  //   theme222.href = "./css/dark.css";
  // }
};




document.querySelector('.burger').onclick = function() {
  document.querySelector('.burger').classList.toggle('active');
  document.querySelector('.burger_popup-active').classList.toggle('burger_popup');
}


// document.querySelector('.strange_btn_sec').onclick = function () { 

// }






const lightStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=light]');
const darkStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]');
const darkSchemeMedia = matchMedia('(prefers-color-scheme: dark)');
const switcherRadios = document.querySelectorAll('.switcher__radio');

function setupSwitcher() {
    const savedScheme = getSavedScheme();

    if (savedScheme !== null) {
        const currentRadio = document.querySelector(`.switcher__radio[value=${savedScheme}]`);
        currentRadio.checked = true;
    }

    [...switcherRadios].forEach((radio) => {
        radio.addEventListener('change', (event) => {
            setScheme(event.target.value);
        });
    });
}

function setupScheme() {
    const savedScheme = getSavedScheme();
    const systemScheme = getSystemScheme();

    if (savedScheme === null) return;

    if (savedScheme !== systemScheme) {
        setScheme(savedScheme);
    }
}

function setScheme(scheme) {
    switchMedia(scheme);

    if (scheme === 'auto') {
        clearScheme();
    } else {
        saveScheme(scheme);
    }
}

function switchMedia(scheme) {
    let lightMedia;
    let darkMedia;

    if (scheme === 'auto') {
        lightMedia = '(prefers-color-scheme: light)';
        darkMedia = '(prefers-color-scheme: dark)';
    } else {
        lightMedia = (scheme === 'light') ? 'all' : 'not all';
        darkMedia = (scheme === 'dark') ? 'all' : 'not all';
    }

    [...lightStyles].forEach((link) => {
        link.media = lightMedia;
    });

    [...darkStyles].forEach((link) => {
        link.media = darkMedia;
    });
}

function getSystemScheme() {
    const darkScheme = darkSchemeMedia.matches;

    return darkScheme ? 'dark' : 'light';
}

function getSavedScheme() {
    return localStorage.getItem('color-scheme');
}

function saveScheme(scheme) {
    localStorage.setItem('color-scheme', scheme);
}

function clearScheme() {
    localStorage.removeItem('color-scheme');
}

setupSwitcher();
setupScheme();


// document.querySelector('.main_afisha-standUp').onclick = function() {
//   document.querySelector('.thecard').classList.toggle('thecard_active');
// }
// document.querySelector('.main_afisha-standUp_sec').onclick = function() {
//   document.querySelector('.thecard_sec').classList.toggle('thecard_active');
// }
// document.querySelector('.main_afisha-standUp_2').onclick = function() {
//   document.querySelector('.thecard_2').classList.toggle('thecard_active');
// }
// document.querySelector('.main_afisha-standUp_3').onclick = function() {
//   document.querySelector('.thecard_3').classList.toggle('thecard_active');
// }


// if (window.devicePixelRatio !== 1) { // Костыль для определения иных устройств, с коэффициентом отличным от 1		
//   var dpt = window.devicePixelRatio;
//   var widthM = window.screen.width * dpt;
//   var widthH = window.screen.height * dpt;
//   document.write('<meta name="viewport" content="width=' + widthM+ ', height=' + widthH + '">');
// }