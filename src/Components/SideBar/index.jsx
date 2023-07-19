import Avatar from '../Avatar/Avatar'
import style from './SideBar.module.css'


function SideBar () {
    return (
        <aside className={style.sideBar}>
                <img className={style.cover} src="https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"  />

            <div className={style.profile}>
              
                <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXZhdGFyZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60" alt="" />

                <strong> Nome Sobrenome </strong>
                <span>Cargo</span>

            </div>

            <footer>
                <a href="https://www.lattes.cnpq.br/">
                    Cv Lattes
                </a>
            </footer>
        </aside>
    )
}

export default SideBar
