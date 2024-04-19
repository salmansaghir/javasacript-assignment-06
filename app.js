// JavaScript Assignment 21-15
// String Methods
//Q1
// var firstName=prompt("Enter first name")
// var lastName=prompt("Enter last name")
// var fullName=firstName+' '+ lastName
// document.write("Name is "+fullName)

//Q2
// var mobile=prompt('Enter the mobile name')
// var check=[mobile.length]
// document.write('My favorite phone is: ' + mobile + '<br>')
// document.write('Length of string: ' + check)

//Q3
// var str ='Pakistan'
// var check =str.indexOf('n')
// document.write('String: ' + str + '<br>')
// document.write('Index of "n": ' + check)

//Q4
// var str = 'Hello World'
// var check = str.lastIndexOf('l')
// document.write('String: '+ str + '<br>')
// document.write('Last index of "l": '+check) 

//Q5
// var str = 'Pakistani'
// var check = str[3]
// document.write('String: ' + str +'<br>')
// document.write('Character at index 3: ' + check)

//Q6
// var firstName= prompt('Enter the first name')
// var secondName= prompt('Enter the last name')
// var conct= firstName.concat(" ",secondName)
// document.write(conct)

//Q7
// var city='Hydrabad'
// var chang=city.replace('Hydrabad','Islamabad')
// document.write("City: "+ city+'<br>')
// document.write("After Replacement: "+chang)

//Q8
// var msg="Ali and Sami are best friends. They play cricket and football together"
// var rep=msg.replaceAll('and','&')
// document.write(msg+'<br>')
// document.write('After Replaceing "and" to "&" <br>')
// document.write(rep)

//Q9
// var value="472"
// var convert=Number(value)
// document.write("Value: "+ value + "<br>Type: "+ typeof(value)+"<br>")
// document.write("value: "+ convert+"<br>Type: "+typeof(convert))

//Q10
// var userInput=prompt("Enter any word")
// var convert=userInput.toUpperCase()
// document.write("User Input: "+userInput+"<br>")
// document.write("Upper case: "+convert)

//Q11 (Title case)
// var userInput=prompt("Enter any word")
// var firstLetter=userInput.slice(0,1).toUpperCase()
// var endLetter=userInput.slice(1).toLowerCase()
// var convert=firstLetter+endLetter
// document.write(`User Input: ${userInput} <br> Title case: ${convert}`)

//Q12
// var num=35.36
// var convert=num.toString().replace(".","")
// document.write(`Number: ${num} <br> Result: ${convert} `)

//Q13
// var userInput=prompt("Enter user name")
// //var special=['@','.',',','!']
// //match= false
// // for(var i=0; i<special.length; i++){
//     if (userInput.charCodeAt() >= 33 && userInput.charCodeAt() <= 64){
//         //match=true
//         alert('Enter a valid user name')
    
//     }

// //if(!match){
// else{    document.write(`User name accepted: ${userInput}`)
// }

//Q14
// var userInput=prompt("Bakery items")
// var items=['Cake','Apple pie','Cookie','Chips','Patties']
// var firstName=userInput.slice(0,1).toUpperCase()
// var lastName=userInput.slice(1).toLowerCase()
// var result=firstName+lastName
// var match=false
// for(var i=0; i<items.length; i++ ){
//     if(result == items[i]){
//         match= true
//         alert("Item Available on index: "+items.indexOf(result))
//         break
//     }
// }
// if(!match){
//     alert("Item not in list")
// }

//Q15
// var userInput=prompt("Enter the user name")
// if(userInput.length<6){
//     alert("the password should be 6 character.")
// }
// else if(!isNaN(userInput.charAt(0))){
//     alert("Invalid password. Password cannot start with number.")
// }
// else if(!/[a-zA-Z]/.test(userInput)){
//     alert("Invalid password. Password must contain at least one alphabet.")
// }
// else if(!/\d/.test(userInput)){
//     alert("Invalid password. Password must contain at least one number.")

