import React,{useContext} from 'react';
import ScrollingMessage from './ScrollingMessage';
import { Helmet } from 'react-helmet';
import Icon from './Icon';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { BrowserRouter as Router, Route, Link, Routes, useLocation, useSearchParams } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faHome,faHandshake } from '@fortawesome/free-solid-svg-icons';
import Images from './Images/logo.png';
import videos from './videos/Home3D.mp4';
import './App.css'; 
import Logout from './Logout';
import About from './About';
import Company from './Company';
import Dealer from './Dealer';
import Companysell from './Companysell';
import Companytrash from './Companytrash';
import Dealerproduct from './Dealerproduct';
import Dealertrash from './Dealertrash';
import Cart from './Cart';
import FormDealer from './FormDealer';
import Faq from './Faq';
import ProductDetail from './Productdetail';
import Companylogin from './Companylogin';
import Companyregister from './Companyregister';
import Dealerregister from './Dealerregister';
import Dealerlogin from './Dealerlogin';
import BidForm from './BidForm';
import { AuthContext } from './AuthContext';
import BiddingFormPage from './BiddingFormPage';
import ForgotPage from './ForgotPage';
import OtpValidation from './OtpValidation';
import SuccessOtp from './SuccessOtp';
import Logpage from './Homepage';
import Highestbidpage from './Highestbidpage';

function App() {
   
  const {companylogin,dealerlogin} = useContext(AuthContext);

  return (
    
    <Router> 
      <Helmet>
      <title>E-waste Management</title>
      </Helmet>
      <div className='App'>
        <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand>
              <img
                src={Images}
                height="30"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                
              <Dropdown as={ButtonGroup}>
                <Link to="/log">
                  <Button variant="primary" style={{ fontWeight: 'bold' }}>
                    <FontAwesomeIcon icon={faHome} />&nbsp;&nbsp;Home
                    </Button>
                  </Link>
              <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/cregister">Company Register</Dropdown.Item>
                <Dropdown.Item as={Link} to="/dregister">Dealer Register</Dropdown.Item>
                <Dropdown.Item as={Link} to="/clogin">Company Login</Dropdown.Item>
                <Dropdown.Item as={Link} to="/dlogin">Dealer Login</Dropdown.Item>
              </Dropdown.Menu>
              </Dropdown>

              { companylogin && (
              <Dropdown as={ButtonGroup}>
                <Link to="/company">
                  <Button variant="primary" style={{ fontWeight: 'bold' }}>
                    <FontAwesomeIcon icon={faGlobe} />&nbsp;&nbsp;Company
                    </Button>
                  </Link>
                <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />
                <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/sell">Sell Products</Dropdown.Item>
                <Dropdown.Item as={Link} to="/trash">Remove Trash</Dropdown.Item>
                <Dropdown.Item as={Link} to="/cart">Orders</Dropdown.Item>
                <Dropdown.Item as={Link} to="/bid">Bidding</Dropdown.Item>
                <Dropdown.Item as={Link} to="/highestbid">Highestbids</Dropdown.Item>
               </Dropdown.Menu>
              </Dropdown>)}

             {dealerlogin &&(              
              <Dropdown as={ButtonGroup}>
                <Link to="/dealer">
                  <Button variant="primary" style={{ fontWeight: 'bold' }}>
                    <FontAwesomeIcon icon={faHandshake} />&nbsp;&nbsp;Dealer
                    </Button>
                  </Link>
                <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />
                <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/product">Products</Dropdown.Item>
                <Dropdown.Item as={Link} to="/displaytrash">Trash/Earn</Dropdown.Item>
                <Dropdown.Item as={Link} to="/bidform">Bidding</Dropdown.Item>
               </Dropdown.Menu>
              </Dropdown>)}

                <Nav.Link as={Link} to="/About" style={{ fontWeight: 'bold',color:'white' }}>
                  <i class="fa-regular fa-address-card"></i>&nbsp;&nbsp;About
                  </Nav.Link>

                <Nav.Link as={Link} to="/Faqs" style={{ fontWeight: 'bold',color:'white', marginRight: '100px' }}>
                  <i class="fa-solid fa-person-circle-question"></i>&nbsp;&nbsp;Faqs
                  </Nav.Link>
                
                {(dealerlogin || companylogin) &&(
                <Nav.Link as={Link} to="/logout" style={{ fontWeight: 'bold',color:'white' }}>
                  <i class="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Logout
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cregister" element={<Companyregister />} />
          <Route path='/clogin' element={<Companylogin />} />
          <Route path='/dregister' element={<Dealerregister />} />
          <Route path='/dlogin' element={<Dealerlogin />} />
          <Route path='/About' element={<About />} />
          <Route path='/Faqs' element={<Faq />} />
          <Route path='/Company' element={<Company />} />
          <Route path='/sell' element={<Companysell />} />
          <Route path='/trash' element={<Companytrash />} />
          <Route path='/Dealer' element={<Dealer />} />
          <Route path='/product' element={<Dealerproduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/displaytrash' element={<Dealertrash />} />
          <Route path='/form' element={<FormDealer />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path='/bid' element={<BidForm />} />
          <Route path='/bidform' element={<BiddingFormPage />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/forgot' element={<ForgotPage/>}/>
          <Route path='/otpvalid' element={<OtpValidation/>}/>
          <Route path='/success' element={<SuccessOtp/>}/>
          <Route path='/log' element={<Logpage />} />
          <Route path='/highestbid' element={<Highestbidpage/>} />
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';

  return (
    <div className='content'>
      <Icon />
      {isHomePage || isLoginPage ? (
        <div className='videoplayer'>
          <video className="video-bg" autoPlay loop muted>
            <source src={videos} type="video/mp4" />
          </video>
          <ScrollingMessage />
          
        </div>
      ) : null}
    </div>
  );
}

export default App;

