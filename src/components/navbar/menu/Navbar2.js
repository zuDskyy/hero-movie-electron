
import {Link} from 'react-router-dom'
import {selectLanguage} from '../../../redux/action/languages'
import { connect } from 'react-redux'
import { useState } from 'react'
import DropDownlang from '../../navbar/index'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Navbar2({languages}) { 
   const {home, movie,tvserial} = languages;
 const [current,setCurrent] =  useState(0);



 const data = [ {id : 1, name : home, to:"/", current: false },
 {id : 2, name: movie, to: "/allmovie", current: false},
 {id : 3, name: tvserial, to: "/tvserials", urrent: false}]
 

  return (

    <Navbar  bg="black" className='opacity-70 ' variant="black">
        <Container >
          <Navbar ><img className=" h-20 w-auto  logo-div"
            src="https://images.creativemarket.com/0.1.0/ps/7414066/1820/1214/m1/fpnw/wm1/logo-design-for-movie-production-company-01-.jpg?1575502358&s=c37b3e6a8863b415070b669f6c8a457c"
                alt="Your Company"
                  />
                  </Navbar>
          <Nav   className="me-auto" >
          { data.map((item) => (
                      <Link
                        key={item.id}
                        to={item.to}
                        defaultValue={current}
                        onClick={() => {
                          setCurrent(item.id)}}
                        className={
                          (current === item.id) ? 'bg-gray-900 text-white border-b-4 border-indigo-600 px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'   }
                        aria-current={current ? 'page' : ''}
                      >
                      {item.name}
                      </Link>
                    ))}
            
          </Nav>
          <div className=" sticky top-0 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               <DropDownlang/>
        </div>
        </Container>
      </Navbar>


   
  )
}
const mapStateToProps = (state) =>({
    languages : state.Languages
}) 

export default connect(mapStateToProps, {selectLanguage})(Navbar2)