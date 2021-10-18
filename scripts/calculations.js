const inputElement = document.getElementById('inputField');
const buttons = document.querySelectorAll('.button');

const addition = (total, num) => {
    return total + num;
}

const substraction = (total, num) => {
    return total - num;
}

const multiplication = (total, num) => {
    return total * num;
}

const division = (total, num) => {
    return total / num;
}

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
    if (totalExp.charAt(totalExp.length - 1) == btnValue || totalExp == "") {
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
                var numArr = finalExp.match(/\d/g);
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




