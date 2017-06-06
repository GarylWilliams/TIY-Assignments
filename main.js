var firstNumber,secondNumber,result; 

firstNumber = 0; 
secondNumber = 1; 
result = secondNumber;
for (var i=1; i<100; i++)
{ 
  console.log(result); 
  result = firstNumber + secondNumber;  
   firstNumber = secondNumber; 
   secondNumber = result; 
  if (result > 4000000) 
  {
    break; 
  }
  
}