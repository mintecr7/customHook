import { atom, useRecoilState, useResetRecoilState } from "recoil"


const syncLanguageState = (language: string) => {
    document.documentElement.lang = language

    localStorage.setItem('local', language)
}


const state = atom({
    key:'language',
    default: '',
    effects: [
        ({onSet, setSelf}) => {
            setSelf(() => {
                const language = (localStorage.getItem('locale') ?? navigator.language.substring(0, 2) ?? 'ko')
                syncLanguageState(language)

                return language
            })

            onSet(syncLanguageState)
        }
    ]
})

const useLanguageStore = () => {
    const [language, setLanguage] = useRecoilState(state)
    const resetLanguage = useResetRecoilState(state)
  
    return {
      language,
      setLanguage,
      resetLanguage
    }
}

export default useLanguageStore