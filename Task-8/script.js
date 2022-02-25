/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class calculator {
    constructor(a, b) {
        this.sum = a + b;
        this.subtraction = a - b;
        this.multiplication = a * b;
        this.division = a / b;
     
    }
};
const answer= new calculator(6, 3);
console.log(answer);