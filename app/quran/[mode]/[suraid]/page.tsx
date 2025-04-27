import SurahPage from "@/components/quran/surahPage";
import quran_hafs from '../../../../components/quran/hafs/hafsData_v2-0.json'
import quran_warsh from '../../../../components/quran/warsh/warshData_v2-1.json'
import quran_shubah from '../../../../components/quran/shubah/shubaData_v2-0.json'
import quran_qaloun from '../../../../components/quran/qaloun/QalounData_v2-1.json'
import quran_duri from '../../../../components/quran/duri/DouriData_v2-0.json'
import quran_susi from '../../../../components/quran/susi/SousiData_v2-0.json'
import { ReactNode } from "react";


// lire la surahid donné

export default async function Surah({params} : {params : Promise<{suraid: string}>}){
    const { suraid } = await params
    const mode = suraid.split("-")[0]
    const surano = suraid.split("-")[1]

    let quranModeSelected = quran_hafs

    if (mode == "hafs"){
        quranModeSelected = quran_hafs
    }
    if (mode == "warsh"){
        quranModeSelected = quran_warsh
    }
    if (mode == "shubah"){
        quranModeSelected = quran_shubah
    }
    if (mode == "qaloun"){
        quranModeSelected = quran_qaloun
    }
    if (mode == "duri"){
        quranModeSelected = quran_duri
    }
    if (mode == "susi"){
        quranModeSelected = quran_susi
    }    

    let pages_avaible : number[] = []
    for (const verse of quranModeSelected){
        if ((verse.sura_no).toString() == surano){
            if (!pages_avaible.includes(verse.page)){
                pages_avaible.push(verse.page)
            }
        }
    }
    
    // const pages = <SurahPage mode={mode} pageNo={2} surahName_ar="..." surahName_phon="...2" />
    // const pages = quranModeSelected_text.map((verse) => {
    //         <SurahPage mode={mode} pageNo={verse.page} surahName_ar="..." surahName_phon="...2" />
    //     })
    const pages : ReactNode[] = []
    let i = 1
    for (const pageno of pages_avaible){
            pages.push(<SurahPage key={i} mode={mode} pageNo={pageno} suraNo={surano} surahName_ar="..." surahName_phon="...2" />)
            i++
    }
    
    return(
        <main className='bg-neutral-950 w-full h-[100%] flex flex-col justify-center text-2xl pb-24'>
            {/* faire en sorte de détecter la n-ième page d'une sourate */}
            {pages}
            {/* <SurahPage mode={mode} pageNo={1} surahName_ar="..." surahName_phon="...2" /> */}
        </main>
    )
}