import { useEffect, useState } from "react";
import SurahCard from "./SurahCard";
import { Link } from "react-router-dom";

export default function List() {
    const [list, setList] = useState([])
    const [search, setSearch] = useState('')
    const filterd = list.filter(surah => surah.surahName.toLowerCase().includes(search.toLowerCase()) ||
        surah.surahNameArabic.trim().includes(search.trim()))
    useEffect(() => {
        async function fetchData() {
            const api = 'https://quranapi.pages.dev/api/surah.json'
            const data = await fetch(api)
            const  json =  (await data.json()).map((surah, index) => ({ ...surah, id: index + 1 }))
            console.log(json)
            setList(json)
        }
        fetchData()

    }, [])

    return (
        <>
            <div className=" font-bold text-4xl m-4 text-green-800 font-serif border-2 rounded-4xl p-2">
                <h1>
                    <div className="flex justify-center">THE HOLY</div>
                    <div className="flex justify-center">QURAN</div>
                </h1>
                <div className="  flex items-center  justify-center">
                    <img src="images/14192537.png" width={'120px'} alt="" />
                </div>


            </div>
            <div className="flex justify-center items-center">
                <input type="text"
                    placeholder="Search by surah name..."
                    className="border-2 rounded-3xl text-black text-xl p-2  font-normal w-96 border-green-800"
                    onChange={(e) => setSearch(e.target.value)} />

            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8    ">

                {filterd.map((item) => <Link key={item.id} to={`/chapters/${item.id}`} > <SurahCard item={item}  /></Link>)}
            </div>
        </>
    )
}