let display = '';
function show() {
    document.getElementById('display').innerText = display;
}
var buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        if(button.innerText == 'AC'){
            ACfun();
        }
        else if (button.innerText != '=') {
            display += button.innerText;  // Append the button text to the display
            show();
        } 
        else {
            solve(display);  // Use `display` instead of getting it from the DOM again
        }
    });
});
function ACfun(){
    document.getElementById('display').innerText = '0';
    display = '';
}
function doCorrection(equation) {
    // Replacing × to * 
    let correctEquation = equation.replace('×', '*');
    let strLenth = correctEquation.length;
    // now solution for ()
    for (let i = 0; i < strLenth; i++) {
        if (correctEquation[i] === '(' && i != 0) {
            // Adding '*'
            if (correctEquation[i - 1] !== '*') {
                let midIndex = i;  // This finding the position of '('
                correctEquation = correctEquation.slice(0, midIndex) + '*'
                + correctEquation.slice(midIndex);
            }
        }
        if(correctEquation[i]== '%' ){
            if(correctEquation[i+1] == ')'|| i == strLenth-1){
                correctEquation = correctEquation.replace('%', '/100');
            }
        }
    }
    return correctEquation;  // Returned
}

function solve(equation) {
    let correctedEquation = doCorrection(equation);  
    try {
        // Useing eval()
        const ans = eval(correctedEquation);
        document.getElementById('display').innerText = ans;  // Showing result
    } catch (error) {
        document.getElementById('display').innerText = 'Error';  // Handl errorsss
        display = '';
    }
}