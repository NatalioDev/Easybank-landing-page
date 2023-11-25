import './App.css'
import Articles from './components/Articles'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {

  return (
    <>
      <div className="mask" id='mask'></div>
        <main className="container">
          <Header/>
          <Hero/>
          <Content/>
          <Articles/>
          <Footer/>
        </main>
    </>
  )
}

export default App
