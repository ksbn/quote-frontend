const API_URL = "http://YOUR-COOLIFY-URL/";

async function loadQuote() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    document.getElementById("quote").textContent = data.quote;
    document.getElementById("author").textContent = "- " + data.author;
  } catch (err) {
    console.error(err);
  }
}

loadQuote();