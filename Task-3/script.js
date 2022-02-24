/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
const ENDPOINT = 'https://api.github.com/users';
     fetch(ENDPOINT)
     .then((response) => response.json())
     .then((posts) => {
       console.log(posts);
       posts.forEach((post) => {
           const card = createPostCard(post);
           document.querySelector("#output").append(card);    
        });
     })
     .catch((error) => {
       console.error("We got an error: ", error);
     });

// const button = document.querySelector("button");
// button.addEventListener("click", fetch);

// function fetch(){};

  const createPostCard = (post) => {
    const card = document.createElement("div");
    const login = document.createElement("h3");
    const avatar = document.createElement("p");

    login.innerText = post.login;
    avatar.innerText = post.avatar_url;

    card.append(login, avatar);
    return card;
  };