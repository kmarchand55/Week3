// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //alert(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  var upperCase = confirm("Do you want to include UPPER case letters?");
  var lowerCase = confirm("Do you want to include lower case letters?");
  var specChars = confirm("Do you want to include special characters");
  var numbers = confirm("Do you want to include numbers?")
  var j=0;
  var myChar = [] 
  var myPassword = []
  var finalPassword = ''
  var randomNumber = 0
  var counter = 0;
  var noIterations=prompt ("How many characters should it be?");
 
  //Validate data, iterations must be numeric and > 8 and < 228
  if(isNaN(noIterations) || noIterations < 8 || noIterations > 128){
  
    alert("Invalid input")
    return("Invalid input")
  }
  else {
  
    //Begin processing
    noIterations=parseInt(noIterations)
    
 //Loads the array with upper case letters using the ASCII code
if (upperCase){
  for (i=65; i < 91; i++){
    myChar[j] = String.fromCharCode(i);
    myPassword.push(myChar[j]);
    j++;
    counter++}
}
 
//Loads the array with lower case letters using the ASCII code

j=0

if (lowerCase){    
  for (i=97; i < 123; i++){
      myChar[j] = String.fromCharCode(i);
      myPassword.push(myChar[j]);
      console.log(myPassword)
        j++;
      counter++
    }
  }

  j=0

    //Loads the array with special characters usgin the ascii code
      if (specChars){   
      for (i=35; i < 38; i++){
          myChar[j] = String.fromCharCode(i);
          myPassword.push(myChar[j]);
          counter++
          j++
        }
      }
console.log (numbers)
      j=0
      if (numbers){   
        for (i=48; i < 57; i++){
          //console.log(i)
          //console.log(j)  
          myChar[j] = String.fromCharCode(i);
            console.log(myChar[j])
            myPassword.push(myChar[j]);
            j++
            counter++
          }
        }


          

var passChar = ''
var finalPassword=''

//Generate final password
if (counter > 0){
      for (i=0; i < noIterations; i++){
           randomNumber=Math.floor(Math.random()* counter);                       
           passChar=myPassword[randomNumber]             
           finalPassword = finalPassword + passChar
                   
  }
   

  }
  else {
    finalPassword="Invalid Data Entered"
  }
}
return(finalPassword)
}

