let display = '';
function buttonPressed(text){
    display += text;
    document.getElementById('display').innerText = display;
}
function buttonAC(){
    document.getElementById('display').innerText = '0';
    display = '';
}
function doCorrection(equation) {
    let correctedEquation = equation.replace('×', '*');  // Replacing multiplication sign

    for (let i = 0; i < correctedEquation.length; i++) {
        if (correctedEquation[i] === '(' && i != 0 && correctedEquation[i-1] !== '*') {
            correctedEquation = correctedEquation.slice(0, i) + '*' + correctedEquation.slice(i);
        }
        else if (correctedEquation[i] === '%' && (correctedEquation[i+1] === ')' 
        || i === correctedEquation.length - 1)) {
            correctedEquation = correctedEquation.replace('%', '/100');
        }
    }
    return correctedEquation;  
}
function solve() {
    let correctedEquation = doCorrection(display);
    try {
        display = eval(correctedEquation);
        document.getElementById('display').innerText = display;
    }
     catch (error) {
         document.getElementById('display').innerText = 'Error';
         display = '';  
     }
}
