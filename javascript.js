
let colors=[
	"rgb(240, 14, 128)",
	"rgb(0, 0, 0)",
	"rgb(255, 255, 255)",
	"rgb(100, 100, 100)",
	"rgb(50, 200, 50)",
	"rgb(50, 50, 200)"
];

let cuadrados=document.querySelectorAll('.square');	
let num=6;
let h1=document.getElementById("h1");

generateRandomColors(num);
asignar();

function asignar(){	
	for(let i=0;i<cuadrados.length;i++){
		cuadrados[i].style.background=colors[i];
	}	
}
let pickedColor="";
pick();
function pick(){
	pickedColor=pickColor();
	document.getElementById('colorDisplay').innerHTML=pickedColor;
	evento();
}
function evento(){
	for(i=0;i<cuadrados.length;i++){
		cuadrados[i].addEventListener("click",function(){
			let clickedColor=this.style.background;
			if(clickedColor!=pickedColor){
				this.style.visibility="hidden";
				document.getElementById('message').innerHTML="Intentalo nuevamente";
			}else{
				document.getElementById('message').innerHTML="¡Correcto!";
				h1.style.background=pickedColor;
				changeColors();
				document.getElementById('reset').innerHTML="¿Jugar de nuevo?";
			}
		})
	}
}

// function comparar(){
// 	let clickedColor=this.style.background;
// }	
function changeColors(){
	if(hardclass=="selected"){
		for(i=0;i<cuadrados.length;i++){
			cuadrados[i].style.background=pickedColor;
			cuadrados[i].style.visibility="visible";
		}
	}
	if(easyclass=="selected"){
		cuadrados[0].style.background=pickedColor;
		cuadrados[1].style.background=pickedColor;
		cuadrados[2].style.background=pickedColor;
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
function reset(){
	if(hardclass=="selected"){
		generateRandomColors(num);
		asignar();
		pick();
		document.getElementById('message').innerHTML="";
		document.getElementById('reset').innerHTML="Nuevos colores";
		h1.style.background="#232323";
		document.getElementById('1').style.visibility="visible";
		document.getElementById('2').style.visibility="visible";
		document.getElementById('3').style.visibility="visible";
		document.getElementById('4').style.visibility="visible";
		document.getElementById('5').style.visibility="visible";
		document.getElementById('6').style.visibility="visible";
	}
	if(easyclass=="selected"){
		generateRandomColors(3);
		asignar();
		pick();
		document.getElementById('message').innerHTML="";
		document.getElementById('reset').innerHTML="Nuevos colores";
		h1.style.background="#232323";
		document.getElementById('1').style.visibility="visible";
		document.getElementById('2').style.visibility="visible";
		document.getElementById('3').style.visibility="visible";
	}
}
let easyclass= document.getElementById('easy').className;
let hardclass= document.getElementById('hard').className;
function easy(){
	colors.length=3;
	easyclass="selected";
	hardclass="";
	generateRandomColors(3);
	asignar();
	pick();
	// document.getElementById('message').innerHTML="";
	// document.getElementById('reset').innerHTML="Nuevos colores";
	document.getElementById('1').style.visibility="visible";
	document.getElementById('2').style.visibility="visible";
	document.getElementById('3').style.visibility="visible";
	document.getElementById('4').style.visibility="hidden";
	document.getElementById('5').style.visibility="hidden";
	document.getElementById('6').style.visibility="hidden";
	h1.style.background="#232323";
}
function hard(){
	colors.length=6;
	easyclass="";
	hardclass="selected";
	generateRandomColors(num);
	asignar();
	pick();
	document.getElementById('1').style.visibility="visible";
	document.getElementById('2').style.visibility="visible";
	document.getElementById('3').style.visibility="visible";
	document.getElementById('4').style.visibility="visible";
	document.getElementById('5').style.visibility="visible";
	document.getElementById('6').style.visibility="visible";
	h1.style.background="#232323";
}