// }
// else{
//     alert("password accepted")
// }
//Q16
// var university="University of Karachi"
// for(var i=0; i<university.length; i++){
//     document.write(university[i]+"<br>")
// }

//Q17
// var userInput=prompt("Enter the word")
// var lastCharacter=userInput[userInput.length - 1]
// document.write("User Input: "+userInput+"<br>")
// document.write("The last character of input: "+lastCharacter)
//Q18(incomplete)
// var str="The quick brown fox jumps over the lazy dog"
// var check=str.indexOf()
// document.write(check)


//JavaScript Assignment-06
//Math Methods

//Q1
//var userInput=prompt("Enter the number")
//var convert=Math.round(userInput)
//var flor=Math.floor(userInput)
//var ceil=Math.ceil(userInput)
//document.write(`User input: ${userInput} <br> floor: ${convert} <br> floor: ${flor} <br> Ceil: ${ceil}`)

//Q2
// var userInput=prompt("Enter the number")
// var convert=Math.round(userInput)
// var flor=Math.floor(userInput)
// var ceil=Math.ceil(userInput)
// document.write(`User input: ${userInput} <br> Round: ${convert} <br> Floor: ${flor} <br> Ceil: ${ceil}`)

//Q3
// var num=+prompt('Enter absolute number')
// var check=Math.floor(num)
// if(check < 0){
//     document.write(-check)

// }else{
//     document.write(check)
// }

//Q4 dice game
// Generate a random number between 1 and 6
// var diceValue= Math.floor(Math.random()*6)+1
// document.write(`Random dice value= ${diceValue}<br>`)
// var diceValue= Math.floor(Math.random()*6)+1
// document.write(`Random dice value= ${diceValue}`)

//Q5(counting)
// var head=prompt("Enter the 1st player name")
// var tail=prompt("Enter the 2nd player name")
// var toss=Math.random()*2
// var convert=Math.floor(toss)
// if (convert==0){
// document.write(head+" win")
// }else{
//     document.write(tail+" win")
// }

//Q6
// var randomNum=Math.random()*100
// var convert=Math.floor(randomNum)
// document.write("Random Number B/W 1 to 100: " +convert)

//Q7
//  // Prompt the user for their weight
//  var weightInput = prompt("Enter your weight:");
      
//  // Remove any non-numeric characters and convert to lowercase
//  var weightInKgs = parseFloat(weightInput.replace(/[^\d.]/g, "").toLowerCase());
//  document.write("The weight of user is "+weightInKgs+" Kilograms")

//Q8
// var userInput=prompt("enter the number")
// var ranDom=Math.random()*10
// var conct=Math.floor(ranDom)
// if(userInput==conct){
//     document.write("congratulation")
// }
// else
// {
// document.write("try again")
// }

//javaScript Assignment-31to34
//Date Methods

//Q1
// var date= new Date()
// document.write(date)

//Q2
// var month=['jan','feb','mar','apr','may','jun','july','aug','sep','oct','nov','dec']
// var currentMonth= new Date().getMonth()
// document.write("Current month: "+month[currentMonth])

//Q3
// var today=['sun','mon','tus','wed','thir','fri','sat']
// var currentDay= new Date().getDay()
// document.write("Today is "+today[currentDay])

//Q4
//  var today=['sun','mon','tus','wed','thur','fri','sat']
//  var currentDay= new Date().getDay()
//  var abc = today[currentDay]
// if(abc=='sun' && abc == 'sat'){

//  document.write("Its Funday")
// }
// else{
//     document.write("Its working day :(")
// }

//Q5
// var days= new Date().getDate()
// console.log(days)
// if(days<=15){
//     document.write("First fifteen days of the month")
// }
// else{
//     document.write("last days of the month")
// }

