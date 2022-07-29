import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import TestCard from './card/TestCard';


const Testimonials = () => {
    const url = 'https://mt-portfolio2.herokuapp.com/review'
    const { isLoading, data } = useQuery(['review'], () =>
        fetch(url)
            .then(res => res.json()
            )
    )
    if (isLoading) {
        return
    }
    return (
        <section className="my-20 container mx-auto">
            <h1 className="lg:text-5xl text-4xl text-center font-bold text-neutral">Patient Testimonials</h1>
            <p className="text-center mt-3 text-mini">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat <br /> sunt culpa officia deserunt mollit anim est laborum.</p>


            <div className='mt-14'>
                <Swiper
                    breakpoints={{
                        640: {
                            width: 640,
                            slidesPerView: 1,
                        },
                        868: {
                            width: 868,
                            slidesPerView: 2,
                        },
                        1200: {
                            width: 1200,
                            slidesPerView: 3,
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={20}
                    loop={true}
                    loopFillGroupWithBlank={false}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {
                        data.map(review => <SwiperSlide key={review._id}>
                            <TestCard review={review} />
                        </SwiperSlide>)
                    }


                </Swiper>
            </div>
        </section>
    );
}

export default Testimonials;
