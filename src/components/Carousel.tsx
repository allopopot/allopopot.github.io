import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface Props {
    images: string[]
}

export default function Carousel(props: Props) {
    return (
        // <div >{props.images}</div>
        <Swiper
            spaceBetween={20}
            slidesPerView={1.1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                props.images.map(el => {
                    return (
                        <SwiperSlide>
                            <img src={el} className='rounded-lg aspect-video object-cover object-top-left' alt="" />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>

    )
}
