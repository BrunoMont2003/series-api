import React, { useState } from 'react'

export const MyContext = React.createContext({})
export const MyContextProvider = ({ children }) => {
  const [recommendedShows, setRecommendedShows] = useState([])
  const [tempGenres, setTempGenres] = useState([{ shows: [] }])
  return (
    <MyContext.Provider
      value={{ recommendedShows, setRecommendedShows, tempGenres, setTempGenres }}
    >{children}
    </MyContext.Provider>
  )
}