//Q6
// var date =  new Date("15 sep,1989");
// var string = date.toString();
// for (i = 0; i < string.length; i++) {
//   if (
//     string.slice(i, i + "Pakistan Standard Time".length) ===
//     "Pakistan Standard Time"
//   ) {
//     neww = string.replace("Pakistan Standard Time", "PKT");
//     // document.write(neww + "<br>");
//   }
// }
// var minutes = date.getTime();
// minutes = minutes.toString()
// minutes = Math.floor(minutes);
// document.write(`Elapsed miliseconds since ${new Date(length).toString().slice(0,15)}: ${minutes}  <br>`);
// var ms = date.getTime();
// //  ms = ms.toString()
//  ms = Math.floor(ms) / 1000 / 60
//  document.write(`Elapsed minutes since ${new Date(length).toString().slice(0,15)}: ${ms} `);

//(my)
//  var date= new Date("15 sep,1989")
//  var min= date.getTime()
//  min=Math.floor(min)
//  var ms=date.getTime()
//  ms=Math.floor(ms)/1000/60
// document.write(`Current Date: ${new Date()} <br> Elapsed milliseconds since ${new Date(length).toString().slice(0,15)}: ${ms} <br> Elapsed minutes since ${new Date(length).toString().slice(0,15)}: ${min}` )

//Q7
// var currentDate= new Date();
// var currentHours=currentDate.getHours()
// if (currentHours<12){
//     document.write("Its AM")
// }
// else{
//     document.write("Its PM")
// }

//Q8
// var lastDate= new Date("31 dec,2020")
// document.write("Later date: "+lastDate)

//Q9
// var ramadanStartDate= new Date("30 mar,2025");//assuming date of first ramadan starting
// var currentDate= new Date();
// var timeDifference=ramadanStartDate.getTime() - currentDate.getTime();
// var daysPassed=Math.floor(timeDifference/(1000 * 60 * 60 * 24) );
// document.write("Number of days passed since 1st Ramadan: "+daysPassed);

//Q10
// var beginningDate= new Date("1 jan,2015");
// var currentDate= new Date("19 apr,2024");
// var timeDifference= currentDate.getTime() - beginningDate.getTime();
// var secondsElapse=Math.floor(timeDifference/1000);
// document.write("On Reference date "+currentDate+","+ secondsElapse+" second has passed since beginning of 2015")

//Q11
// var currentDate= new Date();
// var date= new Date();
// var hour= date.getHours();
// date.setHours(date.getHours()-1);
// document.write("Current Date: "+ currentDate+"<br> 1 hour ago, it was "+date)

//Q12
// var currentDate= new Date();
// var date= new Date();
// var hour= date.getFullYear();
// date.setFullYear(date.getFullYear()-100);
//  document.write("Current Date: "+ currentDate+"<br> 100 years back, it was "+date)

//Q13
// var age = prompt("enter your date of birth")
// var currentDate = new Date().getTime()
// var dateOfBirth = new Date(age).getTime()
// var minus = currentDate - dateOfBirth
// var conver = Math.floor(minus / (1000 * 60 * 60 * 24 * 365))
// document.write(conver)

//Q14
// var customerName = prompt("Enter Your Name");
// document.write(`Customer Name: ${customerName}<br>`)
// var monthNames = ["january","february","march","april","may","june","july","august","september","november","december"];
// var month = new Date().getMonth();
// monthNames= monthNames[month];
// document.write(`Month: ${monthNames} <br>`)
// var units = +prompt("how many units you consumed");
// document.write(`Number of Units: ${units} <br>`)
// var unitCharges = 16
// document.write(`Charges of Units ${unitCharges} <br>`)
// var netAmountWdd = units * unitCharges;
// document.write(`Net Amount Payable (Within Due Date) ${netAmountWdd} <br>`)
// var latePayment = 350
// document.write(`Late Payment Surcharge ${latePayment} <br>`);
// var grossAmount = netAmountWdd + latePayment
// document.write(`Gross Amount Payable(After Due Date): ${grossAmount}`)

