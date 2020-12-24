import React, { useState } from "react"
import data from "../bible-chaps"
import { uuid } from "uuidv4"

export default function Home() {
  const [bookInput, setBookInput] = useState("")
  const color = {
    hovered: "#bada55",
    regular: "inherit",
  }
  const changeBackground = e => {
    e.target.style.background = color.hovered
  }
  const changeBackgroundBack = e => {
    e.target.style.background = color.regular
  }
  const getBook = input => {
    const results = data.fuzzySearch(data.trie, input)

    if (results.length > 0) {
      return (
        <div className="found">
          {results.map(r => (
            <p
              key={uuid()}
              onMouseEnter={changeBackground}
              onMouseLeave={changeBackgroundBack}
            >
              {r} | ({data.booksAggregated[r].start}-
              {data.booksAggregated[r].end})
            </p>
          ))}
        </div>
      )
    }
    return (
      <div className="not-found">
        <p className="typewriter">
          Not finding '{input}' in the list of Bible books
        </p>
      </div>
    )
  }

  const makeOutput = input => {
    return input.length < 2 ? (
      <div>
        <p className="typewriter">Enter the name of any book in the Bible...</p>
      </div>
    ) : (
      getBook(input)
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
        <label htmlFor="bible-book"> Book of the Bible </label>
      </div>
      <div className="main__output">{makeOutput(bookInput)}</div>
    </div>
  )
}
