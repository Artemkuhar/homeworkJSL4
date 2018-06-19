
//Task1 --------------------------------------------

/*var task1 = "I&am$the$Best$Front$end&developer$ever";
var taskRepl = task1.replace(/[^A-Za-zА-Яа-яЁё]/g, "$");

var arr1 = taskRepl.split('$');
console.log(arr1);

//Task2 --------------------------------------------

arr1.unshift('<h2>');
var str1 = arr1.join('</h2><h2>');
document.write(str1);*/

//Task3 --------------------------------------------

/*var months = [
				'December', 
				'January', 
				'February', 
				'March', 
				'April', 
				'May', 
				'June', 
				'July', 
				'August', 
				'September', 
				'October', 
				'November'
			];


var Winter = months.splice(0,3);
var Spring = months.splice(0,3);
var Summer = months.splice(0,3);
var Autumn = months.splice(0,3);
console.log(Winter);
console.log(Spring);
console.log(Summer);
console.log(Autumn);
var yearSeasons = [];
yearSeasons.unshift(Winter, Spring, Summer, Autumn);
console.log(yearSeasons);

console.log(months);

var promResult = prompt('Enter month');
if (promResult == yearSeasons[0][0] || promResult == yearSeasons[0][1] || promResult == yearSeasons[0][2]){
	alert('Winter');
}else if (promResult == yearSeasons[1][0] || promResult == yearSeasons[1][1] || promResult == yearSeasons[1][2]){
	alert('Spring');
}else if (promResult == yearSeasons[2][0] || promResult == yearSeasons[2][1] || promResult == yearSeasons[2][2]){
	alert('Summer');
}else if (promResult == yearSeasons[3][0] || promResult == yearSeasons[3][1] || promResult == yearSeasons[3][2]){
	alert('Autumn');
}else{
	alert('not corect Season of year');
}*/


//Task4---------------------------------------------
/*var task4Copy = [];
var task4 = [1,2,3,4,5,6,7,8,9];
for (i = 0; i < task4.length; i++){
	copy.push(task4[i]);
}
console.log(task4Copy);
*/


//Task5 --------------------------------------------

/*task5 = [2,22,654,652,578, 12354,1,2,6,5,4,344,665,225,1245,124];
var task5Filtered = task5.filter(function(elem, i, arr){
	return i > 10;
});
console.log(task5);
console.log(task5Filtered);
*/

//Task6 --------------------------------------------


/*var result1,result2,result3;
result1 = 0;
var task6 = [1,2,3,4,5,6,7,8,9];
for(i = 0; i < task6.length; i++){
	result1 = result1 + task6[i];
}

console.log(result1);


arr3 = task6;
result2 = arr3.map(function(elem, i, arr){
	return elem*2;
});
console.log(result2);


function newArr (Arr, randNum){
	var arr4 = Arr;
	var result3 =[];
	for (i = 0; i < arr4.length; i++){
		result3.push(arr4[i] * randNum);
	}
	console.log(result3);
}
newArr(task6, 3);*/




























