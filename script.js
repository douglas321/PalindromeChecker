function getInputText(){
    const textElement = document.getElementById("text-input");
    const textValue= textElement.value;
    return textValue;
}

function checkPalindrome(){
    const text = getInputText();

    if(!text){
        alert("Please input a value");
        return
    }
    
    const cleanedText = text.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');

    const resultElement = document.getElementById("result"); 
    if (cleanedText === reversedText){
        resultElement.textContent = `${text} IS a palindrome.`
    }   else{
        resultElement.textContent = `${text} is NOT a palindrome.`
    }
}