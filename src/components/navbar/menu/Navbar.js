
import { Disclosure,  } from '@headlessui/react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'
import {Link} from 'react-router-dom'
import {selectLanguage} from '../../../redux/action/languages'
import { connect } from 'react-redux'
import { useState } from 'react'
import DropDownlang from '../../navbar/index'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



function Navbar({languages}) { 
   const {home, movie,tvserial} = languages;
 const [current,setCurrent] =  useState(0);



 const data = [ {id : 1, name : home, to:"/", current: false },
 {id : 2, name: movie, to: "/allmovie", current: false},
 {id : 3, name: tvserial, to: "/tvserials", urrent: false}]
 

  return (
    <header  className='sticky top-0 z-30  navbar_header '>
    <Disclosure as="nav"   className="bg-navbar-dark opacity-70  ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  ">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-20 w-auto lg:hidden logo-div"
                    src="https://images.creativemarket.com/0.1.0/ps/7414066/1820/1214/m1/fpnw/wm1/logo-design-for-movie-production-company-01-.jpg?1575502358&s=c37b3e6a8863b415070b669f6c8a457c"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-10 w-auto lg:block logo-div"
                    src="https://images.creativemarket.com/0.1.0/ps/7414066/1820/1214/m1/fpnw/wm1/logo-design-for-movie-production-company-01-.jpg?1575502358&s=c37b3e6a8863b415070b669f6c8a457c"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex  space-x-4 ">
                    { data.map((item) => (
                      <Link
                        key={item.id}
                        to={item.to}
                        defaultValue={current}
                        onClick={() => {
                          setCurrent(item.id)}}
                        className={classNames(
                          (current === item.id) ? 'bg-gray-900 text-white border-b-4 border-indigo-600' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={current ? 'page' : ''}
                      >
                      {item.name}
                      </Link>
                    ))}
                    
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               <DropDownlang/>
            
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {data.map((item) => (
                <Link
                  key={item.id}
                  as="a"
                  to={item.to}
                   onClick={() => setCurrent(item.id)}
                  className={classNames(
                   (current === item.id) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={current ? "page" : ""}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </header>
  )
}
const mapStateToProps = (state) =>({
    languages : state.Languages
}) 

export default connect(mapStateToProps, {selectLanguage})(Navbar)