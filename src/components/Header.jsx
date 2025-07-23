import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white shadow flex items-center justify-between px-6 py-4">
      <div className="font-bold text-xl">
        <Link to="/">VW CLINIC</Link>
      </div>
      <nav className="space-x-6">
        <Link to="#" className="hover:underline">Hair</Link>
        <Link to="#" className="hover:underline">Skin</Link>
        <Link to="#" className="hover:underline">Anti Aging</Link>
        <Link to="#" className="hover:underline">Laser</Link>
        <Link to="#" className="hover:underline">Body Countering</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="#" className="hover:underline">Gallery</Link>
      </nav>
      <button className="bg-[#D3C2FF] text- hover:bg-purple-200 px-4 py-2 font-bold cursor-pointer">Book Appointment</button>
    </header>
  )
}

export default Header 