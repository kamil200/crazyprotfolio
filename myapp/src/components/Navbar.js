import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';
import Pdf from '../resume/kamil-patel-resume (3).pdf';
export default function App() {
  const [showNavCentred, setShowNavCentred] = useState(false);

  const toggleNavbar = () => {
    setShowNavCentred(!showNavCentred);
  };

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarCenteredExample'
          aria-controls='navbarCenteredExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={toggleNavbar}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavCentred} center id='navbarCenteredExample'>
          <MDBNavbarNav fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink
                active
                aria-current='page'
                href='#/about'
                onClick={toggleNavbar}
              >
                About ME
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#/work' onClick={toggleNavbar}>
                Work
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
            <MDBNavbarLink href='#/projects' onClick={toggleNavbar}>
                Projects
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBNavbarLink href={Pdf} target="_blank" rel="noopener noreferrer" onClick={toggleNavbar}>
                Resume
              </MDBNavbarLink>
            </MDBNavbarItem>
            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
