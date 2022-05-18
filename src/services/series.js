import axios from 'axios'

export const getShowByID = async (id) => {
  try {
    const URI = `https://api.tvmaze.com/shows/${id}`
    const { data } = await axios.get(URI)
    return data
  } catch (error) {
    console.log(error)
    return { sms: 'Something went wrong -> ' + error.message }
  }
}
export const getShowByName = async (name) => {
  try {
    const URI = `https://api.tvmaze.com/singlesearch/shows?q=${name}&embed=episodes`
    const { data } = await axios.get(URI)
    return data
  } catch (error) {
    console.log(error)
    return { sms: 'Something went wrong -> ' + error.message }
  }
}

export const getShowsByQuestion = async (q) => {
  try {
    const URI = `https://api.tvmaze.com/search/shows?q=${q}`
    const { data } = await axios.get(URI)
    return data
  } catch (error) {
    console.log(error)
    return { sms: 'Something went wrong -> ' + error.message }
  }
}

export const getManyShows = async (n = 20) => {
  try {
    const series = []
    for (let i = 0; series.length < n; i++) {
      const show = await getShowByID(i)
      series.push(show)
    }
    return series
  } catch (error) {
    console.log(error)
    return { sms: 'Something went wrong -> ' + error.message }
  }
}