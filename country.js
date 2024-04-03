const countryName = new URLSearchParams(window.location.search).get('name');
const flagIMG = document.querySelector('.country-details img')
const countryNameH1= document.querySelector('.country-details h1')
const nativename = document.querySelector('.native-name');
const population = document.querySelector('.population');
const region = document.querySelector('.region');
const subRegion = document.querySelector('.sub-region');
const Capital = document.querySelector('.capital');
const topLevelDomain = document.querySelector('.top-level-domain');
const currencies = document.querySelector('.currencies');
const Languages = document.querySelector('.languages');
const BorderCountries = document.querySelector('.border-countries')



  fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then(  (res) => res.json() )
  .then(([country]) =>{
    
    flagIMG.src= country.flags.svg
    countryNameH1.innerText=country.name.common;
    population.innerText= country.population.toLocaleString('en-In')
    region.innerText= country.region;

    if(country.capital){
      Capital.innerText= country.capital;
    }

     if(country.subregion){
        subRegion.innerText= country.subregion;
     }
    
    topLevelDomain.innerText= country.tld.join(', ');

    if(country.currencies){
      currencies.innerText= Object.values(country.currencies).map((currency)=>currency.name).join(', ')
    }

    if(country.languages){
      Languages.innerText= Object.values(country.languages).join(', ')
    }

    // if(country.name.nativeName){
    //   nativename.innerText= Object.values(country.name.nativeName);
    // }else{
      nativename.innerText= country.name.common;
    // }

    if(country.borders){
      country.borders.forEach( (border) =>{
        fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then( (res) => res.json() )
        .then( ([borderCountry]) =>{
          console.log(borderCountry);
          const countryBorderTag = document.createElement('a');
          countryBorderTag.innerText = borderCountry.name.common;
          countryBorderTag.href= `country.html?name=${borderCountry.name.common}`
          BorderCountries.append(countryBorderTag);
          
        } )
      } )
    }



  });