//defeats http://typing-speed-test.aoeu.eu/
function getText() {
	var spans = document.getElementsByTagName("span");
	for(var i = 0;i < spans.length;i++) {
		//console.log(spans[i].outerHTML); 
		if ((spans[i].outerHTML + "").indexOf("currentword") != -1) { 
			//console.log(spans[i].innerText); 
			var input = document.getElementById("input"); 
			console.log("inner text " + spans[i].innerText);
			input.value = spans[i].innerText;
		}
	}
}

setInterval(getText, 200); //had to change to 200 -> 272 wpm