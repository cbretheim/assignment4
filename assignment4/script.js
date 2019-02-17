var speeches = [
{
 'name': "Churchill",
 'year': 1940,
 'bce': false
},

{
  'name': "Ghandi",
  'year': 1942,
  'bce': false
},

{
  'name': "Demosthenes",
  'year': 342,
  'bce': true
}
];

var calculation = speeches[1].year - speeches[0].year;

console.log("Ghandi's speech and Churchill's speech are " + calculation + " years apart.");

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  console.log("There are " + speeches.length + " speeches on the page.")
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log("This speech was written by " + speeches[0].name + " in " + speeches[0].year + ". It is " + speeches[0].bce + " that this year is B.C.E.")
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
    console.log("This speech was written by " + speeches[1].name + " in " + speeches[1].year + ". It is " + speeches[1].bce + " that this year is B.C.E.")
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
    console.log("This speech was written by " + speeches[2].name + " in " + speeches[2].year + ". It is " + speeches[2].bce + " that this year is B.C.E.")
});
