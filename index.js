// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
a = string
b = object


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(let i=0; i<a.length; i++){
	a[i]*=2;
}
console.log(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(' '));
console.log(colors.join('+'));
console.log(colors.join(','));


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
var temp;
for(let i = 0; i<a.length; i++){
	for( let j=i+1; j<a.length;j++){
  		if(a[i] < a[j]){
      	temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
  }
}
console.log(a);


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var ktr = 1;
var temp = 0;
var elem;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 temp++;
                if (ktr<temp)
                {
                  ktr=temp; 
                  elem = arr1[i];
                }
        }
        temp=0;
}
console.log(elem +" is " + ktr) ;