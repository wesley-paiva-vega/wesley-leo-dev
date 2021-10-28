import Slider from 'react-slick'
import Header from '../Header';
import Styled from './styles'

export default function ReactSlider () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <Header>Exemple of Slider</Header>
            <div>
        <h2> Single Item</h2>
        <Styled.Container>
        <Styled.MySlider {...settings}>
            {[1,2,3,4].map((item,index) => {
                return (
                    <div key={index}>{item}</div>
                )
            })}
        </Styled.MySlider>
        </Styled.Container>
      </div>
        </>
    )
}