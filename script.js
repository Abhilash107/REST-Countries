// fetch('https://restcountries.com/v3.1/all')
// .then( (res) =>res.json())
// .then(   (data) =>{
//     data.forEach( (country) =>{
//         console.log(country);


//     } )
// } )


const countryCard = document.createElement('a');
countryCard.classList.add('countryCard');
// const cardImg = document.createElement('img');
// cardImg.src = 'https://flagcdn.com/er.svg';
// countryCard.append(cardImg);

const cardHTML = `
<img src="https://flagcdn.com/er.svg" alt="flag">
                <div class="card-text">
                    <h3>Cyprus</h3>
                    <p><b>Population: </b>12323554</p>
                    <p><b>Region:  </b>Europe</p>
                    <p><b>Capital: </b>Berlin</p>
                </div>
                
            </a>`;

countryCard.innerHTML = cardHTML;





