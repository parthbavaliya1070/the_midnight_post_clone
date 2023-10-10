const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



let bulb = document.querySelector('#emi')
gsap.to(bulb,{
    scale:2,
    yoyo:100,
    repeat:-1,
    duration:3
})