const fill= document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend',dragEnd);

function dragStart(){
    console.log('start'); 
}   

function dragEnd(){
    console.log('end');
}   