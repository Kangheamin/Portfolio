//✨💕 Work 신세대 부분 💕✨

const photoArr = [
    ["kuliner.png", "Kuliner website", "HTML, CSS, JQUERY를 이용하여 PC버전으로 제작되었습니다.","web", "https://kangheamin.github.io/kuliner/"],
    ["cakehouse.png", "cakehouse", "HTML, CSS, JQUERY를 이용하여 PC버전으로 제작되었습니다.","web", "https://kangheamin.github.io/CakeHouse/"],
    ["cashmere.png", "cashmere", "HTML, CSS, JQUERY를 이용하여 PC버전으로 제작되었습니다.","web", "https://kangheamin.github.io/wedding/"],
    ["hospital.png", "hospital", "HTML, CSS, JQUERY를 이용하여 PC버전으로 제작되었습니다.","web", "https://kangheamin.github.io/Hospital/"],
    ["origin.png", "origin", "HTML, CSS, JQUERY를 이용하여 PC버전으로 제작되었습니다.","web", "https://kangheamin.github.io/Origin/"],
    ["bnostore.png", "B&O", "HTML, CSS, JQUERY를 이용하여 PC버전으로 제작되었습니다.","web", "https://kangheamin.github.io/BandO/"],
    ["music.png", "Music", "HTML, CSS, JQUERY를 이용하여 PC버전으로 제작되었습니다.","web", "https://kangheamin.github.io/music/"],
    ["movie_ajax.png", "Jangsari", "HTML, CSS, JQUERY AJAX를 이용하여 PC버전으로 제작되었습니다.","ajax", "https://kangheamin.github.io/ajax_Jangsari/"],
    ["weatherApp.png", "weatherApp", "HTML, CSS, JQUERY AJAX를 이용하여 PC버전으로 제작되었습니다.","ajax", "https://kangheamin.github.io/wedding/"],
    ["national_geographic.png", "national_geographic", "Vue를 이용하여 PC버전으로 제작되었습니다.","vue", "https://ngeo0111.netlify.app/#/"],
    ["audition_vue.png", "audition_vue", "Vue를 이용하여 PC버전으로 제작되었습니다.","vue", "https://kangheamin.github.io/vue_audition/"],
    ["chatting.png", "Chatting", "PHP를 이용하여 PC버전으로 제작되었습니다.","php", "http://bobpop20.dothome.co.kr/chattingApp/main.html"],
    ["oclass.png", "Oclass", "PHP를 이용하여 PC버전으로 제작되었습니다.","php", "http://bobpop20.dothome.co.kr/oclass/"],
    ["ecomona.png", "ecomona", "HTML, CSS, Jacascript를 이용하여 PC버전으로 제작되었습니다.","develop", "https://kangheamin.github.io/ecomona/"],
    ["game.png", "minigame", "HTML, CSS, Javascript를 이용하여 PC버전으로 제작되었습니다.","develop", "https://kangheamin.github.io/minigame/"],
    ["todolist.png", "ToDoList", "HTML, CSS, Javascript를 이용하여 PC버전으로 제작되었습니다.","develop", "https://kangheamin.github.io/Todolist/"],
]

const sectionSpace = document.querySelector("#grid_system");
let sectionCont = "";

for(v of photoArr){
    sectionCont += `
    <article class="${v[3]}">
        <div class="photo" onclick="window.open('${v[4]}')">
        <div class="img" style="background-image:url(./image/${v[0]})" src="${v[4]}"></div>
            <h3>${v[1]}</h3>
            <p>${v[2]}</p>
            <a class="bluecolor" href="${v[4]}" target="_blank"><i class="fas fa-arrow-right">&nbsp;</i>Detail_view</a>
        </div>
    </article>
    `
}
sectionSpace.innerHTML = sectionCont;

let grid;
const timeOut = setTimeout(() => {
    grid = new Isotope("#grid_system", {
        itemSelector : "article",
        transitionDuration : "0.5s"
    });
}, 500);

//클릭한 곳의 이미지를 보여주는 구현
const sortBtns = document.querySelectorAll(".sort_btn li");

for(v of sortBtns){
    v.addEventListener("click", (e) => {
        e.preventDefault();
        const dataSort = e.currentTarget.querySelector("a").getAttribute("data-sort");
        grid.arrange({
            filter : dataSort
        });

        //전체 버튼에 클래스명 active 제거
        for(v of sortBtns){
            v.classList.remove("active");
        }

        //클릭한 곳의 버튼만 클래스명 active 부여
        e.currentTarget.classList.add("active");
    });    
}

