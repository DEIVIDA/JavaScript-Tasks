/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const outputContainer = document.getElementById("output");

const formatOutputModelsValue = (models) => {
  if (Array.isArray(models)) {
    let value = "<ul>";
    value += models.map((model) => `<li>${model}</li>`).join("");
    value += "</ul>";
    return value;
  }
  return "";
};

const formatOutputValue = (brand, models) => {
  return `<div class="grid-item">
        <p class="brand-name">${brand}</p>
        ${formatOutputModelsValue(models)}
    </div>`;
};

(async function () {
  if (outputContainer) {
    try {
      const response = await fetch("./cars.json");
      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error();
      }

      let output = '<div class="grid">';
      output += [...data]
        .sort((a, b) => a.models.length - b.models.length)
        .map((item) => formatOutputValue(item.brand, item.models))
        .join("");
      output += "</div>";

      outputContainer.innerHTML = output;
    } catch (error) {
      alert("Įvyko klaida");
    }
  }
})();
