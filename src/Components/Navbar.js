import React, {useState} from 'react';
import {
    MDBCollapse,
    MDBContainer,
    MDBIcon, MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarItem, MDBNavbarLink,
    MDBNavbarNav,
    MDBNavbarToggler
} from "mdb-react-ui-kit";

function Navbar(props) {

    const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);

    return (
        <>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarTogglerDemo03'
                        aria-controls='navbarTogglerDemo03'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavNoTogglerThird(!showNavNoTogglerThird)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBNavbarBrand href='#'>Currency Converter</MDBNavbarBrand>
                    <MDBCollapse navbar show={showNavNoTogglerThird}>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='#'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}

export default Navbar;
