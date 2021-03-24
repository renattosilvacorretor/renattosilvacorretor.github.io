function enviaContato(nome, numero) {
	let load = document.getElementById('load');
	let sucesso = document.getElementById('sucesso');
	let falha = document.getElementById('falha');
	load.style.display = 'none';
	sucesso.style.display = 'none';
	falha.style.display = 'none';
	load.style.display = 'flex';

	axios.post('https://contato-api-rps.herokuapp.com/', {
		nome,
		numero
	  })
	  .then(function (response) {
		console.log(response);
		load.style.display = 'none';
		sucesso.style.display = 'block';
		falha.style.display = 'none';
		document.getElementById('contactName').value='';
		document.getElementById('contactNum').value='';
	  })
	  .catch(function (error) {
		load.style.display = 'none';
		sucesso.style.display = 'none';
		falha.style.display = 'block';
		document.getElementById('contactName').value='';
		document.getElementById('contactNum').value='';
	    console.log(error);
	  });
}

let formCadastro = document.getElementById('formcadastro');

formCadastro.addEventListener('submit', async function(event) {
	event.preventDefault();

	let imputNome = document.getElementById('contactName');
	let imputNum = document.getElementById('contactNum');
	
	await enviaContato(imputNome.value, imputNum.value)
})