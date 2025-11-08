document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  apiLogin(username, password);
});

function apiLogin(username, password) {
  fetch('https://api.xyzaroom.com/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(res =&gt; res.json())
  .then(data =&gt; {
    if(data.success) {
      localStorage.setItem('token', data.token);
      window.location.href='dashboard.html';
    } else {
      document.getElementById('errorMsg').innerText = 'Login failed!';
    }
  })
  .catch(() =&gt; {
    document.getElementById('errorMsg').innerText = 'Error connecting to server.';
  });
}
