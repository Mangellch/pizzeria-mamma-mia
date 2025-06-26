import React from 'react'

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [error, setError] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setMessage('Por favor, completa todos los campos.');
            setError(true);
            return;
        }

        if (password.length < 6) {
            setMessage('La contraseña debe tener al menos 6 caracteres.');
            setError(true);
            return;
        }

    setMessage('¡Inicio de sesión exitoso!');
    setError(false);
    setEmail('');
    setPassword('');
    }
  return (
     <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4 text-center">Inicio de sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mb-4">Iniciar Sesión</button>
      </form>

      {message && (
        <div className={`alert mt-3 ${error ? 'alert-danger' : 'alert-success'}`} role="alert">
          {message}
        </div>
      )}
    </div>
  );
};


export default Login