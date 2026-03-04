'use client'

import { useEffect, useState } from "react"
import { TitleList } from "./animes.type"


export default function AnimeRealeses() {
    const [state, setState] = useState<TitleList[]>([])

    const getAnimesTitles = async () => {
        const res = await fetch('https://anilibria.top/api/v1/anime/schedule/week')
        const data = await res.json()
        setState(data)
    }

    useEffect(() => {
        getAnimesTitles()
    }, []);

    console.log(state)


    return (
        <div>

        </div>
    );
}


// /anime/releases/latest