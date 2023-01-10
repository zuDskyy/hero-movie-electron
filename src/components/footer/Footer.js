import React from 'react'
import '../../styles/footer.css'
import {Link} from 'react-router-dom'
import { selectLanguage } from "../../redux/action/languages";
import { connect } from 'react-redux';
 import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
const  Footer = ({languages})  => {
  
    const {
       tvserial,
       home,
       movie
      } = languages;
      
  return (
  <div>  
 <MDBFooter bgColor='black' className='text-center opacity-80 bg-black text-lg-start text-white'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom  bg-black'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/zurab-dalakishvili-a7b996220/'  target='blank' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://github.com/ZukaGitHub1'  target='blank' className='me-4 text-reset'>
            <MDBIcon  fab icon="github" />
          </a>
        </div>
      </section>
      <div className='p-3 flex  items-center  w-full '>
        <div className='w-1/2  items-center block md:flex  '>
        <img className='rounded-xl  ' width={100} height={70} src="https://user-images.githubusercontent.com/62456796/177899206-f3f77d8c-833f-4968-aa31-fb360a600eb9.png" alt='tmdb' />
        <h6 className='text-uppercase flex items-center gap-1 fw-bold mb-4'>
                <img className=" h-14 w-auto " alt='alt' src="https://images.creativemarket.com/0.1.0/ps/7414066/1820/1214/m1/fpnw/wm1/logo-design-for-movie-production-company-01-.jpg?1575502358&s=c37b3e6a8863b415070b669f6c8a457c"/>
                Hero Movies
              </h6> </div>
              <section className=' w-1/2  '>
        <MDBContainer className=''>
          <MDBRow className='mt-2'>
            <MDBCol md="3" lg="2" xl="2" className=' block md:flex  text-center  ft-menu'>
                <Link className=' text-reset '>
                  -<p>{home}</p>
                </Link>
                <Link  className='text-reset '>
                 -<p>{movie}</p>
                </Link>
                <Link  className='text-reset   ' >
                 -<p>{tvserial}</p>
                </Link>
             
            </MDBCol>

          </MDBRow>
        </MDBContainer>
      </section>
      </div>
     
      
      <div className='text-center p-4  ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <Link className='text-reset fw-bold p-1'>
           TMDB
        </Link>
      </div>
     
    </MDBFooter>
    </div>
  )
      }

const mapStateToProps = (state) => ({
    languages: state.Languages,
  });

export default connect(mapStateToProps, {
    selectLanguage,
  })(Footer)
  
