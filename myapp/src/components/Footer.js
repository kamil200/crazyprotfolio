import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='bg-black text-center text-white'>
      <MDBContainer className=''>
        <MDBBtn outline color="light" floating className='m-1' href='https://open.spotify.com/user/0i8slbved95516dua4drxxv0w' role='button'>
            <MDBIcon fab icon='spotify' />
          </MDBBtn>
        <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/kamil-patel/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#/facebook' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/KamilAbha' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#/snapchat' role='button' >
            <MDBIcon fab icon='snapchat' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#/insta' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.youtube.com/watch?v=zL19uMsnpSU' role='button'>
            <MDBIcon fab icon='youtube' />
          </MDBBtn>
         
        
      </MDBContainer>

      
    </MDBFooter>
  );
}