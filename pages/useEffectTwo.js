import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '../styles/UseEffectTwo.module.css'

export default function useEffectTwo(){
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number); 
        setNumber(number + 50); 
    }, [])
    return (
        <>
        <div className={styles.effectTwo}>
        <Link className={styles.effect2Text} href="/">Home</Link>
        <div>
            UseEffect Two
        </div>
        <div>
            {number}
        </div>            
        </div>

        </>
    )
}