"use client"

import { ReactNode } from 'react'
import quran_hafs from './hafs/hafsData_v2-0.json'
import quran_warsh from './warsh/warshData_v2-1.json'
import quran_shubah from './shubah/shubaData_v2-0.json'
import quran_qaloun from './qaloun/QalounData_v2-1.json'
import quran_duri from './duri/DouriData_v2-0.json'
import quran_susi from './susi/SousiData_v2-0.json'

interface SurahPageInterface{
    mode : string
    pageNo : number
    suraNo : number
    surahName_ar : string
    surahName_phon : string
}

export default function SurahPage(prop: SurahPageInterface){
    //changer le mode en fonction de la prop

    let quranModeSelected_text = quran_hafs
    let quranModeSelected_font = "Hafs"

    if (prop.mode == "hafs"){
        quranModeSelected_text = quran_hafs
        quranModeSelected_font = "Hafs"
    }
    if (prop.mode == "warsh"){
        quranModeSelected_text = quran_warsh
        quranModeSelected_font = "Warsh"
    }
    if (prop.mode == "shubah"){
        quranModeSelected_text = quran_shubah
        quranModeSelected_font = "Shubah"
    }
    if (prop.mode == "qaloun"){
        quranModeSelected_text = quran_qaloun
        quranModeSelected_font = "Qaloun"
    }
    if (prop.mode == "duri"){
        quranModeSelected_text = quran_duri
        quranModeSelected_font = "Duri"
    }
    if (prop.mode == "susi"){
        quranModeSelected_text = quran_susi
        quranModeSelected_font = "Susi"
    }

    let i : number = 0
    let page : ReactNode[] = []
    for (const verse of quranModeSelected_text){
        if (Number(verse.page) == prop.pageNo && verse.sura_no == prop.suraNo){
            for (const word of verse.aya_text.split(" ")){
                page.push(<p key={i} className='inline-block ml-[2px] mr-[2px]'>{word}</p>)
                i++
            }
        }
    }

    return (
        <div className='bg-neutral-900 max-w-[100%] m-2 px-2 py-4 rounded-xl' style={{fontFamily: quranModeSelected_font}}>
            
            <div className={`text-center text-white leading-10`} dir='rtl'>
                {page}
            </div>
        </div>
    )
}