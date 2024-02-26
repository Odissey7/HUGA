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


document.querySelector('.strange_btn_sec').onclick = function () { 
  document.querySelector('.strange_btn_img_sec').classList.toggle('strange_btn_img_active');
  document.querySelector('.body').classList.toggle('body_active');
  document.querySelector('.hetag_img').classList.toggle('hetag_img_none');
  document.querySelector('.afisha').classList.toggle('afisha_active');
  document.querySelector('.toggle').classList.toggle('toggle_active');
  document.querySelector('.toggle_text').classList.toggle('toggle_text_active');
  document.querySelector('.my__name-big').classList.toggle('my__name-big_active');
  document.querySelector('.city_show').classList.toggle('city_show_active');
  // document.querySelector('.main_afisha-standUp').classList.toggle('main_afisha-standUp_active');
  // document.querySelector('.main_afisha-standUp_1').classList.toggle('main_afisha-standUp_active');
  // document.querySelector('.main_afisha-standUp_2').classList.toggle('main_afisha-standUp_active');
  document.querySelector('.main_afisha-standUp_3').classList.toggle('main_afisha-standUp_active');
  document.querySelector('.main_afisha-standUp_4').classList.toggle('main_afisha-standUp_active');
  document.querySelector('.main_afisha-standUp_5').classList.toggle('main_afisha-standUp_active');
  document.querySelector('.main_afisha-standUp_6').classList.toggle('main_afisha-standUp_active');
  document.querySelector('.main_afisha-standUp_7').classList.toggle('main_afisha-standUp_active');
  document.querySelector('.main_afisha-standUp_8').classList.toggle('main_afisha-standUp_active');
  // document.querySelector('.standUp_place').classList.toggle('standUp_place_active');
  // document.querySelector('.standUp_place_1').classList.toggle('standUp_place_active');
  // document.querySelector('.standUp_place_2').classList.toggle('standUp_place_active');
  document.querySelector('.standUp_place_3').classList.toggle('standUp_place_active');
  document.querySelector('.standUp_place_4').classList.toggle('standUp_place_active');
  document.querySelector('.standUp_place_5').classList.toggle('standUp_place_active');
  document.querySelector('.standUp_place_6').classList.toggle('standUp_place_active');
  document.querySelector('.standUp_place_7').classList.toggle('standUp_place_active');
  document.querySelector('.standUp_place_8').classList.toggle('standUp_place_active');
  // document.querySelector('.tickets_buy').classList.toggle('tickets_buy_active');
  // document.querySelector('.tickets_buy_1').classList.toggle('tickets_buy_active');
  // document.querySelector('.tickets_buy_2').classList.toggle('tickets_buy_active');
  document.querySelector('.tickets_buy_3').classList.toggle('tickets_buy_active');
  document.querySelector('.tickets_buy_4').classList.toggle('tickets_buy_active');
  document.querySelector('.tickets_buy_5').classList.toggle('tickets_buy_active');
  document.querySelector('.tickets_buy_6').classList.toggle('tickets_buy_active');
  document.querySelector('.tickets_buy_7').classList.toggle('tickets_buy_active');
  document.querySelector('.tickets_buy_8').classList.toggle('tickets_buy_active');
  // document.querySelector('.img_new_sec').classList.toggle('img_new_sec_active');
  // document.querySelector('.img_new_sec_1').classList.toggle('img_new_sec_active');
  document.querySelector('.video_title').classList.toggle('video_title_active');
  document.querySelector('.sociall_background').classList.toggle('sociall_background_active');
  document.querySelector('.question').classList.toggle('question_active');
  
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


// if (window.devicePixelRatio !== 1) { // Костыль для определения иных устройств, с коэффициентом отличным от 1		
//   var dpt = window.devicePixelRatio;
//   var widthM = window.screen.width * dpt;
//   var widthH = window.screen.height * dpt;
//   document.write('<meta name="viewport" content="width=' + widthM+ ', height=' + widthH + '">');
// }