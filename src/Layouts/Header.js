import React from 'react'
import TextComponent from '../Components/TextComponent';
import './layouts.css';

const Header = () => {
  return (
    <div className='HeaderContainer'>
        <div>
        <img src="https://i.ibb.co/mh20tKw/image-2.png" alt="LOGO" className='CollegeLogo' />
        </div>
        <div className='div-Divider1' >
          <TextComponent className='HeaderText-1' label="SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY"/>
          <TextComponent className='HeaderText-2' label="Exam Scheduler"/>
        </div>
        <div className='div-Divider2'>
          <img src="https://i.ibb.co/wgKdx86/healthicons-ui-user-profile.png" alt="healthicons-ui-user-profile" className='UserLogo'/>
          <TextComponent className='UserName' label = "Waseem"/>
        </div>
    </div>
  )
}

export default Header