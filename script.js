const countryContainer= document.querySelector(".countries-container");
const filterRegion = document.querySelector('.filter-region');

const searchInput = document.querySelector('.search-container input');

const toggleTheme = document.querySelector('.toggle-theme')
const moonIcon = document.querySelector('.fa-moon');
const sunIcon = document.createElement('i');
sunIcon.classList.add('fa-sun');

let allCountriesData = 
fetch('https://restcountries.com/v3.1/all')
.then( (res) =>res.json())
.then( (data)=>{
    renderCountries(data)
    allCountriesData = data;
}  );


filterRegion.addEventListener('change', (e)=>{
    fetch(`https://restcountries.com/v3.1/region/${filterRegion.value}`)
.then( (res) =>res.json())
.then( renderCountries)
})

function renderCountries(data){
    countryContainer.innerHTML= '';
    data.forEach( (country) =>{
        const countryCard = document.createElement('a');
        countryCard.classList.add('country-card');
        countryCard.href= `./country.html?name=${country.name.common}`


    const cardHTML = `
            <img src="${country.flags.svg}" alt="flag">
            <div class="card-text">
                <h3>${country.name.common}</h3>
                <p><b>Population: </b>${country.population.toLocaleString('en-In')}</p>
                <p><b>Region:  </b>${country.region}</p>
                <p><b>Capital: </b>${country.capital}</p>
            </div>`;

    countryCard.innerHTML = cardHTML;
    countryContainer.append(countryCard);

    } )
    
}

searchInput.addEventListener('input', (e)=>{
    const filterdCountries =
    allCountriesData.filter((country)=> country.name.common.toLowerCase().includes(e.target.value.toLowerCase())) ;
    renderCountries(filterdCountries);
})

toggleTheme.addEventListener('click' , ()=>{
    document.body.classList.toggle('dark')
    // toggleTheme.style.border= "1px solid white";
    
    
    if (document.body.classList.contains('dark')) {
        toggleTheme.innerHTML = '<i class="fa-solid fa-sun"></i> Light mode';

    } else {
        toggleTheme.innerHTML = '<i class="fa-solid fa-moon"></i> Dark mode';
    }
}
)

// dark mode in country pages

















