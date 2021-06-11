const lista = document.getElementById('users');

axios.get('http://localhost:3333/users')
    .then(response => {
        response.data.forEach(item => {
            lista.innerHTML += ` ${item.name} <br/>`
        })
    })
    .catch(error => console.log(error));

async function salvar(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const age = document.getElementById('age').value;

    const { data } = await axios.post('http://localhost:3333/users', {
        name,
        email,
        cpf,
        age
    });

    console.log(data);
}