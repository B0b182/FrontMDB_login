const users = JSON.parse(localStorage.getItem('login_success')) || false
if (!users) {
    window.location.href = 'logueo.html'
}

const logout = document.querySelector("#logout")
logout.addEventListener('click', () => {
    alert('sesion finalizada')
    localStorage.removeItem('login_success')
    window.location.href = 'logueo.html'
})