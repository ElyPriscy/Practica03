validarCamposObligatorios();

validarCedula();
validarNumeros();

validarLetrasn();
validarLetrasa();

validarnt();

validarCorreo();
validarNumerost();

validarPass();

function validarCamposObligatorios(formulario) {
	//var bandera= true;
	cont = 0;
	for (var i = 0; i < formulario.length; i++) {
		var elemento = formulario.elements[i];
		if (elemento.value == null || elemento.value == '') {
			//	bandera=false;
			cont++;
			elemento.style.border = "2px solid red";
			alert("Debes llenar todos los campos (*)");
			break;
		}
	}
	//return bandera;
	if (cont == 0) {
		return true;
	} else {
		document.getElementById('cedula'.innerHTML = 'Debe ingresar numero de cedula');
		return false;
	}
}

function validarCedula() {
	validarsoloNumeros();
	var numCedula = document.getElementById("cedula").value.trim();
	var total = 0;
	var tamaño = numCedula.length;
	var tamañov = tamaño - 1;
	if (numCedula != " " && tamaño < 10 && numCedula != parseInt(numCedula)) {
		cedula.style.border = "2px solid red";
		document.getElementById("mensajeCedula").innerHTML = "Ingresar los 10 digitos de la cedula";
	}
	else {
		if (numCedula != " " && tamaño == 10) {
			for (i = 0; i < tamañov; i++) {
				if (i % 2 == 0) {
					var aux = numCedula.charAt(i) * 2;
					if (aux > 9) aux -= 9;
					total += aux;
				} else {
					total += parseInt(numCedula.charAt(i));

				}
			}
			total = total % 10 ? 10 - total % 10 : 0;

			if (numCedula.charAt(tamaño - 1) == total) {
				cedula.style.border = "2px solid blue";
				document.getElementById("mensajeCedula").innerHTML = "";
				alert("Cedula válida");
			} else {
				cedula.style.border = "2px solid red";
				alert("Cedula inválida");
			}
		}
		else {
			alert("Ingresar los 10 digitos de la cedula");
			cedula.style.border = "2px solid red";
		}
	}
}

function validarsoloNumeros() {
	var numeroCedula = document.getElementById("cedula").value;

	if (numeroCedula == (parseInt(numeroCedula))) {
		cedula.style.border = "2px solid blue";
		document.getElementById('mensajeCedula').innerHTML = "";
	} else {
		alert("Debe ingresar un valor numérico");
		cedula.value = "";
		cedula.style.border = "2px solid red";
		document.getElementById("mensajeCedula").innerHTML = "Ingresar numeros enteros";
	}
}

function validarLetrasn() {
	
	var letras = document.getElementById("nombres").value.trim();

	for (var i = 0; i < letras.length; i++) {
		if (/^([0-9])*$/.test(letras.charAt(i))) {
			nombres.style.border = "2px solid red";
			alert("Este campo no permite ingresar valores numericos");
			nombres.value = "";
			document.getElementById("mensajeNombres").innerHTML = "Ingresar letras";
			break;
		} else {
			nombres.style.border = "2px solid blue";
			document.getElementById("mensajeNombres").innerHTML = "";
		}
	}
	validarNombres();
}
function validarNombres() {
	var nom = document.getElementById("nombres").value.trim();
	var tamaño = nom.length;

	if (tamaño < 3 && tamaño > 0) {
		document.getElementById("mensajeNombres").innerHTML = "Ingresar un nombre Valido";
		nombres.style.border = "2px solid red";
	}
	else 
	 {	
		nombres.style.border = "2px solid blue";
			document.getElementById("mensajeNombres").innerHTML = "";
	}
}

function validarLetrasa() {

	var letras = document.getElementById("apellidos").value.trim();
	for (var i = 0; i < letras.length; i++) {
		if (/^([0-9])*$/.test(letras.charAt(i))) {
			
			alert("Este campo no permite ingresar valores numéricos");
			apellidos.style.border = "2px solid red";
			apellidos.value = "";
			document.getElementById("mensajeApellidos").innerHTML = "Ingresar letras";
			break;
		} else {
			apellidos.style.border = "2px solid blue";
			document.getElementById("mensajeApellidos").innerHTML = "";
		}

	}
	validarApellidos();
}

function validarApellidos() {
	var ape = document.getElementById("apellidos").value.trim();
	var tamaño = ape.length;
	if (tamaño > 0 && tamaño < 3) {
		document.getElementById("mensajeApellidos").innerHTML = "Ingresar un apellido Valido";
		apellidos.style.border = "2px solid red";
	}
	else {
		apellidos.style.border = "2px solid blue";
		document.getElementById("mensajeApellidos").innerHTML = "";
		
		
	}
}



function validarnt(){
	validarNumerost();
	var telefono = document.getElementById("telefono").value.trim();
	var tamaño = telefono.length;

	if (tamaño < 10 && tamaño > 0) {
		telefono.style.border = "2px solid red";
		document.getElementById("mensajeT").innerHTML = "Ingresar un telefono Valido";
		
	}
	else 
	 {	
		telefono.style.border = "2px solid blue";
			document.getElementById("mensajeT").innerHTML = "";
	}
}

function validarNumerost() {
	
	var ntelefono = document.getElementById("telefono").value;
	if (ntelefono == (parseInt(ntelefono))) {
		telefono.style.border = "2px solid blue";
		document.getElementById("mensajeT").innerHTML = "";
	} else {
		alert("Debe ingresar un valor numérico");
		telefono.value = "";
		telefono.style.border = "2px solid red";
		document.getElementById("mensajeT").innerHTML = "Ingresar numeros enteros";
	}
}




function validarCorreo() {
	var correo = document.getElementById("correo").value;
	var caracteres = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	if (caracteres.test(correo)) {
		alert("Correo válido");
		correo.style.border = "2px solid blue";
		document.getElementById("mensajeC").innerHTML = "";
	} else {
		alert("Correo incorrecto");
		correo.value = "";
		correo.style.border = "2px solid red";
		document.getElementById("mensajeC").innerHTML = "Verificar que contenga una @ y .";
		
	}
}

function validarPass() {
	var pass = document.getElementById("password").value.trim();
	var tamaño = pass.length;

	if (tamaño < 8 && tamaño > 0) {
		password.style.border = "2px solid red";
		document.getElementById("mensajeP").innerHTML = "Contraseña insuficiente";
		
	}
	else
	{
		password.style.border = "2px solid green";
		document.getElementById("mensajeP").innerHTML = "Contraseña Valida";
	}
}
