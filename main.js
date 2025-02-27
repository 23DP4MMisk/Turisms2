const feedbackForm = document.querySelector('.feedback-form');
const feedbackText = document.getElementById('feedbackText');
const feedbackList = document.getElementById('feedbackList');


feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const feedbackContent = feedbackText.value.trim(); 

  
  if (feedbackContent !== '') {
    
    feedbackList.innerHTML += `
      <div>
        <p>${feedbackContent}</p>
      </div>
    `;

    feedbackText.value = ''; 
  } else {
    alert('Lūdzu, ieraksti atsauksmi pirms iesniegšanas!'); 
  }
});