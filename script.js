console.log("Testing, testing, 1 2 3 ...")

const button = document.querySelector("#button");
const input = document.getElementById("country");
const countriesList = document.getElementById("countriesList");
let globalVariable;

// create a function that has fetch() 
// needs to return a JSON body
const fetchCountry  = async () => {
    const country = await fetch("https://restcountries.com/v3.1/all");
    const countryJsonData = await country.json(); 
    console.log(countryJsonData);
}

fetchCountry();
// create setUp() function which will allow you to call 
// fetchSomething()
// setUp() needs to populate a global variable with the output
// global variable = variable declared in the global scope + 
//      visible to other scopes

const setUp = async () => {
    globalVariable = fetchCountry.countryJsonData;
    // console.log something to see if function is working?
    console.log("setup has worked");
}

// make sure that setUp() is invoked on load so use an event listener
// I think this might be redunant as when I loaded the page when 
// calling setUp(), the console sais "setup has worked"
// so idk?? make the event listener anyways 

window.addEventListener("load", setUp);

// need a function newElements()
// this should ceate new HTML elements (.createElement())
// populate the elements with info about each country 
// .appendChild them to the <ul></ul> element 

const newElements = async () => {
    // create new div element 
    const countryContainer = document.createElement("div");
    // create "li" element 
    // populate "li" with information about each country
    countryJsonData.message.forEach((url) => {
        const countryItem = document.createElement("li");
        countryItem.src = url;
        countryContainer.appendChild(countryItem); 
    })
    // append countryContainer to body
    document.querySelector("body").appendChild(countryContainer);
}


// printInput() function
// need to print the input to the console when something is submitted
button.addEventListener('click', (event) =>{
    // preventDefault will stop the page from reloading after the
    // form is submitted 
    event.preventDefault();
    const printedInput = input.value;
    console.log(printedInput);
    input.value = '';
})

// create filterBasedOnCountry() function 
// this should take the global variable and filters it based on the
// input recieved from the form
// .createElement() and .appendChild() this to <ul></ul>
const filterBasedOnCountry = async () => {
    const country = await fetch("https://restcountries.com/v3.1/all");
    const countryJsonData = await country.json(); 

    const countryToAdd = document.createElement("li");
    countryJsonData.message.forEach((url) => {
        const countryToAdd = document.createElement("li");
        countryToAdd.src = url;
        countriesList.appendChild(countryToAdd);
    })
}