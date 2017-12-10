 var colors = createRandomColors(6);
 var squares = document.getElementsByClassName("squares")
 var displayText = document.getElementById("displayText");
 var topsec = document.getElementById("topsec");
 var colorDisplay = document.getElementById("colorDisplay");
 
 var pickedColor = colors[pickColor()];

 var newButton = document.getElementById("newButton");
 var easyButton = document.getElementById("easyButton");
 var hardButton = document.getElementById("hardButton");
 
 hardButton.classList.add("selected");

 hardButton.addEventListener("click",function(){

          hardButton.classList.add("selected");
          easyButton.classList.remove("selected");
           colors = createRandomColors(6);
          pickedColor = colors[pickColor()];
          for (var i=0;i<6;i++)
          {
          	squares[i].style.backgroundColor = colors[i];
          	squares[i].style.display = "block";

          }
         displayText.innerHTML = " ";
 });

 easyButton.addEventListener("click",function(){
       colors = createRandomColors(3);
       pickedColor = colors[pickColor()];

       easyButton.classList.add("selected");
       hardButton.classList.remove("selected");
       for(var i=0;i<6;i++)
       {
       	     if(i<=2){
       	     	squares[i].style.backgroundColor = colors[i];
             }
             else{
             	squares[i].style.display = "none";
             }
       }
       displayText.innerHTML = " ";
 });

 newButton.addEventListener("click",function(){
 	colors = createRandomColors(colors.length);
 	pickedColor = colors[pickColor()];
    
    for(var i =0 ; i< squares.length ; i++)
 	 { squares[i].style.backgroundColor = colors[i];
 	 }

 	 this.innerHTML = "NEW COLORS";
 	 displayText.innerHTML = " ";
 	 topsec.style.backgroundColor = "#00ccff";
});

 
 for (var i = 0 ; i <= squares.length ; i++)
 {
 	squares[i].style.backgroundColor = colors[i];
 	squares[i].addEventListener("click",function(){
 		var clickedColor = this.style.backgroundColor;
        if( clickedColor===pickedColor){
                displayText.innerHTML = "RIGHT GUESS";
                topsec.style.backgroundColor = clickedColor;
                changeColors(clickedColor);
                newButton.innerHTML = "play again ?"
        }
        else{
        	displayText.innerHTML = "TRY AGAIN";
        	this.style.backgroundColor = "black";
        }

 	});
 }

 function changeColors(color){
 	for (var p=0; p<squares.length; p++)
 	{
 		squares[p].style.backgroundColor = color; 	}
 }

 function pickColor(){
 	var t = Math.floor(Math.random()*colors.length );
 	colorDisplay.innerHTML = colors[t];
 	return t;
 }

 function createRandomColors(num){
 	var arr = [];
 	for(var i = 0 ;i < num ;i++)
 	{
 		arr.push(randomColor())
 	}
 	return arr;
 }

 function randomColor(){
 	 var r = Math.floor(Math.random()*256);
 	 var g = Math.floor(Math.random()*256);
 	 var b = Math.floor(Math.random()*256);

 	 return "rgb("+r+", "+g+", "+b+")";
 }


