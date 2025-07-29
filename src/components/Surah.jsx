import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Surah() {
    const [fontSize, setFontsize] = useState('text-lg')
    const [surah, setSurah] = useState({})
    const { id } = useParams()
    useEffect(() => {
        async function fetchData() {
            const api = `https://quranapi.pages.dev/api/${id}.json`
            const data = await fetch(api)
            const json = await data.json()
            setSurah(json)
        }
        fetchData()
    }, [])
    const increaseFont = () => setFontsize('text-3xl')
    const decreaseFont = () => setFontsize('text-lg')
     return (
        <div className="flex flex-col items-center gap-8 px-4 py-10 bg-white min-h-screen">
           
            <h1 className="text-3xl font-extrabold text-[#b8860b] border-b-4 border-[#b8860b] pb-2 px-4 rounded-md shadow-sm">
                {surah.surahName}
            </h1>

           
            <div className="flex gap-4 bg-[#fdf6e3] border border-[#b8860b] rounded-xl px-6 py-3 shadow-md">
                <button
                    onClick={increaseFont}
                    className="bg-[#b8860b] hover:bg-[#a47400] text-white font-semibold px-4 py-2 rounded-lg transition duration-200"
                >
                    Increase Font
                </button>
                <button
                    onClick={decreaseFont}
                    className="bg-[#b8860b] hover:bg-[#a47400] text-white font-semibold px-4 py-2 rounded-lg transition duration-200"
                >
                   Decrease Font
                </button>
            </div>

            {/* الآيات */}
            <div className="w-full max-w-3xl bg-white border border-gray-300 rounded-xl shadow-lg p-6 space-y-6 text-right leading-relaxed">
                {surah.arabic1?.map((ayah, index) => (
                    <p key={index} className={`${fontSize} text-green-900`}>
                        <span className={`text-[#b8860b] font-bold ${fontSize} bg-gray-100 px-3 py-1 rounded-full mx-2`}>
                            {index + 1}
                        </span>
                        {ayah}
                    </p>
                ))}
            </div>
        </div>
    )
}