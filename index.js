const urlBase = "https://randomuser.me/api/";

const getData = async ()=> {
  try {
    const response = await fetch (urlBase);
    const jsonResponse = await response.json();

    return jsonResponse;

  } catch(error) {
    console.log("El error es: ", error);
  }
};

const uname = document.getElementById("name-user");
const adress = document.getElementById("adress");
const email = document.getElementById("email");
const cellphone = document.getElementById("cellphone");
const avatarPic = document.getElementById("avatar");
const nationality = document.getElementById("nat");

const resumeData = async ()=> {
  const personalData = await getData();
  console.log(personalData);

  const getPersona = personalData.results[0];
 
  uname.innerHTML = getPersona.name.first + ' ' + getPersona.name.last;
  adress.innerHTML = getPersona.location.street.name + ' ' + getPersona.location.street.number;
  email.innerHTML = getPersona.email;
  cellphone.innerHTML = getPersona.cell;
  nationality.innerHTML = getPersona.nat;

};

resumeData();


document.getElementById('home').addEventListener('click', function() {

    resumeData();
});


