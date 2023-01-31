import logonombre from '../../public/title.png'
import Image from 'next/image'
import logoUser from '../../public/user2.png'
import Link from 'next/link'
import search from '../../public/search.png'
import logo from '../../public/favicon.ico'


const NavMobile = () => {


  return (
    <div className='user'>
      <div className="name">
      <Link href='/'>
   <Image className='search' width={28.86} height={28.43} src={search} alt='search' />
    </Link> 
      </div>
    <div className='logo'>
    <Link href={'/'}> <Image className='logoImg' width={40} height={40} src={logo} alt='user' /></Link>
        <Link href={'/'}> <Image className='logoName' width={100} height={15} src={logonombre} alt='user' /></Link>
    </div>
  <div className='name'>
    <Link href='/'>
    <Image className='logoUser' width={28.86} height={28.43} src={logoUser} alt='logo usuario' />
    </Link> 
  </div>
    </div>
  )
}

export default NavMobile