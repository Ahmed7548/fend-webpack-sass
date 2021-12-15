const displayCountries = (countries) => {
    document.getElementById('results').innerHTML=""
const fragment = document.createDocumentFragment();
  countries.length
    ? countries.forEach((country) => {
        const container = document.createElement("div");
        container.innerHTML = `<h4>${country.name.official} <span>${country.name.common} </span></h4>
         <h5>${country.region}</h5>`;
        fragment.appendChild(container)
      })
        : null;
    document.getElementById('results').appendChild(fragment);
};

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  Client.checkForName(formText);

    console.log("::: Form Submitted :::");
    console.log(formText)
  fetch(`https://restcountries.com/v3.1/name/${formText}`)
    .then((res) => res.json())
    .then(function (res) {
        displayCountries(res)
      console.log(res);
    });
}

export { handleSubmit };
