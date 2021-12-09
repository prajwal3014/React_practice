import React, {useState, useEffect} from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AddTodo from './Components/AddTodo'
import Display from './Components/Display'

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    fetch("/hello").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  const [add, setAdd] = useState()

  useEffect(() => {
    fetch("/add").then(
      res => res.json()
    ).then(
      add => {
        setAdd(add)
        console.log(add)
      }
    )
  }, [])

  return (
    <>
    <Header/>
    <AddTodo/>
    <Display data = {data} add = {add}/>
    <Footer/>
    </>
  )
}

export default App
