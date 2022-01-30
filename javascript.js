
let colors=[];
let cuadrados=document.querySelectorAll('.square');	
let num=6;
let h1=document.getElementById("h1");
let pickedColor="";
let mensaje=document.getElementById('message');
let resetear=document.getElementById('reset');
let display=document.getElementById('colorDisplay');
let easyclass= document.getElementById('easy').className;
let hardclass= document.getElementById('hard').className;

generateRandomColors(num);
asignar();
pick();

function asignar(){	
	for(let i=0;i<cuadrados.length;i++){
		cuadrados[i].style.backgroundColor=colors[i];
	}	
}
function pick(){
	pickedColor=pickColor();
	display.innerHTML=pickedColor;
	evento();
}
function evento(){
	for(i=0;i<cuadrados.length;i++){
		cuadrados[i].addEventListener("click",function(){
			let clickedColor=this.style.backgroundColor;
			if(clickedColor!=pickedColor){
				this.style.visibility="hidden";
				mensaje.innerHTML="Intentalo nuevamente";
			}else{
				mensaje.innerHTML="¡Correcto!";
				h1.style.backgroundColor=pickedColor;
				changeColors();
				resetear.innerHTML="¿Jugar de nuevo?";
			}
		})
	}
}	
function changeColors(){
	if(hardclass=="selected"){
		for(i=0;i<cuadrados.length;i++){
			cuadrados[i].style.backgroundColor=pickedColor;
			cuadrados[i].style.visibility="visible";
		}
	}
	if(easyclass=="selected"){
		cuadrados[0].style.backgroundColor=pickedColor;
		cuadrados[1].style.backgroundColor=pickedColor;
		cuadrados[2].style.backgroundColor=pickedColor;
		cuadrados[0].style.visibility="visible";
		cuadrados[1].style.visibility="visible";
		cuadrados[2].style.visibility="visible";
	}
}
function pickColor(){
	let random = Math.floor(Math.random()*colors.length);
	return colors[random];
}
function randomColor(){
	let r=Math.floor(Math.random()*256);
	let g=Math.floor(Math.random()*256);
	let b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}
function generateRandomColors(num){
	for(i=0;i<num;i++){
		colors[i]=randomColor();
	}
}
function global(){
	generateRandomColors(num);
	asignar();
	pick();
	mensaje.innerHTML="";
	resetear.innerHTML="Nuevos colores";
	for(i=0;i<cuadrados.length;i++){
			cuadrados[i].style.visibility="visible";
		}
	h1.style.background="#232323";
}
function reset(){
	if(hardclass=="selected"){
		global();
	}
	if(easyclass=="selected"){
		var num=3;
		global();
		document.getElementById('4').style.visibility="hidden";
		document.getElementById('5').style.visibility="hidden";
		document.getElementById('6').style.visibility="hidden";
	}
}

function easy(){
	colors.length=3;
	easyclass="selected";
	hardclass="";
	var num=3;
	global();
	document.getElementById('4').style.visibility="hidden";
	document.getElementById('5').style.visibility="hidden";
	document.getElementById('6').style.visibility="hidden";
}
function hard(){
	colors.length=6;
	easyclass="";
	hardclass="selected";
	global();
}
