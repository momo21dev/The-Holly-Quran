export default function SurahCard({ item, index }) {
  return (
    <div className="border-2 border-green-800 rounded-xl p-4 text-center shadow-md bg-white 
                    transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border-green-600
                    hover:border-4 relative flex flex-col items-center">

      <div className="absolute -top-4 -left-4 bg-green-800 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm shadow-md">
        {index}
      </div>

      <h1 className="font-bold text-lg text-green-900 mt-2">{item.surahName}</h1>
      <p className="text-green-900">{item.surahNameArabic}</p>
      
      <p className="text-green-900">{item.surahNameTranslation}</p>
      <span className="text-green-900">مكان نزول السورة: {item.revelationPlace}</span>
      <h3 className="text-green-900">عدد الآيات: {item.totalAyah}</h3>
    </div>
  );
}
