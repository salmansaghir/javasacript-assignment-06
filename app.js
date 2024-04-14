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

//Q13 (not work)
// var userInput=prompt("Enter user name")
// var special=['@','.',',','!']
// match= false
// for(var i=0; i<special.length; i++){
//     if (userInput === special[i] ){
//         match=true
//         alert('Enter a valid user name')
//     break
//     }
// }
// if(!match){
//     document.write(`User name accepted: ${userInput}`)
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

//Q15 (not understand)

//Q16
// var university="University of Karachi"
// for(var i=0; i<university.length; i++){
//     document.write(university[i]+"<br>")
// }

//Q17 (not understand)
//Q18 (not understand)
var str="The quick brown fox jumps over the lazy dog"


