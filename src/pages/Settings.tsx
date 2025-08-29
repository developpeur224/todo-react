import { useTheme } from '../context/ThemeContext';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="page" data-theme={theme}>
      <div className="page-container">
        <h2 className="page-title">Paramètres</h2>
        
        <div className="settings-card">
          <h3 className="settings-title">Préférences d'affichage</h3>
          
          <div className="theme-toggle">
            <div className="theme-info">
              <p className="theme-name">Thème sombre</p>
              <p className="theme-description">
                Activer/désactiver le mode sombre
              </p>
            </div>
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={theme === 'dark'} 
                onChange={toggleTheme}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
          
          <div className="theme-status">
            <p>
              Le thème <span className="font-medium">{theme === 'dark' ? 'sombre' : 'clair'}</span> est actuellement activé.
            </p>
          </div>
        </div>

        <div className="about-card">
          <h3 className="about-title">À propos</h3>
          <p className="about-text">
            Cette application de gestion de tâches a été développée avec React, TypeScript et CSS personnalisé.
          </p>
          <p className="about-text">
            Elle inclut des fonctionnalités telles que la persistance du thème, le filtrage des tâches,
            et des statistiques en temps réel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;