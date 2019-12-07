import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';
import './App.css';

function LanguageSelector() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <div onChange={changeLanguage}>
      <input type="radio" value="en" name="language" defaultChecked /> {t('language-en.label')}
      <input type="radio" value="zh" name="language"/> {t('language-zh.label')}
    </div>
  )
}

function MyComponent() {
  const { t, i18n } = useTranslation();

  return <h1>{t('name.label')}</h1>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Suspense fallback="loading">
        <LanguageSelector />
        <MyComponent />
      </Suspense>
    </div>
  );
}

export default App;
