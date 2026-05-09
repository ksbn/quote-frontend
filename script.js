const API_URL = "https://j11rlr6ue3ulpk0bfrddot0q.178.105.39.91.sslip.io";

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