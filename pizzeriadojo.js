var sandwich = {
    pan:    "masa madre",
    proteína:  "asado",
    queso:   "queso suizo lacey",
    salsas: ["lechuga romana", "tomates reliquia", "salsa de rábano"]
};
    
console.log(sandwich);

function sandwichFactory(pan, proteína, queso, salsas) {
    var sandwich = {};
    sandwich.pan = pan;
    sandwich.proteína = proteína;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    return sandwich;
}
    
var s1 = sandwichFactory("trigo", "pavo", "provolone", ["mostaza", "cebolla frita", "rúcula"]);
console.log(s1);
//madre mia el papa jhon jaja salu2
function pizzaOven(corteza, tiposalsa, queso, salsas){
    var pizza = {};
    pizza.tipoCorteza = corteza;
    pizza.tipoSalsa = tiposalsa;
    pizza.quesos = queso;
    pizza.salsas = salsas;
    return pizza;
}
var pi1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
var pi2 = pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
var pi3 = pizzaOven("borde de queso", "BBQ", ["Cheddar","mozzarella"],["champiñones","cebollas", "ajo"]);
console.log(pi1);
console.log(pi2);
console.log(pi3);