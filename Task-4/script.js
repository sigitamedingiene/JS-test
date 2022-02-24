/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
fetch(ENDPOINT)
  .then((response) => response.json())
  .then((posts) => {
    console.log(posts);
    posts.forEach((post) => {
        const carCard = createCarCard(post);
        document.querySelector("#output").append(carCard);    
     });
  })
  .catch((error) => {
    console.error("We got an error: ", error);
  });

  const createCarCard = (post) => {
    const card = document.createElement("div");
    const brand = document.createElement("h3");
    const models = document.createElement("p");

    card.setAttribute("class", "carCard");

    brand.innerText = post.brand;
    models.innerText = post.models;

    card.append(brand, models);
    return card;
};

