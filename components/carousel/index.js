import Image from "next/image"
import { useState } from "react";
import style from '../carousel/Carousel.module.css'

export default function Carousel(){
    const [img, setImg] = useState(0); 

    const changeImage = (change) => {
        if(change == "backward") {
            setImg(img - 1);

            if (img == 0){
                setImg(5);
            }
            console.log(img)
        } else if(change == "forward") {
            setImg(img + 1); 
            if(img == 5){
                setImg(0);
            }
            console.log(img)
        }
    }


    return (
        <>
        <div className={style.carouselImage} style={{
                        backgroundImage:"url(/carousel-images/" + img + ".jpg)",
                        backgroundSize: 'cover',
                        backgroundRepeat: "no-repeat", 
                        height: 337,
                        width: 598,
                        marginTop: 121,
                        marginLeft: 325
        }}>
            
        <Image 
            className={style.leftArrow}
            src={"/icons/leftArrow.png"}
            alt={"/icons/leftArrow.png"}
            width={50}
            height={50}
            onClick={() => changeImage("backward")}
        />            
        <Image
            className={style.rightArrow}
            src={"/icons/rightArrow.png"}
            alt={"/icons/rightArrow.png"}
            width={50}
            height={50}
            onClick={() => changeImage("forward")}
        />             
        </div>
        

        </>
    )
    }
