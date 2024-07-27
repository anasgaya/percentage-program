console.log('hello world')



var chemistry=document.querySelector('#chemistry');
var physics=document.querySelector('#physics');
var maths=document.querySelector('#maths');
var english=document.querySelector('#english');

function result(){
 if(chemistry.valu > 100 || physics.value > 100 || maths.value > 100 || english.value >100);
   alert("marks are not correct");
}

function altResult(){
var totalMarks =+chemistry.value + +physics.value + +maths.value + +english.value;
var percentage = (totalMarks / 400) * 500;
var grade;

if(percentage > 80){
    grade = 'A+';
}

}