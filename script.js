const tl=gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
    // markers:true,
}})

tl.to("#starbucks",{
    top:"95%",
    left:"5%"
},'star')

tl.to("#leaf",{
    top:"110%",
    left:"25%"

},'star')

tl.to("#beans1",{
    top:"130%",
    left:"8%"
},'star')

tl.to("#beams2",{
    top:"150%",
    left:"30%"
},'star')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})


tl2.to("#starbucks",{
    width:"22%",
    top:"210%",
    left:"39%"
})