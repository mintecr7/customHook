import { IntlProvider } from 'react-intl';

import '@/App.css'
import Jokes from '@/Pages'
import useLanguageStore from '@/store/language';
import en from '@/languages/en.json'
import ko from '@/languages/ko.json'

function App() {

  const { language } = useLanguageStore()

  

  const messages = {
    en,
    ko
  }[language]

 

  return (
    <IntlProvider
      locale={language}
      messages={messages}
    >
        <Jokes/>
       
    </IntlProvider>
  )
}

export default App

