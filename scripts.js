const app = document.getElementById('root');

const logo = document.createElement('img');
logo.setAttribute('class', 'logo');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

const createdBy = document.createElement('p');
createdBy.textContent = "created by Adil Madhani";
createdBy.style.textAlign = "center";

app.appendChild(logo);
app.appendChild(createdBy);
app.appendChild(container);

var request = new XMLHttpRequest();
var url = document.querySelector('#dynamic_select').value;

request.open('GET', url, true);
request.onload = function () {


  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.results.forEach(result => {
      const movie = document.createElement('div');
      movie.setAttribute('class', 'movie');

      const title = document.createElement('h1');
      title.textContent = result.title;
      title.setAttribute('class', 'content');

      const overview = document.createElement('p');
      result.overview = result.overview.substring(0, 300);
      overview.textContent = `${result.overview}...`;
      overview.setAttribute('class', 'content');

      const poster = document.createElement('img');
      poster.src = "http://image.tmdb.org/t/p/w185" + result.poster_path;
      poster.setAttribute('class', 'poster');

      container.appendChild(movie);

      movie.appendChild(title);
      movie.appendChild(poster);
      movie.appendChild(overview);

    });
  } else {
    console.log('error');
  }
}

request.send();