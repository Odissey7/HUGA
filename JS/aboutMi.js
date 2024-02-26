document.querySelector('.burger_team').onclick = function () {
    document.querySelector('.burger_team').classList.toggle('active');
    document.querySelector('.burger_popup-active').classList.toggle('burger_popup');
}



document.querySelector('.strange_btn_img').onclick = function () { 
    document.querySelector('.strange_btn_img_sec').classList.toggle('strange_btn_img_active');
    document.querySelector('.body_myTeam').classList.toggle('body_myTeam_active');
    document.querySelector('.anonse-list').classList.toggle('anonse_team_active');
    document.querySelector('.anonse_team_sec').classList.toggle('anonse_team_sec_active');
    document.querySelector('.img_merch_sec').classList.toggle('img_merch_active');
}

