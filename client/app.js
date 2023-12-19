//console.log("test");

async function getMessage() {
  const response = await fetch("http://localhost:8080/message");

  // turn the response into json

  const json = await response.json();

  // put message on the page

  const p = document.getElementById("message");
  p.textContent = json.getMessage;

}

getMessage();