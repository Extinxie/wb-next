'use client'

import { useMemo, useState } from 'react';
import { LANGUAGES } from './langauges.data';
import cookies from "js-cookie"


export default function SwitchLanguage() {
    const [currentLanguage, setCurrentLangage] = useState<'en' | 'ru'>(cookies.get('locale') === 'en' ? 'en' : 'ru')

    const toggleHandler = () => {
        const selectLanguage = currentLanguage === 'ru' ? 'en' : 'ru'
        setCurrentLangage(selectLanguage)
        cookies.set('locale', selectLanguage)

    }

    const language = useMemo(() => {
        return LANGUAGES.find(lang => lang.code === currentLanguage)
    }, [currentLanguage])

    return (
        <button
            className='flex items-center gap-1 w-12'
            onClick={toggleHandler}>
            <span className='text-lg hover:rotate-3 transition-transform'>{language?.region}</span>
            <span className='uppercase font-medium opacity-50 hover:opacity-90 duration-200 hover:rotate-3 transition-transform'>{language?.code}</span>
        </button>
    );
}