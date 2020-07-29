const calculatorScreen=document.querySelector('.calculator-screen')
const updateScreen=(number)=>{
	calculatorScreen.value=number;
}

let prevNumber='';
let calculationOperator='';
let currentNumber=0;

const numbers=document.querySelectorAll(".number");
numbers.forEach((number)=>{
	number.addEventListener("click",(event)=>{
	inputNumber(event.target.value);	
	updateScreen(currentNumber);
	})
})

const inputNumber=(number)=>{
	if (currentNumber===0) {
	currentNumber=number;	
	}else{
	currentNumber+=number;
	}
}

const operators=document.querySelectorAll(".operator");
operators.forEach((operator)=>{
	operator.addEventListener("click",(event)=>{
	inputOperator(event.target.value);	
	//updateScreen(calculationOperator);
	})
})

const inputOperator=(operator)=>{
	if (calculationOperator==='') {
	prevNumber=currentNumber;	
	}
	calculationOperator=operator;
	currentNumber=0;
}

const allclears=document.querySelector(".all-clear");
allclears.addEventListener("click",(event)=>{
	clearAll();
	updateScreen(currentNumber);	
	})

const clearAll =()=>{
	currentNumber=0;
	prevNumber='';
	calculationOperator='';
}

const calculate=()=>{		
		let result ='';
		switch (calculationOperator){
			case '+':
			result =parseFloat(prevNumber)+parseFloat(currentNumber);
			break;
			case '-':
			result =prevNumber-currentNumber;
			break;
			case '/':
			result =prevNumber/currentNumber;
			break;
			case '*':
			result =prevNumber*currentNumber;
			break;
			default:
			return;
		}
		currentNumber=result;
		calculationOperator='';
		
	}

const equalsigns=document.querySelector(".equal-sign");
equalsigns.addEventListener("click",(event)=>{
	calculate();
	updateScreen(currentNumber);
})

const decimals=document.querySelector(".decimal");
decimals.addEventListener("click",(event)=>{
	inputDecimal(event.target.value);
	updateScreen(currentNumber);	
	})

inputDecimal=(dot)=>{
	if (currentNumber.includes('.')) {
		return;
	}
	currentNumber+=dot;
}
