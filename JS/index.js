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

const btnBurger = document.querySelector('.burger');
const burgerOpen = document.querySelector('.burger_popup-active');

btnBurger.onclick = function (evt) {
  evt.preventDefault();
  btnBurger.classList.toggle('burger_none')
  burgerOpen.classList.toggle(`burger_popup`);
  document.onkeydown = function (evt) {
    if (evt.key === `Escape` || this.onclick) {
      burgerOpen.classList.remove(`burger_popup`);
    }
  };
}

const opPop = document.querySelector('.wrapper_pop');
const popNone = document.querySelector('.burger_popup-active');

opPop.onclick = function (evt) {
  evt.preventDefault();
  btnBurger.classList.toggle('burger_none')
  popNone.classList.toggle(`burger_popup`);
    document.onkeydown = function (evt) {
      if (evt.key === `Escape` || this.onclick) {
        popNone.classList.remove(`burger_popup`);
      }
    };
}
