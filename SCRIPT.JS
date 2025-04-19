document.getElementById('searchBar').addEventListener('keyup', function () {
    const searchTerm = this.value.toLowerCase();
    const horseCards = document.querySelectorAll('.horse-card');
  
    horseCards.forEach(card => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      if (title.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
  
  function showFact() {
    const horseFacts = ["Horses can sleep both lying down and standing up.",
      "A horse's average lifespan is 25 to 30 years.",
      "Horses have near-360-degree vision due to the placement of their eyes.",
      "The fastest recorded sprinting speed of a horse is about 55 mph (88.5 km/h).",
      "Foals can stand and walk within a few hours of birth.",
      "There are over 300 different breeds of horses worldwide.",
      "Horses use their ears, eyes, and nostrils to express their mood.",
      "A horse's heart weighs around 9 to 10 pounds on average.",
      "The tallest horse ever recorded was a Shire named Sampson, who stood 21.2 hands tall.",
      "Horses have a strong memory and can remember people and places for years."];
    const randomIndex = Math.floor(Math.random() * horseFacts.length);
    document.getElementById("factDisplay").innerText = horseFacts[randomIndex];
  }