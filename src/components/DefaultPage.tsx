import Footer from './Footer'
import HomePage from './HomePage'
import Sidebar from './Sidebar'

const DefaultPage = () => (
  <div className="h-screen flex flex-col">
    <div className="flex flex-1">
      <Sidebar />
      <HomePage />
    </div>
    <Footer />
  </div>
)
export default DefaultPage
