function createElement(data) {
  const p = document.createElement("p");
  p.innerHTML = JSON.stringify(data);
  document.body.appendChild(p);
}

function queryWikipedia(callback) {
  const API_URL = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
  const xhr = new XMLHttpRequest();

  xhr.open("GET", API_URL, true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      createElement(JSON.parse(xhr.response).query.pages["21721040"].extract);
    }
  };
}

queryWikipedia(createElement);
