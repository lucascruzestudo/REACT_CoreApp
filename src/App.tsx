import React from 'react';
import { Button, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Container>
      <h1>{t('welcome')}</h1> {}
      <Button variant="contained" color="primary" onClick={toggleLanguage}>
        {t('change_language')} {}
      </Button>
    </Container>
  );
}

export default App;