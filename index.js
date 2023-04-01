// Función que muestra el valor en el input
function mostrar(valor){
	let input = document.getElementById('resultado');
	input.value += valor;
}

// Función que realiza la operación
function operacion(valor){
	let input = document.getElementById('resultado');
	input.value += valor;
}

// Función que limpia el input
function limpiar(){
	const input = document.getElementById('resultado');
	input.value = "";
}

// Función que calcula el resultado
function calcular(){
	let input = document.getElementById('resultado');
	let resultado = eval(input.value);
	input.value = resultado;
}

