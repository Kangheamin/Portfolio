'use strict'
//Make nalet transparent when it is on the top 
const navbar = document.querySelector('#navber'),
    navbarHeight =navbar.getBoundingClientRect().height;

document.addEventListener('scroll', function(){
    if(window.scrollY > navbarHeight ){
        navbar.classList.add('navbar_dark');
    }
    else{
        navbar.classList.remove('navbar_dark');
    }
});
//Handle scrolling when tapping on the navbar menu

const navbarMenu = document.querySelector('.navber_menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});
// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar_toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

//handle click on "contactme" button on home
const homeContactBtn = document.querySelector('.home_contact');

homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});

//scroll home
const home = document.querySelector('.home_container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

//Show "top button" when scrolling down
const topbutton = document.querySelector('.topbutton');

document.addEventListener('scroll',()=>{
    if (window.scrollY > homeHeight) {
        topbutton.classList.add('visible');
    } else{
        topbutton.classList.remove('visible');
    }
});

topbutton.addEventListener('click',()=>{
    scrollIntoView('#home');
});

//Projects
const workBtnContainer = document.querySelector('.work_categories');
const projectContainer = document.querySelector('.work_projects');
const projects = document.querySelectorAll('.project');
/* 💩💩💩 구식 버전 💩💩💩
workBtnContainer.addEventListener('click', (e)=>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null) {
        return;
    }

//Remove selection from the previous item and select the new one
const active = document.querySelector('.category_btn.selected');
active.classList.remove('selected');

const target = e.target.parentNode === 'BUTTON' ? e.targer : e.target.parentNode;
                e.target.classList.add('selected');
target.classList.add('selected');

    projectContainer.classList.add('anim-out');
       setTimeout(()=>{
        projects.forEach((project) => {
            console.log(project.dataset.type);
            if(filter ==='*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            }else {
                project.classList.add('invisible');
            }
        }); 
        projectContainer.classList.remove('anim-out')
    }, 300);

});
💩💩💩💩*/

// funtion 
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}

//제이쿼리 부분
$(document).ready(function(){
// 🤷‍♂️🤷‍♂️🐱‍🐉🐱‍🐉🐱‍🐉🐱‍🐉😘😘😘삭제하는 부분🤷‍♂️🤷‍♂️🐱‍🐉🐱‍🐉🐱‍🐉🐱‍🐉😘😘😘
    









    //stroke-dashoffset: calc(440 - 440 * 95 / 100);

    let startCount = 0;
    

    $("#circle_bar .box").each(function(index){
        //console.log(index);

        let sel_count = $(this).find(".count").attr("date-limit");
        //console.log(sel_count);

        $(this).find("circle:eq(1)").css("stroke-dashoffset", `calc(440 - 440 * ${sel_count} / 100 )`);
    
        let counter = setInterval(function(){
            if(startCount < sel_count){
                startCount++;
                $(".box").eq(index).find(".count").text(startCount);
            }else if(startCount == sel_count){ //startCount++ 도달 되었으나 값이 적용 X 최종적으로 현재 저장된 date-limit의 값을 넣어줌
                $(".box").eq(index).find(".count").text(sel_count);
            }else{
                clearInterval(counter);
            }
        },80);
    
    });

            //구글 이메일 hide 보냈을때

            $(".close").click(function(){
                $(".thankyou_message").hide();
                return false;
            });
            
});


