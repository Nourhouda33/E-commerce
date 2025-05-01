// include.js
function loadHTML(selector, url) {
    fetch(url)
      .then(res => res.text())
      .then(html => {
        document.querySelector(selector).innerHTML = html;
      })
      .catch(err => console.error('Erreur de chargement de', url, err));
  }
  