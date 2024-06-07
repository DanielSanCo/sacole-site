import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from '../../styles/main.module.css';
import sacoles from "@/utils/sacoles";
import Produto from "@/components/Produto";
import { useRouter } from "next/router";
import ProdList from "@/components/ProdList";
import modstyles from './style.module.css';

const inter = Inter({ subsets: ["latin"] });

const flavors = [
    { name: 'Coco', sabor: 'coco' },
    { name: 'Chocolate', sabor: 'chocolate' },
    { name: 'Morango', sabor: 'morango' },
    { name: 'Maracujá', sabor: 'maracuja' },
]

export default function Sabor() {
    const router = useRouter();
    const sabor = router.query.id;

    return (
        <>
            {flavors.map((item, index) => (
                <>
                    {item.sabor == sabor ?
                        <div className={modstyles.flavorTitle}>Sacolés do sabor:<span className={modstyles.flavor}>{item.name}</span></div>
                        :
                        ''
                    }
                </>
            ))}
            <ProdList title={`Sacolé Sabor ${sabor}`} sabor={`${sabor}`} gourmet="" />
        </>
    );
}
