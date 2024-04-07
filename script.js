
function locomotiveAnimation(){

    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}

function navAnimation(){

    let nav = document.querySelector("nav");
    nav.addEventListener("mouseenter", function(){
        let tl = gsap.timeline()
        tl.to("#nav-bottom",{
            height:"23vh",
        })
        tl.to("#middle-nav h5",{
            display : "block"
        })
        tl.to("#middle-nav h5 span",{
            y:0,
            stagger:{
                amount:0.6
            }
        })
    })
    
    nav.addEventListener("mouseleave", function(){
        let tl = gsap.timeline()
    
        tl.to("#middle-nav h5 span",{
            y:25,
        })
        tl.to("#middle-nav h5",{
            display:"none",
        })
        tl.to("#nav-bottom",{
            height:0
        })
    })
}

function page2Animation(){

let reImg = document.querySelectorAll(".right-elem");

reImg.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1
        })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0
        })
    })
    elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x-50,
            y:dets.y - elem.getBoundingClientRect().y-90
        })
    })
})
}

function videoPlay(){
    var playbutton = document.querySelector(".play-button");
    var video = document.querySelector("#page3 video");

    playbutton.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            display:"block",
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            display:"none",
            borderRadius: "30px"
        })
    })
}

function videoAnimation(){
    let section = document.querySelectorAll(".sec-right");
    section.forEach(function(elem){
        elem.addEventListener("mouseenter", function(){
           elem.childNodes[3].style.opacity=1,
           elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave", function(){
            elem.childNodes[3].style.opacity=0,
            elem.childNodes[3].load()
        })
    })

    //page 8 Block Video Animation
    let blocks = document.querySelectorAll(".blocks");
    blocks.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        elem.childNodes[7].play()
        gsap.to(elem.childNodes[7],{
            opacity:1,
            
            stagger:{
                amount:.4,
            }
            
        })
    })
    elem.addEventListener("mouseleave", function(){
        elem.childNodes[7].load()
        gsap.to(elem.childNodes[7],{
            opacity:0,
        })
    })
})
}  

function ScrollTriggerAnima() {
    gsap.from(".btm12-parts h4", {
        x: 0,
        duration: .2,

        scrollTrigger: {
            trigger: ".btm12-parts",
            scroller: "#main",
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}

//Function Calling
locomotiveAnimation();

loadingAnimation();

navAnimation();

page2Animation();

videoPlay();

videoAnimation();

ScrollTriggerAnima();
