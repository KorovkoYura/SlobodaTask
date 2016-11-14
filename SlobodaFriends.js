	/*Example:
	friends(5,2,"0101010000000010100000000");*/

function friends(N, S, Matrix){

	if ( !Number.isInteger(N)  || !Number.isInteger(S)) //Check arguments N and S for integers
		{	
			return alert("The first two arguments must be integer");
		}
		else if ((N <= 0) || (S <= 0)) //Check arguments N and S for value greater than zero
		{
			return alert("The first two arguments must be greater than zero");
		} 
		else if (N < S) //Check the condition that S less than N 
		{
			return alert("The first argument must be greater than second");
		}

	var array = []; //Creation of empty array
	array = Matrix.toString().split(""); //Splitting a string into array
	var mas = [];//Creation of empty array
	var count = 0;

	for (var i = 0; i < N; i++){				
		mas[i] = [];			//Creation of two-dimensional array
	} 

	for(var i = 0, k = 0; i < N; ++i){
   		for(var j = 0; j < N; ++j){
     		mas[i][j] = Number(array[k++]); //Filling a two-dimensional array
   		}}
   		
   	for (i = 0; i < N; i++) {
    	for (j = 0; j < N; j++) {
        	if (mas[i][j]) { //Checking a two-dimensional array for value 1 
                for (k = 0; k < N; k++) {
                    if (mas[j][k])
                        mas[i][k] = 1; //Transitive friendship
                }
            }
        }
    }

     for (i = 0; i < N; ++i) {
        if (mas[S - 1][i]) //Counting the number of friends
            count++;
    }
		console.log("Result: " + count);

}