import HomePage from './HomePage'
import Navbar from './Navbar'
import Footer from './Footer'
import OMnie from './OMnie'
import Contact from './Contact'
import Galeria from './Galeria'
import Book1 from './BooksSites/Book1'
import Book2 from './BooksSites/Book2'
import Book3 from './BooksSites/Book3'
import Book4 from './BooksSites/Book4'
import Book5 from './BooksSites/Book5'
import Book6 from './BooksSites/Book6'
import Books from './Books'
import './App.css'
import ScrollToTop from './ScrollToTop'
import Carousel from './Carousel'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    
    <>

      <Router>
        <Navbar />
        <ScrollToTop />
        <Carousel />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/about_me' element={<OMnie />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/galery' element={<Galeria />} />
          <Route path='/books' element={<Books />} />
          <Route path='/book1' element={<Book1 />} />
          <Route path='/book2' element={<Book2 />} />
          <Route path='/book3' element={<Book3 />} />
          <Route path='/book4' element={<Book4 />} />
          <Route path='/book5' element={<Book5 />} />
          <Route path='/book6' element={<Book6 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
