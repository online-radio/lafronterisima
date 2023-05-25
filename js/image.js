

//almacenar slider en una variable 
var slide = $('.slideContainer');
//almacenar botones
var siguiente = $('.left');
var anterior = $('.right');

//mover ultima imagen al primer lugar
$('.slideContainer .slide:last').insertBefore('.slideContainer .slide:first');
//mostrar la primera imagen con un margen de -100%
slide.css('margin-left', '-'+100+'%');  

function moverD() {
	slide.animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
		$('.slideContainer .slide:first').insertAfter('.slideContainer .slide:last');
		slide.css('margin-left', '-'+100+'%');
	});     
}

function moverI() {
	slide.animate({
		marginLeft:0
	} ,700, function(){
		$('.slideContainer .slide:last').insertBefore('.slideContainer .slide:first');
		slide.css('margin-left', '-'+100+'%');
	});
}

function autoplay() {
	interval = setInterval(function(){
		moverD();
	}, 5000);
}
siguiente.on('click',function() {
	moverD();
	clearInterval(interval);
	autoplay();
});

anterior.on('click',function() {
	moverI();
	clearInterval(interval);
	autoplay();
});
        

autoplay();