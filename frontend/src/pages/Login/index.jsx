import { useState } from 'react';
import './styles.css'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/pessoa';

export default function Login() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  const handleCreateAccount = () => {
    navigate('/signup')
  }

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  // const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser(email, senha)

    if (response.token) {
      localStorage.setItem('token', response.token)
      navigate('/profile')
    } else {

    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" required value={senha} onChange={(e) => setSenha(e.target.value)}/>
        </div>
        <p>Não possui conta? <spam className="signup" onClick={handleCreateAccount}>Cadastre-se</spam></p>
        <button className="button" type="submit" onClick={handleSubmit}>Entrar</button>
        <button className="button back-button" onClick={handleBackClick}>
          Voltar
        </button>
      </form>
    </div>
  );
}
