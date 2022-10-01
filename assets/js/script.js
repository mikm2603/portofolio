let link = document.getElementById("link");
let hamburger = document.getElementById("hamburger");
let navbar = document.getElementById("navbar");
hamburger.addEventListener("click",()=>{
    if(link.classList.contains("active")){
        link.classList.remove("active");
        navbar.classList.remove("active");
        document.body.style.removeProperty("overflow-y");
        hamburger.src = "/assets/icons/hamburger.png";
    }else{
        link.classList.add("active");
        navbar.classList.add("active");
        document.body.style.overflowY = "hidden";
        hamburger.src = "/assets/icons/close.png";
    }
})
let linknav = document.querySelectorAll("#link a");
linknav.forEach(element => {
    element.addEventListener("click",()=>{
        link.classList.remove("active");
        navbar.classList.remove("active");
        document.body.style.removeProperty("overflow-y");
        hamburger.src = "/assets/icons/hamburger.png";
    });
});

let btnopen = document.getElementById("btnopen");
let btnclose = document.getElementById("btnclose");
let opensource = document.getElementById("opensource");
let closesource = document.getElementById("closesource");

btnopen.addEventListener("click",(e)=>{
    if(opensource.classList.contains("none")){
        opensource.classList.remove("none");
    }
    if(btnclose.classList.contains("active")){
        btnclose.classList.remove("active");
    }
    closesource.classList.add("none");
    btnopen.classList.add("active");
    e.preventDefault();
})
btnclose.addEventListener("click",(e)=>{
    if(closesource.classList.contains("none")){
        closesource.classList.remove("none");
    }
    if(btnopen.classList.contains("active")){
        btnopen.classList.remove("active");
    }
    opensource.classList.add("none");
    btnclose.classList.add("active");
    e.preventDefault();
})

let inputname = document.getElementById("inputname");
let inputemail = document.getElementById("inputemail");
let inputessage = document.getElementById("inputmessage");
function handleSubmit(e){
    e.preventDefault();
    let subject = `Email Dari ${inputname.value}`;
    let body =  `Hai perkenalkan saya ${inputname.value} dengan email ${inputemail.value} \n ${inputessage.value} `;
    let email = `mailto:mikmself@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = email;
}
