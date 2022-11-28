import Header from '../Header'
import RestaurantsOffers from '../RestaurantsOffers'
import RestaurantsList from '../RestaurantsList'
import Footer from '../Footer'
import './index.css'

const Home = () => (
  <>
    <Header activeTabId="Home" />
    <RestaurantsOffers />
    <RestaurantsList />
    <Footer />
  </>
)

export default Home
