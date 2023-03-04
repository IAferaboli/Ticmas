
fetch("https://randomuser.me/api/")
  .then(response => response.json())
  const data = response.json()
  console.log(data)

let uname = document.getElementById("name-user");
let adress = document.getElementById("adress");
let email = document.getElementById("email");
let cellphone = document.getElementById("cellphone");

uname.innerHTML = data[0].name.first + data[0].name.last;
/*adress.innerHTML = data.results.location.street.name + data.results.location.street.number;
email.innerHTML = data.results.email;
cellphone.innerHTML = data.results.cell;

document.getElementById('home').addEventListener('click', function() {
    console.log('anda')

    uname.innerHTML = data.results.name.first + data.results.name.last;
    adress.innerHTML = data.results.location.street.name + data.results.location.street.number;
    email.innerHTML = data.results.email;
    cellphone.innerHTML = data.results.cell;
});*/