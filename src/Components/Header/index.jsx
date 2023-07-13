import style from './Header.module.css'
import Logo from '../../assets/Logo.svg'

export function Head () {
    return (
        <>
           <div className={style.header}>
              <img src={Logo} alt='Logo Ignite'/>
              <h1>Ignite</h1>
            </div> 
        </> 
    )
}