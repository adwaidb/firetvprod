
const users = {
    'manager1': { password: 'manager123', role: 'manager' },
    'employee1': { password: 'emp123', role: 'employee', name: 'John Doe' },
    'employee2': { password: 'emp456', role: 'employee', name: 'Jane Smith' }
};

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-message');

    if (users[username] && users[username].password === password) {
        localStorage.setItem('user', JSON.stringify(users[username]));
        window.location.href = "dashboard.html";
    } else {
        errorMsg.textContent = "Invalid credentials. Try again.";
    }
}
