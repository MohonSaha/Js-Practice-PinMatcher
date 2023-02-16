

function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random() * 10000);
    return random;
}


document.getElementById("generate-pin").addEventListener('click', function(){
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})




document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-number');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split("");
            digits.pop();
            const remainingDigits = digits.join("");
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
});



document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin').value;
    const typedNumberField = document.getElementById('typed-number').value;
    if(displayPinField === typedNumberField){
        document.getElementById('matched').style.display = 'block';
        document.getElementById('not-matched').style.display = 'none';
        document.getElementById('typed-number').value = '';
    }
    else{   
        
        document.getElementById('not-matched').style.display = 'block';     
        document.getElementById('matched').style.display = 'none';

        
    }
    
})