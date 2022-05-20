import { useState, createContext, useContext } from 'react'

export const MyContext = createContext({})
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
export const useMyContext = () => {
  return useContext(MyContext)
}
