import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import Work from './components/work/Work'
import Cards from './components/cards/Cards'
import Contact from './components/contact/Contact'
import './App.css';

export default function App() {
  return (
    <div className='app h-screen m-0 font-Ubuntu'>
      <Header />
      <div className="section relative top-16 bg-blue-500 h-[calc(100vh-64px)] snap-mandatory snap-y overflow-scroll scroll-smooth scrollbar-hide">
        <Hero />
        <Cards />
        <Work />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}