// Función que muestra el valor en el input
function mostrar(valor){
	var input = document.getElementById('resultado');
	input.value += valor;
}

// Función que realiza la operación
function operacion(valor){
	var input = document.getElementById('resultado');
	input.value += valor;
}

// Función que limpia el input
function limpiar(){
	var input = document.getElementById('resultado');
	input.value = "";
}

// Función que calcula el resultado
function calcular(){
	var input = document.getElementById('resultado');
	var resultado = eval(input.value);
	input.value = resultado;
}

