/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const button = document.getElementById("btn");
const outputContainer = document.getElementById("output");

const formatOutputValue = (name, photoUrl) => {
  return `<div class="grid-item">
        <img class="profile-photo" src="${photoUrl}" alt="${name}_photo_url">
        <p class="profile-name">${name}</p>
    </div>`;
};

if (button && outputContainer) {
  button.addEventListener(
    "click",
    async function () {
      try {
        const response = await fetch(ENDPOINT);
        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error();
        }

        let output = '<div class="grid">';
        output += data
          .map((item) => formatOutputValue(item.login, item.avatar_url))
          .join("");
        output += "</div>";

        outputContainer.innerHTML = output;
      } catch (error) {
        outputContainer.innerHTML = '<p id="message">Įvyko klaida</p>';
      }
    },
    true
  );
}
