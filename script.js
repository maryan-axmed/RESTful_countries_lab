console.log("Testing, testing, 1 2 3 ...")

let globalVariable;

// create a function that has fetch() 
// needs to return a JSON body
const fetchCountry  = async () => {
    const country = await fetch("https://restcountries.com/v3.1/all");
    const countryJsonData = await country.json(); 
}

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
