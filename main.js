function enviaContato(nome, numero) {
	axios.post('https://contato-api-rps.herokuapp.com/', {
		nome,
		numero
	  })
	  .then(function (response) {
	    console.log(response);
	    alert('Cadastrado com sucesso!')
	    document.getElementById('contactName').value='';
	    document.getElementById('contactNum').value='';
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
}

const btn = document.getElementById('enviaContatobt');
btn.onclick = async function() {
	const imputNome = document.getElementById('contactName');
	const imputNum = document.getElementById('contactNum');
	
	await enviaContato(imputNome.value, imputNum.value)
}