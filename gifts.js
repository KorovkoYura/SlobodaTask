	/*Example:
	gifts(10,25,15,40);*/

function gifts(x, y, z , w){

	var finalResult = 0; //Creation the variable for storing for result
  
	if(	!Number.isInteger(x) || !Number.isInteger(y) ||
		!Number.isInteger(z) || !Number.isInteger(w)   ) //Check arguments x, y,z and w for integers
		{			
			return alert("Please enter the four integers");
		}	
	else if ((x <= 0) || (y <= 0) || (z <= 0) || (w <= 0) ) //Check arguments x, y, z and w for value greater than zero
		{
			return alert("Please enter the four integers greater than zero")
		} 
			
	if (w % x == 0 ) finalResult++;

	if (w % y == 0 ) finalResult++;

	if (w % z == 0 ) finalResult++;

	if ( (w % (x + y + z)) == 0 ) finalResult++;

	var firstResult = x;
	var secondResult = y;
	var initialFirst = x;
	var initialSecond = y;

	while(true){

		firstResult += y; //Increasing the value of result by adding y
		secondResult += x; //Increasing the value of result by adding x


		if (firstResult == w){ //Checking the result
			finalResult++; //Increased counter options
			initialFirst += x; //Increasing of initial value
			firstResult = initialFirst; //Assigning to result of the initial value
			continue; //Transition to the next iteration
		}

		if (secondResult == w){ //Checking the result
			finalResult++; //Increased counter options
			initialSecond += y; //Increasing of initial value
			secondResult = initialSecond; //Assigning to result of the initial value
			continue; //Transition to the next iteration
		}

		if (firstResult > w && secondResult > w) break; //Cycle interruption
	}

	firstResult = x;
	secondResult = z;
	initialFirst = x;
	initialSecond = z;

	while(true){

		firstResult += z; //Increasing the value of result by adding z
		secondResult += x; //Increasing the value of result by adding x


		if (firstResult == w){ //Checking the result
			finalResult++; //Increased counter options
			initialFirst += x; //Increasing of initial value
			firstResult = initialFirst; //Assigning to result of the initial value
			continue; //Transition to the next iteration
		}

		if (secondResult == w){ //Checking the result
			finalResult++; //Increased counter options
			initialSecond += z; //Increasing of initial value
			secondResult = initialSecond; //Assigning to result of the initial value
			continue; //Transition to the next iteration
		}

		if (firstResult > w && secondResult > w) break; //Cycle interruption

	}

	firstResult = y;
	secondResult = z;
	initialFirst = y;
	initialSecond = z;

	while(true){

		firstResult += z;
		secondResult += y;


		if (firstResult == w){
			finalResult++;
			initialFirst += y;
			firstResult = initialFirst;
			continue;
		}

		if (secondResult == w){
			finalResult++;
			initialSecond += z;
			secondResult += initialSecond;
			continue;
		}

		if (firstResult > w && secondResult > w) break;

	}

	firstResult = x + y;
	initialFirst = firstResult;
	secondResult = firstResult;
	initialSecond = secondResult;
	var thirdResult = firstResult;
	var initialThird = thirdResult;

	while(true){

		firstResult += z;
		secondResult += z;
		thirdResult += z;

		if (firstResult == w){
			finalResult++;
			initialFirst += x;
			firstResult = initialFirst;
			continue;
		}

		if (secondResult == w){
			finalResult++;
			initialSecond += y;
			secondResult = initialSecond;
			continue;
		}

		if(thirdResult == w){
			finalResult++;
			initialThird = initialThird + x + y;
			thirdResult = initialThird;
			continue;
		}

		if(firstResult > w && secondResult > w && thirdResult > w) break;
		
	}

	firstResult = x + z;
	initialFirst = firstResult;
	secondResult = firstResult;
	initialSecond = secondResult;
	thirdResult = firstResult;
	initialThird = thirdResult;

	while(true){

		firstResult += y;
		secondResult += y;
		thirdResult += y;

		if (firstResult == w){
			finalResult++;
			initialFirst += x;
			firstResult = initialFirst;
			continue;
		}

		if (secondResult == w){
			finalResult++;
			initialSecond += y;
			secondResult = initialSecond;
			continue;
		}

		if (thirdResult == w){
			finalResult++;
			initialThird = initialThird + x + z;
			thirdResult = initialThird;
			continue;
		}

		if(firstResult > w && secondResult > w && thirdResult > w) break;	
	}

	firstResult = y + z;
	initialFirst = firstResult;
	secondResult = firstResult;
	initialSecond = secondResult;
	thirdResult = firstResult;
	initialThird = thirdResult;

	while(true){

		firstResult += x;
		secondResult += x;
		thirdResult += x;

		if (firstResult == w){
			finalResult++;
			initialFirst += y;
			firstResult = initialFirst;
			continue;
		}

		if (secondResult == w){
			finalResult++;
			initialSecond += z;
			secondResult = initialSecond;
			continue;
		}

		if (thirdResult == w){
			finalResult++;
			initialThird = initialThird + y + z;
			thirdResult = initialThird;
			continue;
		}

		if(firstResult > w && secondResult > w && thirdResult > w) break;
		
	}
	
		console.log("Result: " + finalResult);

}