import React, { useEffect, useState } from 'react'
import { alphabetData } from './data'

const Alphabet = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(alphabetData)
  }, [])

  //  Speak Function
  const speakText = (text) => {
    const speech = new SpeechSynthesisUtterance(text)

    speech.lang = "en-US"
    speech.rate = 0.9
    speech.pitch = 1

    // stop previous speech
    window.speechSynthesis.cancel()

    window.speechSynthesis.speak(speech)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-300 via-purple-400 to-pink-200 p-6">
      
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Alphabet Learning
      </h1>

      {/* Grid */}
      <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => speakText(`${item.letter} for ${item.word}`)}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 p-4 flex flex-col items-center text-center cursor-pointer"
          >
            {/* Letter */}
            <h2 className="text-2xl font-bold text-purple-600">
              {item.letter}
            </h2>

            {/* Image */}
            <img
              src={item.img}
              alt={item.word}
              className="w-25 h-25 object-cover rounded-full mt-2 border-4 border-pink-200"
            />

            {/* Word */}
            <p className="mt-2 text-sm text-gray-600 font-medium">
              {item.word}
            </p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Alphabet