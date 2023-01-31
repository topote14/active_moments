import { FiSettings } from 'react-icons/fi';
import { TbH1, TbMoon } from 'react-icons/tb';
import { BiExit } from 'react-icons/bi';
import { useTheme } from 'next-themes';
import {BsSun} from 'react-icons/bs';

const BurgerMenu = () => {
    
    const {systemTheme, theme, setTheme} = useTheme()

    const renderThemeChange = () => {
        const currentTheme = theme === 'system' ? systemTheme : theme;

        if(currentTheme === 'dark') {
            return (
                <div className='vista'>
                    <i><TbMoon onClick={()=>setTheme('light')}></TbMoon> </i>
                    <h6>Oscuro</h6>
                </div>
                
            )
        }
        else{
            return (
                <div className='vista'>
                <i><BsSun onClick={()=>setTheme('dark')}></BsSun> </i>
                <h6>Claro</h6>
                </div>
            )
        }
    }
        
    return (
        <div>
            <div className='burgMenu'>
                <div className='ajustes'>
                    <i><FiSettings /></i>
                    <h6>Ajustes</h6>
                </div>
                
                    {renderThemeChange()}
                
                <div className='salir'>
                    <i><BiExit /></i>
                    <h6> Salir </h6>
                </div>

            </div>
           
        </div>
    )
}

export default BurgerMenu