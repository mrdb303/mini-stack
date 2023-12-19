//console.log("test");

async function getMessage() {
  const response = await fetch("https://mini-stack-server.onrender.com/");

  // turn the response into json

  const json = await response.json();

  // put message on the page

  const p = document.getElementById("message");
  p.textContent = json.getMessage;

}

getMessage();