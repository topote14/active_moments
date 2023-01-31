
import { useUserContext } from '../../context/user'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/title.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiFillHome } from 'react-icons/ai';
import { MdOutlineAddBox } from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import 'animate.css';
import { useState } from 'react'
import BurgerMenu from './BurgerMenu'
import { AiOutlineArrowUp } from 'react-icons/ai';


 

const NavDesktop = () => {
  const [Display, setDisplay] = useState(true)
  const [Visible, setVisible] = useState('none')
  const { user } = useUserContext()

  const hidenMenu = () => {
    setVisible('none')
    setDisplay(!Display)
  }

  const handleDisplay = () => {
    setDisplay(!Display)
    setVisible('')
  }
  return (
    <>
      <div className='navDesktop'>
        <Link href='/'>
          <Image width={150} height={25} src={logo} alt='logo'></Image>
        </Link>
        <div className='nav'>
          <div className="home">
            <Link href='/'>
              <i><AiFillHome /></i>
            </Link>

            <h3 className='animate__animated animate__bounce'>Inicio</h3>
          </div>
          <div className="searchNav">
            <Link href='/'>
              <i><AiOutlineSearch /> </i>
            </Link>
            <h3 className='animate__animated animate__bounce'>Buscar</h3>

          </div>
          <div className="addPublication">
            <Link href='/'>
              <i><MdOutlineAddBox /></i>
            </Link>
            <h3 className='animate__animated animate__bounce'>Agregar</h3>
          </div>
          <div className="profile">
            <Link href='/'>
              <i><CgProfile /></i>
            </Link>
            <h3 className='animate__animated animate__bounce'>{user && user.username}</h3>
          </div>


      <div className="burger">
        {
          Display ?  <i onClick={handleDisplay}><GiHamburgerMenu/></i> : <BurgerMenu/>
        }
      <div>
      <i  onClick={hidenMenu} className='arrow'><AiOutlineArrowUp/></i>
      </div>
      <style jsx>
        {
          `
          .arrow {
            display: ${Visible};
          } 
        `
        }
      </style>
      </div>
        </div>
      </div>
      
      
    </>


  )
}

export default NavDesktop;