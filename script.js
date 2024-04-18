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

var tl2=gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub:true,
    // markers:true,
}})


tl2.to("#starbucks",{
    top: "180%",
    left: "33%",
    width:"35%",
},'ca')

tl2.to("#leaf",{
    top: "200%",
    left: "52%",
},'ca')

tl2.to("#beans1",{
    top: "210%",
    left: "33%",
    // width:"35%"
},'ca')
tl2.to("#beams2",{
    top: "250%",
    left: "53%",
    // width:"35%",
},'ca')
