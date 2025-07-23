import { Routes, Route } from 'react-router-dom'
import Home from '../containers/Home'
import About from '../containers/About'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    {/* Add more routes here as needed */}
  </Routes>
)

export default AppRoutes 