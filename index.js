const aElement = document.getElementById('a');
const bElement = document.getElementById('b');
const cElement = document.getElementById('c');

const ans1 = document.getElementById('answer1');
const ans2 = document.getElementById('answer2');

let a;
let b;
let c;

function calculate() {
    discriminant = bElement.value * bElement.value - 4 * aElement.value * cElement.value
    if(discriminant>0) {
        let x1 = (-bElement.value + Math.sqrt(discriminant)) / (2 * aElement.value);
        let x2 = (-bElement.value - Math.sqrt(discriminant)) / (2 * aElement.value);
        ans1.value = x1;
        ans2.value = x2;
    }
    else if(discriminant<0) {
        ans1.value = 'no';
        ans2.value = 'solution';
    }
    else{
        ans1.value = 'ERROR';
        ans2.value = 'ERROR';
    }
    
} 

function clearAll(){
    ans1.value = '';
    ans2.value = '';
    aElement.value = '';
    bElement.value = '';
    cElement.value = '';
}