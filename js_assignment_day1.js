// question 1

console.log(1+ '2'+'2');
//output : '122'
//javascript work from left to right that concat all operand

console.log(1+ +'2'+'2');
//output : '32'
//first two operand added and third will concated. Because first +'2' is considered as integer 2.

console.log(1+ -'1'+'2');
//output: '02'
//second operand subscracted from first and third will concated. Because second -'1' is considered as integer -1.


console.log(+'1'+ '1'+'2');
// output: '112'
//all operand concated

console.log('A'-'B'+'2');
//output: 'NaN2'
// Substraction of first two operand is NaN and concat with third. because can't do subscration between letter.

console.log('A'-"B"+2);
//Nan
// Substraction of first two operand is NaN ,because can't do subscration between letter and in last we can't do addition between Nan and integer.




//question2

var marks=90;
if (marks>90){
	console.log("AA");
}
else if(marks>80 && marks<=90){
	console.log('AB');
}
else if(marks>70 && marks<=80){
	console.log('BB');
}
else if(marks>60 && marks<=70){
	console.log('BC');
}
else if(marks>50 && marks<=60){
	console.log('CC');
}
else if(marks>40 && marks<=50){
	console.log('CD');
}
else if(marks>30 && marks<=40){
	console.log('DD');
}
else if (marks<=30){
	console.log('FF');
}

