const app = document.getElementById('root');

var request = new XMLHttpRequest()

request.open('GET', 'http://cfc99fb76966.ngrok.io/msg', true)

request.onload = function () {
  const text = document.getElementById('your-text');
  console.log('Hello World');

  var data = this.response;
  //var jsonData = JSON.parse(this.response);

  console.log('This is your data', data);
  //console.log('This is your data read by Json', jsonData);
  

  if (request.status >= 200 && request.status < 400) {
    // change text here
    text.innerHTML =data;
  } else {
    text.innerHTML = "Error";
  }
}

request.send()