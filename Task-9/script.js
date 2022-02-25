/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

class newMovie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    };
};
const newItem = new newMovie("Ananasas", "Grybas", 252245);
console.log(newItem, wasExpensive());

function wasExpensive(budget){
    if(budget>100000000){
    console.log("true")   
    } else {console.log("false")};   
};
