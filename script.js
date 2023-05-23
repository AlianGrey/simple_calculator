document.addEventListener("DOMContentLoaded", () => {

    const calcBtn = document.querySelector("#calculator");
    let result;

    calcBtn.addEventListener('click', () => {
        document.querySelector('#result').innerHTML = calc();
    })
});
/* document.querySelector("#submit").onclick = */

function calc() {

    try {
        let firstNumber = document.getElementById('first-number').value;
        let mathSign = document.getElementById('math-sign').value;
        let secondNumber = document.getElementById('second-number').value;
        /*             console.log(firstNumber, mathSign, secondNumber); */
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);

        if (checkIsNumber(firstNumber) || checkIsNumber(secondNumber) || !checkSign(mathSign)) {
            return result = '<p style="color: red"> Некорректное значение</p>';
            throw new Error();
        }
        if (mathSign == '/' && secondNumber === 0) {
            return result = '<p style="color: red">Делить на ноль нельзя</p>';
            throw new Error();
        }

        if (mathSign == '+') {
            result = firstNumber + secondNumber;
        } else if (mathSign == '-') {
            result = firstNumber - secondNumber;
        } else if (mathSign == '*') {
            result = firstNumber * secondNumber;
        } else if (mathSign == '/') {
            result = firstNumber / secondNumber;
        }
        return result = `<p style="color: green">  Результат:  ${result}</p>`;
    } catch (Error) { }
}

function checkIsNumber(value) {
    if (isNaN(value)) { return true; }
}
function checkSign(mathSign) {
    if (mathSign != '+' || mathSign != '-' || mathSign != '*' || mathSign != '/') { return true; }
}