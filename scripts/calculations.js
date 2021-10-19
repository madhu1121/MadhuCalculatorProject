const inputElement = document.getElementById('inputField');
const buttons = document.querySelectorAll('.button');
const operators = ['*','+','-','/','.'];

const clearInput = () => {
    inputElement.value = null;
}

//This is working, but it has effect on each button. Hence, for number button we can give another class name and we can make use of this function.

// buttons.forEach(element => {
//     element.addEventListener('click', (event) => {
//         event.preventDefault();
//         getInputFromBtn(element.value);
//     });
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
    if (totalExp.charAt(totalExp.length - 1) == btnValue || totalExp == "" || operators.includes(totalExp.charAt(totalExp.length - 1))) {
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

const getInputFromSplDot = (btnValue) => {
    let totalExp = inputElement.value;
    console.log(totalExp);
    let index = 0;

    for (let i = totalExp.length-1; i >= 0; i--) {
        console.log("character is :", totalExp.charAt(i) , i);
        if (signs.includes(totalExp.charAt(i))) {
            index=i;
            break;
        }
    }
    let substr = totalExp.substring(index,totalExp.length-1);
    console.log("substr :" , substr);
    if (totalExp.charAt(totalExp.length - 1) == btnValue || substr.includes('.')) {
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

const getInputFromBtnNegative = (btnValue) => {
    
}

const evaluateExpression = () => {
    const exp = inputElement.value;
    console.log("here is the exp to be evaluated : ", exp);

    //this is similar to eval
    // console.log("evaluated : " , Function(`'use strict'; return (${exp})`)());
    // const total = Function(`'use strict'; return (${exp})`)();


    //let's use reduce
    //split using -
    // 7*5/2-6-8/2+3

    const subStringAfterMinus = exp.split('-') //['7*5/2', '6', '8/2+3']
    console.log(subStringAfterMinus);
    //.map((str) => {return str.split("+");}) //returns array of arrays e.g 0: ['7*5/2'] 1: ['6']2: (2) ['8/2', '3']

    const arr = subStringAfterMinus.reduce((initialArr, curr, index) => {
        console.log("ITERATION BEGINS");
        let arrAfterPlus = curr.split('+');
        console.log(arrAfterPlus);
        let arr2 = arrAfterPlus.map((arr) => {
            let arrAfterStar = arr.split('*');
            console.log("arrAfterStar :" + arrAfterStar);
            let arr3 = arrAfterStar.map((finalExp) => {
                var numArr = finalExp.match(/[+-]?([0-9]*[.])?[0-9]+/g);
                console.log("numbers for division : ", numArr);

                let divisions = parseFloat(numArr[0]);
                for (let i = 1; i < numArr.length; i++) {
                    divisions = divisions / numArr[i];
                }
                console.log("after division : ", divisions);
                return divisions;

            });
            console.log("arr3 :" + arr3);
            return arr3.reduce((a,b) => a * b);
        });
        console.log("arr2 :", arr2);

        let finalVal = arr2.reduce((a,b) => a + b);
        initialArr.push(finalVal);
        return initialArr;

    }, [])

    console.log("arr :" , arr );

    let total = arr.reduce((a,b) => a - b);
    inputElement.value = total;

}




