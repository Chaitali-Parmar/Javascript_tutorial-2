// Javascript day11
// Javascript string 
// There are 2 ways to create string in javascript
// 1.String Literal-created using double quotes.
// String can use '',"",``.
document.write("<b>String: </b><br/>");
var a = 'Chaitali';
document.write(a + ' Using Single quote <br/>');
var a = "Chaitali";
document.write(a + " Using double quote <br/>");
var a = `Chaitali`;
document.write(a + ` Using Backticks <br/> `);
// 2.By string object(using new keyword)
var a = new String("Hello World");
document.write(a + "<br/>");
// Points to remember
// must be assigned to a variable using = operator.
// concat using + operator
// string can be treated as character array

// string methods
// 1.charat-used to find out a char value present at the specified index in a string.
document.write("String Methods: <br/>");
document.write("1.charAt <br/>");
var a = "Hello Chaki";
document.write(a.charAt(10, "<br/>"));
// 2.concat-combines two or more strings and returns a new string.
document.write("</br> 2.concat")
var a = "How";
var b = " Are";
var c = " You";
document.write("</br>", a.concat(c + "<br/>"));
// 3.indexof-search the position of a perticular character.Case sensitive.if element not present in string,it returns -1.
document.write("3.indexof <br/>");
var a = "Chaitali";
document.write(a.indexOf('n <br/>'));
// 4.lastindexof-search the position of a perticular character.similar to indexof with a difference that it start searching an element from the last position of the string.
document.write("<br/>4.lastindexof <br/>");
var a = "Chaitali Parmar";
document.write(a.lastIndexOf('a'));
// 5.match-match the string against a regular expression.
document.write("<br/>5.match<br/>");
var a = "Chaitali";
document.write(a.match("chaitali") + "<br/>");
document.write(a.match("Chaitali") + "<br/>");
// 6.replace-replace a part of a given string with a new substring.
document.write("6.replace <br/>");
var a = "Chaktali";
var b = "parmar";
document.write(a.replace("Chaktali", "Chaitali") + "<br/>");
document.write(b.replace("parmar", "Parmar") + "<br/>");
// 7.search-search the regular expression in the given string.returns -1,if match is not found.case sensitive.
document.write("7.search <br/>");
var a = "Chaitali Parmar";
document.write(a.search("Parmar") + "<br/>");
// 8.slice-fetch the part of the string and returns the new string.required to specify the index number as the start and end parameters to fetch the part of the string.index starts from 0.allows us to pass a negative number as an index.in such case,method starts fetching from the end of the string.it doesn't make any change in the original string.
document.write("8.slice <br/>");
var a = "Chaitali Parmar";
document.write(a.slice(0) + "<br/>");
document.write(a.slice(8, 14) + "<br/>");
document.write(a.slice(-5, -1) + '<br/>');
// 9.split-divides a string into a list of substrings.
document.write("9.split <br/>");
var a = 'Chaitali Parmar';
document.write(a.split(" ") + "<br/>");
// 10.substr-fetch the part of the given string and return the new string.
// string.substr(start,length)
document.write("10.substr <br/>");
var a = "Chaitali Parmar";
document.write(a.substr(1, 5) + "<br/>");
// 11.substring-fetch the string on the basis of provided index and returns the new sub string.works similar to the slice with a difference that it doesn't accepts negative indexes.
// string.substring(start,end)
document.write("11.substring <br/>");
var a = "Chaitali Parmar";
document.write(a.substring(0, 8) + "<br/>");
// 12.toLowercase-used to convert the string into lowercase letter.
document.write("12.toLowercase <br/>");
var a = "CHaItali";
document.write(a.toLowerCase() + "<br/>");
// 12.toUppercase-used to convert the string into uppercase letter.
document.write("13.toUppercase <br/>");
var a = "chAiTali";
document.write(a.toUpperCase() + "<br/><br/>");

// Javascript day11
// javascript math-javascript math object provides several methods to perform mathematical operation.
// 1.abs-returns an absolute value of a given number
document.write("<b>Math functions: </b><br/>");
var a = -12;
var b = 20;
document.write("1.abs <br/>");
document.write("a is " + Math.abs(a) + "<br/>");
document.write("b is " + Math.abs(b) + "<br/>");
// 2.ceil-increases the given number up to the closet integer value and returns it.
document.write('2.ceil <br/>');
document.write(Math.ceil(10.4) + '<br/>');
document.write(Math.ceil(10.9) + '<br/>');
// 3.floor-decreases the given number up to the closet integer value and returns it.
document.write('3.floor <br/>');
document.write(Math.floor(10.2) + '<br/>');
document.write(Math.floor(10.7) + '<br/>');
// 4.max-compares the given numbers and returns the maximum value.
document.write('4.max <br/>');
document.write(Math.max(10, 50, 84, 95, 87) + '<br/>');
// 5.min-compares the given numbers and returns the minimum value.
document.write('5.min <br/>');
document.write(Math.min(5, 1, 4, 80, 65) + '<br/>');
// 6.pow-returns the base to the exponent power.
document.write('6.pow <br/>');
document.write(Math.pow(2, 2) + '<br/>');
document.write(Math.pow(4, 3) + '<br/>');
// 7.random-returns the random number between 0 and 1.
document.write('7.random <br/>');
document.write(Math.random() + "<br/>");
// 8.round-round up the given number up to the closest integer value and returns it.
document.write('8.round <br/>');
document.write(Math.round(10.5) + '<br/>');
document.write(Math.round(10.2) + "<br/>");
// 9.sqrt-returns the square root of a number
document.write('9.sqrt <br/>');
document.write(Math.sqrt(225) + "<br/>");
document.write(Math.sqrt(27) + '<br/>');
// 10.trunc-removes the fractional part of the given number and returns the remaining interger part only.
document.write('10.trunc <br/>');
document.write(Math.trunc(10.521) + '<br/><br/>');

// date & time
// javascript date object can be used to get year,month,day.you can display a timer on the webpage by the help of javascript date object.it provides methods to get and set day,month,year,hour,minute and seconds.
// date example
document.write('<b>Date example: </b><br/>');
var a = new Date();
document.write(a + '<br/>');
// example 2
document.write('Example 2: <br/>');
var a = new Date();
var dd = a.getDate();
var mm = a.getMonth();
var yy = a.getFullYear();
document.write(dd + "-" + mm + "-" + yy);
// time example
document.write('<br/>Time example: <br/>');
var b = new Date();
var h = b.getHours();
var m = b.getMinutes();
var s = b.getSeconds();
document.write(h + ":" + m + ":" + s);
// digital clock
document.write('<br/> Digital Clock example: <br/>');
function digi_clock() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}