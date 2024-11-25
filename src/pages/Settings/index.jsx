import { SettingsContainer } from './styles';

const Settings = () => {
  return (
    <SettingsContainer>
      <h1>Configurações</h1>

      <div className="settings-group">
        <h2>Configurações Gerais</h2>
        <div className="setting-item">
          <label htmlFor="theme">Tema:</label>
          <select id="theme">
            <option value="light">Claro</option>
            <option value="dark">Escuro</option>
          </select>
        </div>
        <div className="setting-item">
          <label htmlFor="language">Idioma:</label>
          <select id="language">
            <option value="pt-BR">Português (Brasil)</option>
            <option value="en-US">Inglês</option>
          </select>
        </div>
      </div>

      <div className="settings-group">
        <h2>Configurações de Notificações</h2>
        <div className="setting-item">
          <label htmlFor="email-notifications">Notificações por e-mail:</label>
          <input type="checkbox" id="email-notifications" />
        </div>
        <div className="setting-item">
          <label htmlFor="sms-notifications">Notificações por SMS:</label>
          <input type="checkbox" id="sms-notifications" />
        </div>
      </div>

      <button>Salvar Configurações</button>
    </SettingsContainer>
  );
};

export default Settings;
