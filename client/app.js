//console.log("test");

async function getMessage() {
  const response = await fetch("https://mini-stack-server.onrender.com/message");

  // turn the response into json

  const json = await response.json();
  console.log(json);

  // put message on the page

  const p = document.getElementById("message");
  p.textContent = json.message;

}

getMessage();