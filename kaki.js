const apiFactButton = document.getElementById('api-fact-button');
const apiFactContainer = document.getElementById('api-fact-container');

apiFactButton.addEventListener('click', () => {
  fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => {
      apiFactContainer.textContent = data.fact;
    })
    .catch(error => {
      apiFactContainer.textContent = 'Radās kļūda, mēģiniet vēlreiz!';
      console.error('Kļūda:', error);
    });
});