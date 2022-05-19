import axios from 'axios'

const notFoundSeries = [17, 113, 119, 121, 135, 173, 223, 264]

export const getShowByID = async (id) => {
  if (notFoundSeries.includes(id)) return
  try {
    const URI = `https://api.tvmaze.com/shows/${id}`
    const { data } = await axios.get(URI)
    const cast = await getCast(id)
    data.cast = cast
    return data
  } catch (error) {
    console.log(error.message)
    return { sms: 'Something went wrong -> ' + error.message }
  }
}
export const getCast = async (showId) => {
  try {
    const URI = `https://api.tvmaze.com/shows/${showId}/cast`
    const { data } = await axios.get(URI)
    return data
  } catch (error) {
    console.log(error.message)
    return { sms: 'Something went wrong -> ' + error.message }
  }
}
export const getShowByName = async (name) => {
  try {
    const URI = `https://api.tvmaze.com/singlesearch/shows?q=${name}&embed=episodes`
    const { data } = await axios.get(URI)
    return data
  } catch (error) {
    console.log(error.message)
    return { sms: 'Something went wrong -> ' + error.message }
  }
}

export const getShowsByQuestion = async (q) => {
  try {
    const URI = `https://api.tvmaze.com/search/shows?q=${q}`
    const { data } = await axios.get(URI)
    return data
  } catch (error) {
    console.log(error.message)
    return { sms: 'Something went wrong -> ' + error.message }
  }
}

export const getManyShows = async (n = 20, begin = 1) => {
  try {
    const series = []
    for (let i = begin; series.length < begin + n; i++) {
      const show = await getShowByID(i)
      show && series.push(show)
    }
    return series
  } catch (error) {
    console.log(error.message)
    return { sms: 'Something went wrong -> ' + error.message }
  }
}

export const getShowsByGenre = async (genre, n = 20, begin = 100) => {
  try {
    const series = []
    for (let i = begin; series.length < n; i++) {
      const show = await getShowByID(i)
      show && show.genres.includes(genre) && series.push(show)
    }
    return series
  } catch (error) {
    console.log(error.message)
    return { sms: 'Something went wrong -> ' + error.message }
  }
}
