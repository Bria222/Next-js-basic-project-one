'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import LoadingPage from './loading'
import Courses from './componets/Courses'
import CourseSearch from './componets/CourseSearch'

const HomePage = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses')
      const data = await res.json()
      setCourses(data)
      setLoading(false)
    }

    fetchCourses()
  }, [])

  if (loading) {
    return <LoadingPage />
  }

  return (
    <>
      <h1>Welcome To Brian Tech</h1>
      <h2>courses i recomend for you</h2>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </>
  )
}
export default HomePage
