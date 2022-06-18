import React, { useContext } from 'react'
import { observer } from "mobx-react-lite";
import { Link } from 'react-router-dom';
import { Context } from '..';
import { toJS } from 'mobx'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {MenuIcon, XIcon } from '@heroicons/react/outline'
import basketImg from '../img/basket.png'

const Header = observer(({ setActive }) => {
  const { order } = useContext(Context)
  const items = toJS(order.orders)
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)
  const { auth } = useContext(Context)

  const navigation = [
    { name: 'о нас', href: '#2', current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  console.log(auth.isAuth)

  return (
    // <div className="header-page">
    //     <div className="container header-page__container">
    //         <Link to="/">
    //             <div className="header-page__start">
    //                 <div className="logo">
    //                     <div className="logo">
    //                         <img className="logo__img" src="./img/logo.svg" alt="logo" width="127" height="21"></img>
    //                     </div>
    //                 </div>
    //             </div>
    //         </Link>
    //         <div className="header-page__end">
    //             <nav className="header-page__nav">
    //                 <ul className="header-page__ul">
    //                     <li className="header-page__li">
    //                         <a href="#2" className="header-pahe__link">
    //                             <span className="header-page__text">о нас</span></a>
    //                     </li>
    //                     <Link to="/">
    //                         <li className="header-page__li">
    //                             <a className="header-pahe__link">
    //                                 <span className="header-page__text"></span></a>
    //                         </li>
    //                     </Link>
    //                 </ul>
    //             </nav>
    //             <div onClick={() => setActive(true)} className="header__cart">
    //                 <div className="header__cart--basket vl">
    //                     Корзина {totalCount === 0 ? '' : totalCount}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div >
    <Disclosure as="nav" style={{ backgroundColor: "#ffa650" }}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <div className='header-text'>PizzaTime</div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="mt-2 mr-3">
                      <span className="sr-only">Open user menu</span>
                      <img
                        onClick={() => setActive(true)}
                        className="h-8 w-8 rounded-full"
                        src={basketImg}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                </Menu>
                <Menu as="div" className="ml- relative">
                  <div>
                    <Menu.Button className="bg-gray-800  flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-7 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {auth.isAuth === true ? (<Menu.Item>
                        {({ active }) => (
                          <Link to="/">
                            <a
                              onClick={() => auth.setIsAuth(false)}
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Выйти
                            </a>
                          </Link>
                        )}
                      </Menu.Item>) : (<Menu.Item>
                        {({ active }) => (
                          <Link to="/">
                            <a
                              onClick={() => auth.setIsAuth(false)}
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Войти
                            </a>
                          </Link>
                        )}
                      </Menu.Item>)}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
})

export default Header