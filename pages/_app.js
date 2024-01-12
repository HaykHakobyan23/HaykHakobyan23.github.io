import '@/styles/globals.css'
import { createContext, useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components'
import { ServerStyleSheet } from 'styled-components';
import { useRouter } from "next/router"
import { IntlProvider } from "react-intl";
import am from "@/i18n/am.json"
import ru from "@/i18n/ru.json"
import en from "@/i18n/en.json"

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Hedvig+Letters+Serif:opsz@12..24&family=PT+Sans:wght@700&family=Playfair+Display:ital@1&family=Roboto:wght@400;500;700&family=Rubik+Bubbles&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
  body {
    background-color: #F9E5FF;
    padding: 0; 
    margin: 0;
    font-size: 18px;
    font-weight: 300;
    line-height: 24px;
    transition: all .9s;
   p{
    font-family: 'Gotham',sans-serif;
   }
  }
  html {
    scroll-behavior: smooth;
}

a{
  text-decoration: none;
}
`;


const messages = {
  am,
  en,
  ru
}

function getDirection(locale) {
  return "ltr"
}


export const LangContext = createContext("am")

export default function App({ Component, pageProps }) {
  const sheet = new ServerStyleSheet();
  const styleTags = sheet.getStyleElement();
  const [isClient, setIsClient] = useState(false)
  const { locale } = useRouter()
  console.log(locale)
  useEffect(() => {
    setIsClient(true)
  }, [])


  return (
    <>
      <IntlProvider locale={locale} messages={{
        ...messages[locale].home,
        ...messages[locale].header,
        ...messages[locale].nav,
        ...messages[locale].whyChooseUs,
        ...messages[locale].whatwedo,
        ...messages[locale].project,
        ...messages[locale].about,
        ...messages[locale].team,
        ...messages[locale].contact,
      }} defaultLocale="am">
        {isClient &&
          <>
            <GlobalStyles />
            <LangContext.Provider value={{locale}}>
              <Component {...pageProps} />
            </LangContext.Provider>
          </>
        }
      </IntlProvider>
    </>
  )
}
