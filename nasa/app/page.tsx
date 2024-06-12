'use client'

import { useEffect, useState } from "react";

interface APOD {
    url: string,
    copyright: string,
    date: string,
    explanation: string,
    hdurl: string,
    media_type: string,
    title: string,
    service_version: string
}
// interface Promise<APOD>{
//     url: string,
//     copyright: string,
//     date: string,
//     explanation: string,
//     hdurl: string,
//     media_type: string,
//     title: string,
//     service_version: string
// }


export default function Home() {
    const [img, setImg] = useState<APOD | null>(null)
    useEffect(() => {
        getImg()
    }, [])



    async function getImg() {
        let r: APOD;
        r = await fetch('https://api.nasa.gov/planetary/apod?api_key=rI9SdZj4UaEGUddk26WYriw0Y8mOgDySj14qchR3')
            .then(e => e.json()).then(e => {
                console.log(e.hdurl)
                return e as APOD
            })
        setImg(r)
    }

    // const [img, setImg] = useState<any>(null)
    // useEffect(() => { setImg(getImg()) }, [])

    if (img == null) {
        return (<p>Loading...</p>)
    }
    return (
        <div id='apodDIV'>
            <img src={img.hdurl} alt={img.explanation} />
            <p id='APODtitle'>{img.title}<p id='APODcopyright'>{img.copyright}</p></p>

        </div>
    );
}



