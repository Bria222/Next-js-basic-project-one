import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
const Header = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <Link href='/' className='nav-link'>
            <span>Brian Tech</span>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 '>
              <li className='nav-item'>
                <Link href='/' className='nav-link'>
                  {' '}
                  Home
                </Link>
              </li>
              <li class='nav-item'>
                <Link href='about' className='nav-link'>
                  {' '}
                  About
                </Link>
              </li>
              <li class='nav-item'>
                <Link href='code' className='nav-link'>
                  {' '}
                  code
                </Link>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='contact'>
                  Contact
                </a>
              </li>
            </ul>
            <form class='d-flex'>
              <input
                class='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button class='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
