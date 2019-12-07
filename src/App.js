import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import './App.css';

function LanguageSelector() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <RadioGroup defaultValue="en" aria-label="language" name="language-radios" onChange={changeLanguage}>
      <FormControlLabel value="en" control={<Radio />} label={t('language-en.label')} />
      <FormControlLabel value="zh" control={<Radio />} label={t('language-zh.label')} />
    </RadioGroup>
  )
}

function MyComponent() {
  const { t, i18n } = useTranslation();

  return <h1>{t('name.label')}</h1>
}

function App() {
  return (
    <div className="App">
      <header />
      <Suspense fallback="loading">
        <LanguageSelector />
        <MyComponent />
      </Suspense>
    </div>
  );
}

export default App;
