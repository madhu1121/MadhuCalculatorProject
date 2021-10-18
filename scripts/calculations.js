const inputElement = document.getElementById('inputField');
const buttons = document.querySelectorAll('.button');

const addition = (total,num) => {
    return total+num;
}

const substraction = (total,num) => {
    return total-num;
}

const multiplication = (total,num) => {
    return total*num;
}

const division = (total,num) => {
    return total/num;
}

const clearInput = () => {
    inputElement.value = null;
}

// buttons.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log(numberButton.value);
// });

const getInputFromBtn = (totalExp) => {
    totalExp = inputElement.value;
    console.log(totalExp);
    let num = document.getElementById('seven').value.toString(); 
    console.log(num);
    totalExp = totalExp.concat(num);
    console.log(totalExp);
    inputElement.value = totalExp;
    console.log("a button is pressed");
}

const getInputFromSpl = (totalExp) => {
    totalExp = inputElement.value;
    console.log(totalExp);
    if (totalExp.charAt(totalExp.length-1) == '*') {
        console.log("a button is pressed and done nothing")
    }
    else {
        let symbol = document.getElementById('asterisk').value.toString(); 
        console.log(symbol);
        totalExp = totalExp.concat(symbol);
        console.log(totalExp);
        inputElement.value = totalExp;
        console.log("a button is pressed");
    }

}




