const countryContainer= document.querySelector(".countries-container");



fetch('https://restcountries.com/v3.1/all')
.then( (res) =>res.json())
.then(   (data) =>{
    data.forEach( (country) =>{
        const countryCard = document.createElement('a');
        countryCard.classList.add('country-card');
        countryCard.href= `/country.html?name=${country.name.common}`


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
} )

// const countryCard = document.createElement('a');
// countryCard.classList.add('country-card');


// const cardHTML = `
// <img src="https://flagcdn.com/er.svg" alt="flag">
//                 <div class="card-text">
//                     <h3>Cyprus</h3>
//                     <p><b>Population: </b>12323554</p>
//                     <p><b>Region:  </b>Europe</p>
//                     <p><b>Capital: </b>Berlin</p>
//                 </div>
                
//             </a>`;

// countryCard.innerHTML = cardHTML;
// countryContainer.append(countryCard);









