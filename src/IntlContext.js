import React, { createContext, useState } from "react";
import { IntlProvider } from "react-intl";
import messages_zh from "./translations/zh.json";
import messages_en from "./translations/en.json";

const messages = {
  zh: messages_zh,
  en: messages_en
};

const language = navigator.language.split(/[-_]/)[0]; // language without region code

export const LocaleContext = createContext();

export const LocaleProvider = props => {
  let [locale, handleChangeLocale] = useState(language);

  return (
    <LocaleContext.Provider value={{ locale, handleChangeLocale }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {props.children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};

export const LocaleConsumer = LocaleContext.Consumer;
