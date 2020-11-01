
// Start of Animated Skill Bar
const skillBar = document.querySelectorAll('.skill_bar');

window.addEventListener('load',function(){
    skillBar.forEach(function(item){
        // Get Single Skill Element
        const skill = item.parentElement.parentElement;
        // Get Attribute From Skill Titile h4
        const skillParcentage = skill.querySelector('h4').getAttribute('data-parcentage');
        // Add Width to Skill Bar 
        item.style.width = skillParcentage + "%";

    })
})
// End of Animated Skill Bar



// Start of CounterUp Animation
const counts = document.querySelectorAll('.count');
const speed = 100;

counts.forEach(function(singleCount){

    const updateCounter = function(){
        const target = +singleCount.getAttribute('data-target');
        const countNumber = +singleCount.innerText;
        const inc = Math.floor(target/speed);

        if(countNumber < target ){
            singleCount.innerText = countNumber + inc;
            setTimeout(updateCounter,10);
        }else{
            singleCount.innerText = target;
        }
    }
    updateCounter();
})
// End of CounterUp Animation



// Start of Video Player JavaScript
const playPauseBtn = document.querySelector('.play_pause_btn');
const btnIcon = playPauseBtn.querySelector('i');
// console.log(btnIcon.classList.contains('fa fa-play'));

const video = document.querySelector('.video');

const videoPlayPauseToggle = function(){
    if(btnIcon.classList.contains('fa') && btnIcon.classList.contains('fa-play')){
        video.play();
        btnIcon.classList.remove('fa-play');
        btnIcon.classList.add('fa-pause');
    }else{
        btnIcon.classList.add('fa-play');
        btnIcon.classList.remove('fa-pause');
        video.pause()
    }

}

playPauseBtn.addEventListener('click',function(){
    videoPlayPauseToggle();

})
// End of Video Player JavaScript 




// Start of Slider JavaScript
    const sliderContainer = document.querySelector('.slider_container');
    const sliders = document.querySelector('.sliders');
    const slide = document.querySelectorAll('.slide');
     // console.log(slide.length);

    // Slider bubble Point Add Start
        const bubblePoint = document.querySelector('.bubble_point');

        for(var i = 0; i < slide.length; i++){
            var pointElement = document.createElement('div');
            pointElement.classList.add('point');
            // console.log(pointElement);
            bubblePoint.appendChild(pointElement);
        }
        const point = document.querySelectorAll('.point');
        point[0].classList.add('bubble_point_active');
        
    // Slider bubble Point Add End

    let index = 0;
    let sliderid;

    const slideWidth = slide[index].clientWidth;

    // const slidesRun = sliders.style.transform = `translateX(${-slideWidth * index}px)`;
    // console.log(slidesRun);
    
    const startSlide = function(){
        sliderid = setInterval(sliderFunction,3000);
    }

    function sliderFunction(){

        index++;
        sliders.style.transform = `translateX(${-slideWidth * index}px)`;
        
        if(index >= slide.length){
            index = 0;
            sliders.style.transform = `translateX(${slideWidth * index}px)`
        }
        
        
        point.forEach(function(singleElement){
            singleElement.classList.remove('bubble_point_active');
        })
        point[index].classList.add('bubble_point_active');
        
    }
    startSlide();

    sliderContainer.addEventListener('mouseover',function(){
        clearInterval(sliderid);
    })
    
    sliderContainer.addEventListener('mouseleave',startSlide);

// End of Slider JavaScript


// Responsive Design JavaScript Start

    // Responsive Menu Toggle Button
    const responsiveMenuBtn = document.querySelector('.menu_bar_icon');
    const responsiveMenu = document.querySelector('.top_menu');
    responsiveMenuBtn.addEventListener('click',function(){
        responsiveMenu.classList.toggle('responsive_menu_show');
        responsiveMenu.style.transition = 'all 1s ease-in-out';
    })