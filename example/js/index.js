console.log(document); // Vårt HTML-träd

// Vi letar upp vår knapp och får tillbaka ett HTML element med id clickButton
const buttonElem = document.querySelector('#clickButton');
console.log(buttonElem);

let counter = 0;

buttonElem.addEventListener('click', () => {
    counter = counter + 1; // En kortare variant: counter++;
    console.log('Du klickade på knappen ', counter);
});