const countryName = new URLSearchParams(window.location.search).get('name');
const flagIMG = document.querySelector('.country-details img')
const countryNameH1= document.querySelector('.country-details h1')
const nativename = document.querySelector('.native-name');
const population = document.querySelector('.population');
const region = document.querySelector('.region');
const subRegion = document.querySelector('.sub-region');
const capital = document.querySelector('.capital');
const topLevelDomain = document.querySelector('.top-level-domain');
const currencies = document.querySelector('.currencies');
const Languages = document.querySelector('.languages');





  fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then(  (res) => res.json() )
  .then(([country]) =>{
    
    flagIMG.src= country.flags.svg
    countryNameH1.innerText=country.name.common;
    population.innerText= country.population.toLocaleString('en-In');
    region.innerText= country.region;
    subRegion.innerText= country.subregion;
    
    topLevelDomain.innerText= country.tld.join(', ');

    if(country.currencies){
      currencies.innerText= Object.values(country.currencies).map((currency)=>currency.name).join(', ')
    }

    if(country.languages){
      Languages.innerText= Object.values(country.languages).join(', ')
    }

    
    


    if(country.name.nativeName){
      nativename.innerText= Object.values(country.name.nativeName);
    }else{
      nativename.innerText= country.name.common[0];
    }
  });