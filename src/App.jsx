import { Routes, Route } from 'react-router-dom';
import './App.css'
import './components/Articles.css'

import Header from './components/Header'
import Nav from './components/Nav'
import Articles from './components/Articles'
import Article from './components/Article';

function App() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path='/articles' element={<Articles />} />
        <Route path="/articles/:topic" element={<Articles />} />
        <Route path='/article/:article_id' element={<Article />} /> 
      </Routes>
    </div>
  )
}

export default App
