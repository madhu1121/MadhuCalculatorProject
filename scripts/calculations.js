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

const getInputFromBtn = (btnValue) => {
    let totalExp = inputElement.value;
    console.log(totalExp);
    console.log(btnValue);
    totalExp = totalExp.concat(btnValue);
    console.log(totalExp);
    inputElement.value = totalExp;
    console.log("a button is pressed");
}

const getInputFromSpl = (btnValue) => {
    let totalExp = inputElement.value;
    console.log(totalExp);
    if (totalExp.charAt(totalExp.length-1) == btnValue || totalExp == "") {
        console.log("a button is pressed and done nothing")
    }
    else {
        console.log(btnValue);
        totalExp = totalExp.concat(btnValue);
        console.log(totalExp);
        inputElement.value = totalExp;
        console.log("a button is pressed");
    }

}

const evaluateExpression = () => {
    const exp = inputElement.value;
    console.log("here is the exp to be evaluated : " , exp);
    return exp;
}




