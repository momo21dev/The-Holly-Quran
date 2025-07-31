import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Surah() {
    const [surah, setSurah] = useState({});
    const [fontSize, setFontsize] = useState('text-lg');
    const [translate, setTranslate] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            const api = `https://quranapi.pages.dev/api/${id}.json`;
            const res = await fetch(api);
            const data = await res.json();
            setSurah(data);
        }
        fetchData();
    }, []);

    const increaseFont = () => setFontsize('text-3xl');
    const decreaseFont = () => setFontsize('text-lg');

    return (
        <div className="min-h-screen bg-white text-green-900 px-4 py-10 flex flex-col items-center gap-8">

            {/* أزرار Reading / Translation */}
            <div className="flex gap-4">
                <button
                    onClick={() => setTranslate(false)}
                    className={`px-5 py-2 rounded-full font-semibold transition duration-200 ${!translate
                        ? "bg-[#b8860b] text-white"
                        : "bg-gray-200 text-[#b8860b] hover:bg-gray-300"
                        }`}
                >
                    Reading
                </button>
                <button
                    onClick={() => setTranslate(true)}
                    className={`px-5 py-2 rounded-full font-semibold transition duration-200 ${translate
                        ? "bg-[#b8860b] text-white"
                        : "bg-gray-200 text-[#b8860b] hover:bg-gray-300"
                        }`}
                >
                    Translation
                </button>
            </div>

            {/* أزرار حجم الخط */}
            <div className="flex gap-4">
                <button
                    onClick={increaseFont}
                    className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-900 rounded-md font-semibold"
                >
                    Increase font
                </button>
                <button
                    onClick={decreaseFont}
                    className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-900 rounded-md font-semibold"
                >
                    Decrease font
                </button>
            </div>

            {/* اسم السورة */}
            <h1 className="text-4xl font-extrabold text-[#b8860b] border-b-4 border-[#b8860b] pb-2 px-6 rounded-md shadow-sm">
                {surah.surahName}
            </h1>

            {/* محتوى السورة */}
            <div className="max-w-2xl w-full space-y-6 text-center leading-loose">
                {!translate &&
                    surah.arabic1?.map((ayah, index) => (
                        <p key={index} className={`relative ${fontSize}`}>
                            {ayah}
                            <span className="inline-block font-bold text-[#b8860b] bg-gray-100 border border-[#b8860b] rounded-full w-8 h-8 leading-8 text-center text-sm mx-2">
                                {index + 1}
                            </span>
                        </p>
                    ))}

                {translate &&
                    surah.english?.map((ayah, index) => (
                        <p key={index} className={`text-gray-700 text-left ${fontSize}`}>
                            <span className={` text-[#b8860b] mr-2 ${fontSize}`}>
                                {index + 1}.
                            </span>
                            {ayah}
                        </p>
                    ))}
            </div>
        </div>
    );
}
