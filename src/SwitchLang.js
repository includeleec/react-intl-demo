import React, { useContext } from "react";
import { LocaleContext } from "./IntlContext";

export const SwitchLang = props => {
  const { locale, handleChangeLocale } = useContext(LocaleContext);

  const chooseLocal = lang => (lang === "en" ? "zh" : "en");

  return (
    <div>
      <button
        onClick={() => {
          handleChangeLocale(chooseLocal(locale));
        }}
      >
        {locale}
      </button>
    </div>
  );
};
