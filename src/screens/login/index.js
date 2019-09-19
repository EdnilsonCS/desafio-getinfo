import React, { useState } from 'react';
import { api } from '../../services';

function Login(props) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const handleLogin = async () => {
    console.log(form);
    try {
      await api.post('/auth', form);
      props.history.push('/tarefas');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div id="login-screen" className="hero is-fullheight">
      <div className="hero-body">
        <div>
          <h1 className="sub-title is-o">Bem vindo(a) </h1>
          <h1 className="title">Gerengiador de Tarefas </h1>
          <form onSubmit={handleLogin}>
            {/* fild login */}
            <div className="column">
              <div className="field">
                <span>Login</span>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={form.email}
                    placeholder="seu@email.com"
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>
            </div>
            {/* fild senha */}
            <div className="column">
              <div className="field">
                <span>Senha</span>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;