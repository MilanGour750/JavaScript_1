
const celciusInput = document.getElementById('celcius');
const kelvinsInput = document.getElementById('kelvins');
const fahrenheitInput = document.getElementById('fahrenheit');


function handleInputChange(e) {
    const inputValue = parseFloat(e.target.value);

    if (isNaN(inputValue)) {

        celciusInput.value = '';
        kelvinsInput.value = '';
        fahrenheitInput.value = '';
        return;
    }


    switch (e.target.id) {
        case 'celcius':
            kelvinsInput.value = (inputValue + 273.15).toFixed(2); 
            fahrenheitInput.value = (inputValue * 1.8 + 32).toFixed(2); 
            break;
        case 'kelvins':
            celciusInput.value = (inputValue - 273.15).toFixed(2); 
            fahrenheitInput.value = ((inputValue - 273.15) * 1.8 + 32).toFixed(2);
            break;
        case 'fahrenheit':
            celciusInput.value = ((inputValue - 32) / 1.8).toFixed(2); 
            kelvinsInput.value = ((inputValue - 32) / 1.8 + 273.15).toFixed(2); 
            break;
        default:
            break;
    }
}


function handleKeyPress(e) {
    if (e.key === 'Enter') {
        e.preventDefault(); 
        handleInputChange(e);
    }
}

celciusInput.addEventListener('keydown', handleKeyPress);
kelvinsInput.addEventListener('keydown', handleKeyPress);
fahrenheitInput.addEventListener('keydown', handleKeyPress);
