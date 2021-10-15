let element = document.getElementById('inputField');

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
    element.value = null;
}


