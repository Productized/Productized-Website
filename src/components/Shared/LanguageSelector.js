import React from 'react';
import { useTranslation } from 'react-i18next';
import ukFlag from '../../assets/uk-flag.png';
import ptFlag from '../../assets/portugal-flag.png';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <input
        className="flag-uk"
        onClick={changeLanguage}
        type="image"
        value="en"
        src={ukFlag}
        alt="uk flag"
      />
      <input
        className="flag-pt"
        onClick={changeLanguage}
        type="image"
        value="pt"
        src={ptFlag}
        alt="portugal flag"
      />
    </>
  );
};

export default LanguageSelector;
