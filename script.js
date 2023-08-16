const letter = document.getElementsByClassName("letter")
const letter1 = document.getElementById("letter1")
const letter2 = document.getElementById("letter2")
const letter3 = document.getElementById("letter3")

const letterFunc = function() {
    const dateNow = Date.now()
    if(dateNow < new Date(2023,8,18,00,00).getTime()) {
        letter2.style.display = "none"
        letter3.style.display = "none"
    }else if(dateNow < new Date(2023,8,19,00,00).getTime()) {
        letter3.style.display = "none"    }
}

var elms = document.getElementsByClassName( 'splide' );

for ( var i = 0; i < elms.length; i++ ) {
  new Splide( elms[ i ],{
    type: "loop"
  } ).mount();
}

const time01 = document.getElementById("time01")
const time02 = document.getElementById("time02")
const time03 = document.getElementById("time03")
const time04 = document.getElementById("time04")
const time05 = document.getElementById("time05")
const time06 = document.getElementById("time06")
const label = document.querySelector("label")


const time = function() {
    const dateNow = Date.now()

    const birthDate = new Date(2000,8,17,22,58).getTime()

    const difference1 = Math.round(dateNow - birthDate) 
    const seconds1 =  Math.round(difference1 / 1000)
    const minutes1 =  Math.round(seconds1 / 60)
    const hour1 =  Math.round(minutes1 / 60)
    const day1 =  Math.round(hour1 / 24)

    const tukiau = new Date(2022,9,24,00,00).getTime()
    const difference2 = Math.round(dateNow - tukiau) 
    const seconds2 =  Math.round(difference2 / 1000)
    const minutes2 =  Math.round(seconds2 / 60)
    const hour2 =  Math.round(minutes2 / 60)
    const day2 =  Math.round(hour2 / 24)
    
    time01.textContent = `${day1}日`
    time02.textContent = `${minutes1}分`
    time03.textContent = `${seconds1}秒`
    time04.textContent = `${day2}日`
    time05.textContent = `${minutes2}分`
    time06.textContent = `${seconds2}秒`
}

letterFunc();
time();

$(function(){
	$(window).scroll(function (){
		$('.fadeUp').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
});

const btn = document.getElementById("btn")
btn.onclick = time
