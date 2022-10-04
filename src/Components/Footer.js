import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

function Footer(props) {
    return (
        <MDBFooter className='text-center text-white footer fixed-bottom' style={{ backgroundColor: '#f1f1f1' }}>
            <MDBContainer className='pt-3'>
                <section className='mb-3'>
                    <MDBBtn
                        rippleColor="dark"
                        link
                        floating
                        size="lg"
                        className='text-dark m-1'
                        href='https://www.linkedin.com/in/jakub-krasuski-6aa818211/'
                        role='button'
                    >
                        <MDBIcon fab className='fa-linkedin' />
                    </MDBBtn>

                    <MDBBtn
                        rippleColor="dark"
                        link
                        floating
                        size="lg"
                        className='text-dark m-1'
                        href='https://github.com/Blizzeq'
                        role='button'
                    >
                        <MDBIcon fab className='fa-github' />
                    </MDBBtn>
                </section>
            </MDBContainer>
            <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2022 Copyright:
                <a className='text-dark' href='https://github.com/Blizzeq'>
                    Jakub Krasuski
                </a>
            </div>
        </MDBFooter>
    );
}

export default Footer;
