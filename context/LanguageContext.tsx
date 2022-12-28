import React, {
  useEffect,
  useState,
  FC,
  ReactNode,
  createContext,
} from "react";

import { dictionaryList } from "../languages";

interface LangState {
  language: string;
}

interface LangStateProps {
  children: ReactNode;
}

interface ContextProps {
  language: string;
  dictionary: (key: string) => string;
  changeLangHandler: (newLang: string) => void;
}

export const LanguageContext = createContext({} as ContextProps);

const LangeguageContexProvider: FC<LangStateProps> = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const changeLangHandler = (newLang: string) => setLanguage(newLang);

  useEffect(() => {
    let dir = language === "fa" ? "rtl" : "ltr";
    if (document) {
      document.querySelector("html").setAttribute("dir", dir);
      document.querySelector("html").setAttribute("lang", language);
    }
  }, [language]);

  const dictionary = (key: string): string => {
    let langData: { [key: string]: string } = {};

    if (language === "en") {
      langData = dictionaryList["en"];
    } else if (language === "fa") {
      langData = dictionaryList["fa"];
    }

    return langData[key];
  };

  return (
    <LanguageContext.Provider
      value={{ language, dictionary, changeLangHandler }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LangeguageContexProvider;
