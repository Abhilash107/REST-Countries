const countryName = new URLSearchParams(window.location.search).get('name');
const flagIMG = document.querySelector('.country-details img')
const countryNameH1= document.querySelector('.country-details h1')


  fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then(  (res) => res.json() )
  .then(([country]) =>{
    
    flagIMG.src= country.flags.svg
    countryNameH1.innerText=country.name.common
  });