import React, { useState } from 'react'
import { CardSecondary } from '../../components/CardSecondary'
import { Layout } from '../../components/Layout'
import { SearchBar } from '../../components/SearchBar'
import { getShowsByQuestion } from '../../services/series'

export const Shows = () => {
  const [question, setQuestion] = useState('')
  const [showsFinded, setShowsFinded] = useState([])
  const searchOnChange = ({ target: { value } }) => {
    setQuestion(value)
  }
  const searchOnSubmit = async (e) => {
    e.preventDefault()
    const result = await getShowsByQuestion(question)
    setShowsFinded(result)
    console.log(result)
  }
  return (
    <Layout>
      <section className='flex gap-5 flex-col justify-center items-center search-container min-h-screen w-full'>
        <h1 className='text-3xl text-center mb-24'>Looking for a specific show?</h1>
        <SearchBar onChange={(e) => searchOnChange(e)} value={question} onSubmit={(e) => { searchOnSubmit(e) }} />
        <div className=' flex container justify-center sm:justify-start flex-wrap gap-5 py-5'>
          {
            showsFinded.length > 0 && showsFinded.map(({ show }, index) => <CardSecondary show={show} key={index} />)
          }
        </div>
      </section>

    </Layout>
  )
}
