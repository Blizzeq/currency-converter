import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from "mdb-react-ui-kit";

function Navbar(props) {


    return (
        <>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer>
                    <MDBNavbarBrand href='#'>Currency Converter</MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}

export default Navbar;
