import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '../styles/UseEffectOne.module.css'

export default function useEffectOne() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 1);
    })
    return (
        <>
        <div className={styles.effectOne}>
            <Link href="/" className={styles.effect2Text}>Home</Link>
                useEffectOne 
            <div>
                {number}
            </div>
        </div>

        </>
    )
}

