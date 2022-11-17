const SERVER_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';


function getDrink(Drink) {
  return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita' + Drink)
  .then(function(response) {
      return response.json();
  })
  .catch(function(error) {
      console.log('error', error);
  });
}

function displayDrinkName(data) {
  const name = document.createElement('h1');
  name.innerText = data.name;
  document.body.appendChild(name);
  return data;
}

getDrink('margarita')
.then(displayDrinkName);