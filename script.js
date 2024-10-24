function navEnimation(){
  var nav = document.querySelector("nav")

nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline()

    tl.to("#nav-bottom", {
        height: "21vh",
        duration: 0.5
    })
    tl.to(".nav-elem h5 span", {
        display: "block",
        duration: 0.1

    })

    tl.to(".nav-elem h5 span", {
        opacity:1,
        scale:1,
        ease: "power1.inOut",
        stagger: {
          duration:2,
          ease: "power2.in",
          amount: 0.5
        }
    })
})

nav.addEventListener("mouseleave",function(){
  let tl=gsap.timeline()

  tl.to(".nav-elem h5 span", {
    opacity:0,
    scale:0,
    ease: "power1.inOut",
    stagger: {
      duration:1,
      ease: "power1.inout",
      amount: 0.3,
    }
})

  tl.to(".nav-elem h5 span", {
    display: "none",
    duration: 0.2
})

  tl.to("#nav-bottom", {
    height: "0vh",
    duration: 0.1
})

})
}

navEnimation()

function page2Animation() {
  var rightElems = document.querySelectorAll(".right-elem")

  rightElems.forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {

          gsap.to(elem.childNodes[3], {
              opacity: 1,
              scale: 1
          })
      })
      elem.addEventListener("mouseleave", function () {
          gsap.to(elem.childNodes[3], {
              opacity: 0,
              scale: 0
          })
      })
      elem.addEventListener("mousemove", function (dets) {

          gsap.to(elem.childNodes[3], {
              x: dets.x - elem.getBoundingClientRect().x - 90,
              y: dets.y - elem.getBoundingClientRect().y - 150
          })
      })
  })
}
page2Animation()

function page3VideoAnimation(){
    var page3=document.querySelector("#page3")
var video=document.querySelector("video")

video.addEventListener("mouseenter",function(){
    video.play()
    gsap.to(video,{
        opacity:1,
        duration:0.1
        
    })
})
video.addEventListener("mouseleave",function(){
    video.load()
    gsap.to(video,{
        opacity:0,
        
    })
})
}
page3VideoAnimation()

var page4=document.querySelector("#side-right")
var page4_video1=document.querySelector("#side-right video")

page4.addEventListener("mouseenter",function(){
    page4_video1.play();
    gsap.to(page4_video1,{
        opacity:1,
        duration:0.1
    })
})
page4.addEventListener("mouseleave",function(){
    page4_video1.load();
    gsap.to(page4_video1,{
        opacity:0,
        duration:0.1
    })
})



