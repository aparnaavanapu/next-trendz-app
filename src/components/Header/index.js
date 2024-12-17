import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <ul className="nav-menu">
        <li>
          <Link to="/home" className="nav-link">
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png" alt="nav-home" className="nav-icon"/>
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav-link">
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png" alt="nav-products" className="nav-icon"/>
          </Link>
        </li>
        <li>
          <Link to="/cart" className="nav-link">
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png " alt="nav-cart" className="nav-icon"/>
          </Link>
        </li>
      </ul>
      <button type="button" className="logout-desktop-btn">
        <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png " alt="nav-logout" className="nav-icon"/>
      </button>
      <button type="button" className="logout-mobile-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="logout icon"
          className="logout-icon"
        />
      </button>
    </div>
  </nav>
)
export default Header
