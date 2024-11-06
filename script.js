document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulação de login
    window.location.href = 'main.html';
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulação de cadastro
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html';
});
document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Inscrição realizada com sucesso!');
    document.getElementById('eventForm').reset();
});
