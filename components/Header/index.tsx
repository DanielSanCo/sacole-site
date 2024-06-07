import { useState } from 'react'
import styles from './style.module.css'

const menuItens = [
    { name: 'Inicio', link: '/' },
    { name: 'Sacolés', link: '/sacoles' },
    { name: 'Gourmet', link: '/gourmet' },
]

const menuCategories = [
    { name: 'Coco', link: '/sabor/coco' },
    { name: 'Morango', link: '/sabor/morango' },
    { name: 'Chocolate', link: '/sabor/chocolate' },
    { name: 'Maracujá', link: '/sabor/maracuja' }
]

const Header = () => {

    const [disp, setDisp] = useState('none')

    return (
        <>
            <div className={styles.header}>
                {/* NORMAL */}
                <div className={styles.logo}>
                    <a href="/">
                        <img
                            className={styles.logoImg}
                            src="https://i2.wp.com/assets.propmark.com.br/uploads/2020/07/Casas-Bahia-logo.png?resize=395%2C422&ssl=1"
                            alt=""
                        />
                    </a>
                </div>
                <div className={styles.menu}>
                    {menuItens.map((item, index) => (
                        <a href={item.link} className={styles.eachItemMenu}>
                            <div key={index}>{item.name}</div>
                        </a>
                    ))}
                </div>
                {/* RESPONSIVO */}
                <div className={styles.menuResp} onClick={() => disp == 'none' ? setDisp('flex') : setDisp('none')}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={styles.subHeader}>
                {menuCategories.map((item, index) => (
                    <a href={item.link}>
                        <div key={index}>{item.name}</div>
                    </a>
                ))}
            </div>
            <div className={styles.subMenu} style={{ display: disp }}>
                {menuItens.map((item, index) => (
                    <a href={item.link}>
                        <div>{item.name}</div>
                    </a>
                ))}
            </div>
        </>
    )
}

export default Header;