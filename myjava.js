//Creating one fuction that displays different messages. 
//Use of 'if' statement
//When this is 'onblur' event and it occurs when visitor leaves text area empty 
//The warning message 'Please enter your comment' will usually be displayed when visitor wants to check comment 
    function checkisValid(){
    var check=document.getElementById('correction');
    var com=document.getElementById('comment');
    if(com.value.length<=1)
    {
        check.textContent='Please enter your comment!';
    }
}
//this is 'onclick' event and function checks wheter any text is typed after submitting
function checkonSubmit(){
    var check2=document.getElementById('feedback');
    var com=document.getElementById('comment');
    if(com.value.length!=0)
    {
        check2.textContent='Thank you for your feedback!';
    } 
     else
    {
        check2.textContent='Please write your comment!';
    }
}

//creating a variable
//content of a variable is message 
var msg='<div ><h2 style="margin-left:2cm; color:red">Disclaimer</h2>';
msg+='<p style="margin-left:2cm; margin-right:2cm;">All Rights Reserved. This site may not be copied or duplicated in whole or part by any means without express prior agreement in writing or unless specifically noted. This page contains personal information. You may not copy, reproduce, distribute, publish, display, perform, modify, create derivative works, transmit, or in any way exploit any such content.</p><br><p style="margin-left: 2cm; margin-right:2cm;margin-top:1cm">Copyright, 2021;</p></div>';
var warning=document.createElement('div');
warning.setAttribute('id', 'war');
warning.innerHTML=msg;
document.getElementById('messtest').append(warning);


//creating an event, 'onclick' event used
//when button is selected, visitor is returned back to top of the page
function dugme(){
d = document.getElementById('dugme');
window.onscroll = function() {scrollFunction()};}
function scrollFunction() {
  d.style.display = 'block';
}

function topFunction() {
  document.documentElement.scrollTop = 0; 
  document.body.scrollTop=0;
}

//Creating an object and returning object's first name when displaying a message
const message={lName:'Šabanović', fName:'Esma', address:'A. Izetbegovića 134', town:'Breza', semester:'Fall', year:'2021'};
document.getElementById('objectTest').innerHTML='Page owner: ' + message.fName + ' | '+ 'Semester: ' + message.semester + ' | ' + 'Year: ' + message.year;

var myArray = ['Thank you for visiting my page!','Esma'],
arrayLength = myArray.length;
for (i = 0; i < arrayLength; i++) {
  $('<p style="text-align:center; font-size:20px;">').text(myArray[i]).appendTo('#thxmess');
}

//Creating an array
//By using 'for' loop, array content is displayed
var mypart=['critical thinking', 'problem solving','atternative material comprehension', 'adaptation in different work environments'];
    var bioPart=document.querySelector('#mypart');
    for( i=0;i<mypart.length;i++)
    {
        var myB=document.createElement('li');
        myB.textContent=mypart[i];
        bioPart.appendChild(myB);
    }

var lang = ['C++','Java', 'R','Julia','MATLAB','HTML','Python'],
arrayL = lang.length;
for (i = 0; i < arrayL; i++) {
 $('<li>').text(lang[i]).appendTo('#PL');}


//Use of switch statement
//When first checkbox is selected, comment/question will be public and appropriate message is displayed
//When second checkbox is selected, comment/question will be private and again, appropriate message is displayed
$(function () {
    $(':checkbox').click(function () {
    if ($(this).prop('checked', true)) {
    switch($(this).attr('id')) {
    case 'yes':
    var divMsg = $(document.getElementById('checkBoxcheck').innerHTML='Your comment will be public.');
    break;
    case 'no':
    var divMsg =  $(document.getElementById('checkBoxcheck').innerHTML='Your comment will be anonymous.');
    break;
    default:
     break;
    }}});});     
   
          
//Creating JQuery animation, fadeOut animation is used to remove personal photo and signature
//By clicking on buttons, photos can be removed or displayed again
$('#removeB').click(function(){
    function complete(){
        $('<div>').text('Photo section is removed. Click SHOW to display.').appendTo('#test');
    }
    $('#photo').fadeOut(2000, complete);});
    $('#showB').click(function(){
        $('div').show();
        $('#test').empty();
    });
//Creating a function that allows only one checkbox to be selected 
function checkBoxSelectable(checkbox) {
    var selectable = document.getElementsByName('odabir')
    selectable.forEach(function (item) {
    if (item !== checkbox)
    {item.checked = false;} 
        })}

//displaying date and time when visitor entered my page
var tddate=new Date();
document.getElementById('mydatetime').innerHTML=tddate;
