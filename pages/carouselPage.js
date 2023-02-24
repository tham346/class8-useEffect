import Carousel from "@/components/carousel"
import Link from "next/link"
import styles from '../styles/CarouselPage.module.css'

export default function CarouselPage() {
    return(
        <>
        <div className={styles.carouselPage}>
            <Link href="/" className={styles.effect2Text}>Home</Link>
            <Carousel/>            
        </div>

        </>
    )
}