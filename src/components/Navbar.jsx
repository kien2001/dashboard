import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateValue } from '../contexts/contextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);
const Navbar = () => {
  const [{ navState, screenSize, activeMenu }, dispatch] = useStateValue();
  useEffect(() => {
    const handleResize = ()=>{
      dispatch({ type: "SET_SCREEN_SIZE", size: window.innerWidth })
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return ()=>{
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  useEffect(()=>{
    screenSize <= 900 ? dispatch({ type: "CHANGE_MENU_STATE",  stateMenu: false }): 
    dispatch({ type: "CHANGE_MENU_STATE", stateMenu: true })
  }, [screenSize])
  return (
    <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
      <NavButton title="Menu" customFunc={() => dispatch({ type: 'CHANGE_MENU_STATE', stateMenu: !activeMenu })} color='blue' icon={<AiOutlineMenu />} />
      <div className="flex">
        <NavButton
          title='Cart'
          customFunc={() => dispatch({ type: "HANDLE_CLICK", name: 'cart' })}
          color='blue'
          icon={<FiShoppingCart />}
        />
        <NavButton
          title='Chat'
          dotColor='#03C9D7'
          customFunc={() => dispatch({ type: "HANDLE_CLICK", name: 'chat' })}
          color='blue'
          icon={<BsChatLeft />}
        />
        <NavButton
          title='Notifications'
          dotColor='#03C9D7'
          customFunc={() => dispatch({ type: "HANDLE_CLICK", name: 'notification' })}
          color='blue'
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position='BottomCenter'>
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg " onClick={() => dispatch({ type: "HANDLE_CLICK", name: 'userProfile' })}>
            <img src={avatar} alt="" className='rounded-full w-8 h-8 ' />
            <p>
              <span className='text-gray-400 text-14'>Hi, </span>{' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>Kien</span>
              <MdKeyboardArrowDown className='text-gray-400 text-14' />
            </p>
          </div>
        </TooltipComponent>
        {navState.cart && <Cart />}
        {navState.chat && <Chat />}
        {navState.userProfile && <UserProfile />}
        {navState.notification && <Notification />}
      </div>
    </div>
  )
}

export default Navbar