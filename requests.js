const Http = new XMLHttpRequest();
const url='http://54.85.62.162:8000/';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}
