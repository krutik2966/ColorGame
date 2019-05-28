var easyButton=document.querySelectorAll(".navBUTTON");
var colorNumber=document.querySelectorAll(".number");
var buttonColor=document.getElementsByClassName("gameButton");
var NoOfButton=6;
// var select=Math.floor((Math.random() * NoOfButton));
var otherButton=document.getElementsByClassName("extraBtn");

var rightColor;
var addtext=document.getElementById("addText");
var NewGame=document.getElementById("PlayAgain");
createColor(6);
// var OtherButtons=document.getElementById("otherButton")
// easyButton[1].addEventListener("click",function{
// 		NoOfButton=6;
// });
	easyButton[0].addEventListener("click",function(){
		addtext.textContent="";
		NewGame.textContent="New Game";
		document.querySelector(".head").style.background="#008B8B";
		this.classList.add("change");
		easyButton[1].classList.remove("change");
		for(var i=0;i<3;i++)
		otherButton[i].style.display="none";
		 NoOfButton=3;
		 createColor(3);

	});
	easyButton[1].addEventListener("click",function(){
		addtext.textContent="";
		NewGame.textContent="New Game";
		document.querySelector(".head").style.background="#008B8B";
		this.classList.add("change");
		easyButton[0].classList.remove("change");
		 for(var i=0;i<3;i++)
		otherButton[i].style.display="block";
		NoOfButton=6;
		createColor(6);
	
		
	});




for(var l=0;l<NoOfButton;l++){

	

		buttonColor[l].addEventListener("click",function(){

			var clickColor=this.style.background;
			console.log(clickColor);
			if(clickColor===rightColor){
					addtext.textContent="Congratulations!!!!!";
					NewGame.textContent="Play Again";
					for(var i=0;i<NoOfButton;i++){
						buttonColor[i].style.background=rightColor;
					}
					document.querySelector(".head").style.background=rightColor;
			}
			else{
				addtext.textContent="Try Again....";
				this.style.background="#2F4F4F";
			}
	
		});
}

		NewGame.addEventListener("click",function(){
			document.location.reload(true);
		});



function createColor(NoButton){
var select=Math.floor((Math.random() * NoButton));
	var randNo=new Array();
	for(var j=0;j<NoButton;j++){

			for(var i=0;i<3;i++){
					randNo[i]=Math.floor((Math.random() * 255	) );	
			}

		if(j==select){
			
			rightColor="rgb("+(randNo[0]).toString(10)+", "+(randNo[1]).toString(10)+", "+(randNo[2]).toString(10)+")" ;
			buttonColor[select].style.background="#"+(randNo[0]).toString(16)+(randNo[1]).toString(16)+(randNo[2]).toString(16);	
				for(var p=0;p<3;p++){												
					colorNumber[p].textContent=randNo[p];
				}		
		}else{
			buttonColor[j].style.background="#"+(randNo[0]).toString(16)+(randNo[1]).toString(16)+(randNo[2]).toString(16);
			console.log(buttonColor[j].style.background);
		}

	}

}








