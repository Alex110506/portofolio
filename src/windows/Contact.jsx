import WindowControls from '#components/WindowControls'
import { socials } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import React from 'react'

const Contact = () => {
  return (
    <>
      <div id='window-header'>
        <WindowControls target="contact"/>
        <h2>Contact Me</h2>
      </div>

      <div className='p-5 space-y-5'>
        <img src="/images/adrian.jpg" alt="Alex" className='w-20 rounded-full'/>
        <h3>Let's Connect</h3>
        <p>Got an idea? A bug to solve? Or just want to talk tech? I'm in!</p>
        <p>alex11amr110506@gmail.com</p>

        <ul>
          {socials.map(({id,bg,link,icon,text})=>(
            <li key={id} style={{backgroundColor:bg}}>
              <a href={link} target='_blank' rel='nooperner noreferrer'>
                <img src={icon} alt={text} className='size-5'/>
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

const ContactWindow=WindowWrapper(Contact,'contact')
export default ContactWindow