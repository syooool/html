const app = document.getElementById('root');

var request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {
  console.log('Hello World');

  var data = JSON.parse(this.response);
  var jsonData = JSON.parse(this.response);
  console.log('This is your data', data);
  console.log('This is your data read by Json', jsonData);

  if (request.status >= 200 && request.status < 400) {
    const text = document.getElementById('your-text');
    // change text here
    text.innerHTML = data;
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()