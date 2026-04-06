export async function retrievePizzas() {
    try {
        const url = 'http://localhost/controlador.php?operacion=recuperar_pizzas';
        const response = await fetch(url);
        if (!response.ok) {
            throw response.statusText;
        }
        const data = await response.json();
        const pizzas = data.resultado.pizzas;
        return pizzas;
    } catch (error) {
        throw `Cannot retrieve pizzas: ${error}`
    }
}


export async function retrieveAllIngredients() {
    try {
        const url = `http://localhost/controlador.php?operacion=recuperar_ingredientes_todos`;
        const response = await fetch(url);
        if (!response.ok) {
            throw response.statusText;
        }
        const data = await response.json();
        const ingredients = data.resultado.ingredientes;
        return ingredients;
    } catch (error) {
        throw `Cannot retrieve all ingredients of pizzas: ${error}`
    }
}


export async function retrieveIngredientsByPizza(pizza) {
    try {
        const url = `http://localhost/controlador.php?operacion=recuperar_ingredientes&pizza=${pizza}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw response.statusText;
        }
        const data = await response.json();
        const ingredients = data.resultado.ingredientes;
        return ingredients;
    } catch (error) {
        throw `Cannot retrieve ingredients of pizza ${pizza}: ${error}`
    }
}


export async function retrieveIngredientById(ingredientId) {
    try {
        const url = `http://localhost/controlador.php?operacion=recuperar_ingrediente&ingrediente=${ingredientId}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw response.statusText;
        }
        const data = await response.json();
        const ingredient = data.resultado.ingrediente;
        return ingredient;
    } catch (error) {
        throw `Cannot retrieve the ingredient with id ${ingredientId}: ${error}`
    }
}