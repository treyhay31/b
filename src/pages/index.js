import React, { useState } from "react"

export default function Home() {
  const [bookInput, setBookInput] = useState("")

  const isNoMatch = input => {
    return false
  }

  const makeOutput = input => {
    return input.length < 2 || isNoMatch(input) ? (
      <h2>
        Enter the name of any book in the Bible... Or you could enter the
        chapter number... Genesis 1 being (1) and Revelation x being (1000)
      </h2>
    ) : (
      <h2>here is your output</h2>
    )
  }

  return (
    <div className="main">
      <div className="main__display">
        <h1>Enter Book of the Bible</h1>
      </div>
      <div className="main__input">
        <input
          id="bible-book"
          type="text"
          name="book"
          value={bookInput}
          onChange={e => setBookInput(e.target.value)}
        />
        <label for="bible-book"> Book of the Bible </label>
      </div>
      <div className="main__output">{makeOutput(bookInput)}</div>
    </div>
  )
}
