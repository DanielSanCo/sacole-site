import styles from './style.module.css';

type Props = {
    name: string,
    img: string,
    desc: string,
    gourmet: string,
    price: number
}

const Produto = ({name, img, desc, gourmet, price}:Props) => {
    return (
        <>
            <div className={styles.item}>
                <img
                    className={styles.prodImg}
                    src={img}
                    alt=""
                />
                {gourmet == 'y' ? <div className={styles.prodName}>{name} Gourmet</div> : <div className={styles.prodName}>{name}</div>}
                <div className={styles.desc}>{desc}</div>
                <div className={styles.prodPrice}>R$ {price},00</div>
                <div className={styles.button}>Pedir</div>
            </div>
        </>
    )
}

export default Produto;