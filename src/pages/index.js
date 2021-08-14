import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';

const Index = () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Dogukan Ermis - Software Developer'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Dogukan Ermis - Software Developer'} />
      </Helmet>
      <App />
    </>
  );
};

export default Index;
