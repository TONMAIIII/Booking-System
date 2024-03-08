'use client'
import { useRouter } from 'next/navigation';
const LanguageSwitcher = ({ Lang }) => {
    const router = useRouter();

    const changeLanguage = (language) => {
    console.log('Current Locale:', router.locale);
      router.push(language);
    };

    let languageButton
    if (Lang == "th"){
        languageButton = (
            <button onClick={() => changeLanguage('th')}  className="button-lang text-colour-button-lang">
                <span>🇹🇭</span>
            </button>
        )
    }    
    else if (Lang == "en"){
        languageButton = (
            <button onClick={() => changeLanguage('en')}  className="button-lang text-colour-button-lang">
                <span>🇺🇸</span>
            </button>
        )
    }    
    else {
        languageButton = (
            <button onClick={() => changeLanguage('404')}  className="button-lang text-colour-button-lang">
                <span>404</span>
            </button>
        )
    }

    return (
        <a>
            {languageButton}
        </a>
    );
  };
  
  export default LanguageSwitcher;