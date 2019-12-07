import React, { Fragment, Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Step from '@material-ui/core/Step';
import StepContent from '@material-ui/core/StepContent';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function LanguageSelector() {
  const languages = ['en', 'zh'];
  const { t, i18n } = useTranslation();
  const [languageIndex, setLanguageIndex] = useState(0);

  const handleChangeIndex = (e, i) => {
    setLanguageIndex(i);
    i18n.changeLanguage(languages[i]);
  };

  return (
    <Tabs
      aria-label="language tabs"
      indicatorColor="primary"
      onChange={handleChangeIndex}
      textColor="primary"
      value={languageIndex}
      variant="fullWidth"
    >
      <Tab label={t('language-en.label')} />
      <Tab label={t('language-zh.label')} />
    </Tabs>
  );
}

function MyComponent() {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Typography align="right" component="div">
        <IconButton
          aria-label="gitHub link"
          color="primary"
          href="https://github.com/haleyhuiliu"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          aria-label="linkedin link"
          color="primary"
          href="https://www.linkedin.com/in/hui-hliu"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton color="primary" href="mailto:huiliu1110@gmail.com">
          <EmailIcon />
        </IconButton>
      </Typography>

      <Typography variant="h4" component="h1" gutterBottom>
        {t('name.label')}
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6" component="h2">
            {t('section.summary.title')}
          </Typography>
          <Typography variant="body1" component="p">
            4+ years of professional experience in web application development,
            with working knowledge of modern JavaScript frameworks including
            React, jQuery, and Node/Express.
          </Typography>
        </CardContent>
      </Card>
      <br />

      <Card>
        <CardContent>
          <Typography variant="h6" component="h2">
            {t('section.experience.title')}
          </Typography>
          <Typography variant="body2" component="p">
            <Stepper orientation="vertical">
              {[4, 3, 2, 1].map(index => (
                <Step active key={index}>
                  <StepLabel StepIconComponent={LocationOnIcon}>
                    <Typography component="h3" variant="h6">
                      {t(`section.experience.${index}.title`)}
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    {[
                      { key: 'company', variant: 'subtitle1' },
                      { key: 'dates', variant: 'subtitle2' }
                    ].map(({ key, variant }) => (
                      <Typography component="p" key={key} variant={variant}>
                        {t(`section.experience.${index}.${key}`)}
                      </Typography>
                    ))}
                    {new Array(5)
                      .fill(0)
                      .map((v, i) => ({
                        key: `duties.${i + 1}`,
                        variant: 'body1'
                      }))
                      .map(({ key, variant }) => (
                        <Typography component="p" key={key} variant={variant}>
                          - {t(`section.experience.${index}.${key}`)}
                        </Typography>
                      ))}
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Typography>
        </CardContent>
      </Card>
      <br />
      <Card>
        <CardContent>
          <Typography variant="h6" component="h2">
            {t('section.education.title')}
          </Typography>
          <Typography variant="body2" component="p"></Typography>
        </CardContent>
      </Card>
    </Fragment>
  );
}

function App() {
  return (
    <div className="App">
      <header />
      <Suspense fallback="loading">
        <Container maxWidth="md">
          <LanguageSelector />
          <MyComponent />
        </Container>
      </Suspense>
    </div>
  );
}

export default App;
