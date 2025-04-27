//Section-8
let nums = document.querySelectorAll(".num");
let container = document.querySelectorAll(".container");

nums.forEach((e)=>{
    let start = 0;
    let end = e.dataset.num;
    
    let count = setInterval(()=>{
        start ++;
        e.textContent = start;
        if(start == end){
            clearInterval(count);
        }
    },3000/end)
})

window.onscroll = () => {
    if(window.screenY = container.offsetTop){
        
    }
}






$(document).ready(function(){
     $(".owl-carousel").owlCarousel({
        margin : 20,
        loop : true,
        autoplay: true, 
        autoplayTimeout:1000,
        autoplayHoverPause:false,
        responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        400:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        900:{
            items:6,
            nav:false
        },
        1200:{
            items:8,
            nav:true,
            loop:true
        }
    }
     });
  });
      

