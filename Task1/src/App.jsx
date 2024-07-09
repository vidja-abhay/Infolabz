import movieData from './assets/data/data.js'
import Movie from './components/Movie.jsx'

function App() {

  console.log(movieData[0].name)

  return (
    <>
      <Movie />
    </>
  )
}

export default App
