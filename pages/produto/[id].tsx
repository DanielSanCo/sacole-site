import { useRouter } from 'next/router';
import styles from './style.module.css';
import sacoles from '@/utils/sacoles';
import { useState } from 'react';

const Produto = () => {
    const router = useRouter();
    const iden = router.query.id ? +router.query.id : '';

    return (
        <div className={styles.main}>
                {sacoles.map((item, index) => (
                    <>
                        {index.toString() == iden ? 
                            <div className={styles.produto}>
                                <div className={styles.imgArea}>
                                    <img className={styles.img} src={item.img} alt="" />
                                </div>
                                <div className={styles.infoArea}>
                                    <h1>{item.name}</h1>
                                    <h3>{item.gourmet == 'y' ? 'Gourmet' : ''}</h3>
                                    <p className={styles.desc}>{item.desc}</p>
                                    <h2 className={styles.price}>R$ {item.price},00</h2>
                                    <div>
                                        <img className={styles.deb} src="../imagens/pix.png" alt="" />
                                    </div>
                                    <div className={styles.button}>Pedir</div>
                                </div>
                            </div> 
                        : 
                        ''}
                    </>
                ))}
        </div>
    )
}

export default Produto;