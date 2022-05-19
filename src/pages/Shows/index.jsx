import React, { useState } from 'react'
import { CardSecondary } from '../../components/CardSecondary'
import { Layout } from '../../components/Layout'
import { SearchBar } from '../../components/SearchBar'
import { getShowsByQuestion } from '../../services/series'

export const Shows = () => {
  const [question, setQuestion] = useState('')
  const [showsFinded, setShowsFinded] = useState([])
  const searchOnChange = async ({ target: { value } }) => {
    setQuestion(value)
    const result = await getShowsByQuestion(question)
    setShowsFinded(result)
  }
  const searchOnSubmit = async (e) => {
    e.preventDefault()
    const result = await getShowsByQuestion(question)
    setShowsFinded(result)
  }
  return (
    <Layout>
      <section className='flex gap-5 flex-col justify-center items-center search-container min-h-screen w-full  bg-red-500'>
        <article className='h-96 flex flex-col justify-center items-center py-40'>
          <h1 className='text-3xl text-center mb-24'>Looking for a specific show?</h1>
          <SearchBar onChange={async (e) => await searchOnChange(e)} value={question} onSubmit={async (e) => { await searchOnSubmit(e) }} />
        </article>
        <article>
          {showsFinded.length > 0 && question && <h5 className='text-2xl p-5'>Results for {question}</h5>}
          <div className=' flex container justify-center flex-wrap gap-5 py-5'>
            {
            showsFinded.length > 0 && showsFinded.map(({ show }, index) => <CardSecondary show={show} key={index} />)
          }
            {showsFinded.length === 0 && <p>No shows found</p>}
          </div>
        </article>
      </section>

    </Layout>
  )
}
