import { useState } from "react";
import "./Home.css";
import { carouselPics } from "./Images";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa";


const Home = ({slides}) => {
    const [current,setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
}

    // if(!Array.isArray(slides) || slides.length <= 0) {
    //  return null;
    // }

     return(
        <section className="home">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {carouselPics.map((slide,index) => {
            return(
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current &&(<img src={slide.pic} alt="college gallery" className="image"/>)}
                </div>
            )
        })}
        </section>
     );
}
 
export default Home;