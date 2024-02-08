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





document.querySelector('.burger').onclick = function() {
  document.querySelector('.burger').classList.toggle('active');
  document.querySelector('.burger_popup-active').classList.toggle('burger_popup');
}

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
