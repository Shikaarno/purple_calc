let input = document.querySelector(".calc__input-result");
let result = document.querySelector(".calc__input-expression");
let actions = document.querySelectorAll("#action");
let numbers = document.querySelectorAll("#number");
let equal = document.querySelector(".equal");

for(number of numbers){
	number.onclick = function(evt){
		input.value += evt.target.textContent;
	}		
}

for(let action of actions){
	action.onclick = function(evt){
		let setAction = evt.target.dataset.action;
		switch(setAction){
			case "C":

			case "=":
				
			case "+":

			case "-":

			case "*":
				
			case "/":
				
			case "BS":
				
			case ".":
				
			case "%":

			case "()":	
				actionCalc(input, setAction);
		}	
	}
}


	
function actionCalc(input, setAction){

	if(setAction == "C"){
		var skob = document.querySelector(".skob");
		skob.classList.add("left");
		result.value = "";
		input.value = "";
		return;
	}

	if(setAction == "BS"){
		input.value = input.value.slice(0, -1)
		return;
	}

	if(setAction == "="){
		result.value = result.value + input.value;
		result.value = eval(result.value);
		if(result.value != Infinity){	
			input.value = result.value;
			result.value = "";		
		} else {
			result.value = "";
			input.value = "Error!";
		}		
		return;
	}

	if(setAction == "."){
		input.value += setAction;
		return;
	}

	if(setAction == "%"){

		var checkAction = result.value[result.value.length - 2];
		var proc = (input.value * 0.01) * result.value.slice(0, -3);

		switch (checkAction){
			case "*":
				result.value = eval(Number(result.value.slice(0, -3)) * proc);
				input.value = result.value;
				result.value = "";
				break;
			case "-":
				result.value = eval(Number(result.value.slice(0, -3)) - proc);
				input.value = result.value;
				result.value = "";
				break;
			case "+":
				result.value = eval(Number(result.value.slice(0, -3)) + proc);
				input.value = result.value;
				result.value = "";
				break;
			case "/":
				result.value = eval(Number(result.value.slice(0, -3)) / proc);
				input.value = result.value;
				result.value = "";
				break;
		}				
		return;
	}
	
	if(setAction == "()"){
		
		var skob = document.querySelector(".skob");

		if(skob.classList.contains("left")){
			result.value = result.value + input.value + "(";
			skob.classList.toggle("left");
			return;
		} else {
			result.value = result.value + input.value + ")";
			input.value = "";
			skob.classList.toggle("left");
			return;
		}	
		return;
	}
	

	result.value = result.value + input.value + " " + setAction + " ";
	input.value = "";
}