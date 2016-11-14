	/*Example:
	xerox(5,1,2);*/
	
function xerox(N, x, y) {
  
	if(!Number.isInteger(N)  || !Number.isInteger(x) || 
		!Number.isInteger(y)) //Check arguments N, x and y for integers
		{	
			return alert("Please enter the four integers");
		}	
	else if ((N <= 0) || (x <= 0) || (y <= 0) ) //Check arguments N, x and y for value greater than zero
		{
			return alert("Please enter the four integers greater than zero");
		} 

	var firstXerox = x;
	var secondXerox = y; 
	var copies = 0; //Creation the variable for storing number of copies
	var seconds = 0; //Creation the variable for storing number of seconds
	var delayX = 0; //Creation the variable for storing value of delay first xerox
	var delayY = 0; //Creation the variable for storing value of delay second xerox
	
	if(x <= y)
		delayY = x; //The assignment for variable value of delay first xerox
	else
		delayX = y; //The assignment for variable value of delay second xerox

	while (true){
		
		seconds++; //Increasing of time counter

		console.log("Current time: "+ seconds + " sec");

		if ((firstXerox + delayX) == seconds){ //Checking the time, when copy will be ready

			copies++; //Increasing of copies counter
			console.log("Copies from first Xerox: " + copies);
			firstXerox += x; //Set the time for the next copy from first xerox
		}

		if ((secondXerox + delayY) == seconds){ //Checking the time, when copy will be ready

			copies++; //Increasing of copies counter
			console.log("Copies from second Xerox: " + copies);
			secondXerox += y; //Set the time for the next copy from second xerox
		}

		if (copies >= N) break; //Cycle interruption
	}
		return console.log("Result: " + seconds);
}