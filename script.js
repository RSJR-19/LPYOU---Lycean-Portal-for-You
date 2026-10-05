const homeBtn = document.getElementById("home-btn");
const announceBtn = document.getElementById("announce-btn");
const servicesBtn = document.getElementById("services-btn");
const aboutBtn = document.getElementById("about-btn");
const contactBtn = document.getElementById("contact-btn");

function trigger(num){
    ([homeBtn, announceBtn, servicesBtn, aboutBtn, contactBtn]).forEach(btn=>{
        btn.classList.remove("active");
        btn.style.fontWeight = "normal";
        
    })
    switch(num){
        case 1:
            homeBtn.classList.add("active");
            homeBtn.style.fontWeight = "bold";
            break;

        case 2:
            announceBtn.classList.add("active");
            announceBtn.style.fontWeight = "bold";
            break;

        case 3:
            servicesBtn.classList.add("active");
            servicesBtn.style.fontWeight = "bold";
            break;

        case 4:
            aboutBtn.classList.add("active");
            aboutBtn.style.fontWeight = "bold";
            break;

        case 5:
            contactBtn.classList.add("active");
            contactBtn.style.fontWeight = "bold";
            break;
    }
}

window.addEventListener('load',()=>{
    window.scrollTo({top:0,left:0,behavior:"smooth"})
    trigger(1);
})