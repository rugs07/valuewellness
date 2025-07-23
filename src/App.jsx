import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'
import GetHelpButton from './components/GetHelpButton'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <AppRoutes />
        </main>
        <Footer />
        <GetHelpButton />
      </div>
    </BrowserRouter>
  )
}

export default App
