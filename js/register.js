const register = document.querySelector('#form-register')
register.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.querySelector('#name').value
    const lname = document.querySelector('#lname').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const users = JSON.parse(localStorage.getItem('users')) || []
    const isRegister = users.find(user => user.email === email);
    if (isRegister) {
        return alert('el usuariio ya esta registrado')
    }
    users.push({ name: name, lastname: lname, email: email, password: password })
    
    
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registro exitoso')
    window.location.href = 'logueo.html'
})