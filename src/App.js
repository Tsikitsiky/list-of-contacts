import { ChakraProvider } from '@chakra-ui/react'
import ContactsList from './components/lists'
import SearchBar from './components/search-bar'
import Header from './components/Header'
import { useState } from 'react'
import { useEffect } from 'react'
import endPoint from './api'

function App() {
  const [data, setData] = useState([])
  const [dataToDisplay, setDataToDisplay] = useState(data)
  const [query, setQuery] = useState('')
  async function fetchData() {
    const response = await fetch(endPoint)
    const data = await response.json()
    setData(data)
    setDataToDisplay(data.sort((a, b) => (a.last_name > b.last_name ? 1 : -1)))
  }

  useEffect(() => {
    setDataToDisplay(
      data
        .filter(
          (item) =>
            item.first_name.toLowerCase().includes(query.toLocaleLowerCase()) ||
            item.last_name.toLowerCase().includes(query.toLocaleLowerCase())
        )
        .sort((a, b) => (a.last_name > b.last_name ? 1 : -1))
    )
  }, [query])

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <ChakraProvider>
      <Header />
      <SearchBar value={query} handleChange={(e) => setQuery(e.target.value)} />
      <ContactsList data={dataToDisplay} />
    </ChakraProvider>
  )
}

export default App
