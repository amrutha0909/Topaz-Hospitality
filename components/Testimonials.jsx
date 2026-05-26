"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import DividerOrnament from "./DividerOrnament";
import { Navigation, Pagination, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Testimonials() {
  const testimonials = [
    {
      author: "David G.",
      text: "Topaz Hospitality performed an A+ job in all aspects of our resort development. They won the bid against the highest-end competitors due to their thoughtful and detailed planning. Their collaboration with architects and designers was seamless.",
      project: "Imperium Resort"
    },
    {
      author: "Katherine R.",
      text: "Topaz has worked with me on two major properties. Their understanding of complex hospitality requirements and their ability to work with the proposed plans allowed for much faster project completion. The results are unsurpassed.",
      project: "Karnal Palace"
    },
    {
      author: "Sharon M.",
      text: "From the early days of budget and timeframe discussion to the finished project, everything went smoothly, professionally, and timely. We recommend Topaz Hospitality whole-heartedly for any development needs.",
      project: "Sagaponack Splendor"
    }
  ];

  return (
    <section className="bg-background py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-12 text-center mb-10 md:mb-16 flex flex-col items-center">
        <DividerOrnament className="scale-75 md:scale-100 mb-6 md:mb-10" />
        <h2 className="text-gradient text-3xl sm:text-4xl md:text-5xl font-serif mb-6">Client Experiences</h2>
      </div>

      <div className="w-full relative px-5 md:px-12">
        <Swiper
          modules={[Navigation, Pagination, EffectCreative]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={false}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 50
            }
          }}
          className="w-full pb-16"
        >
          {testimonials.map((test, index) => (
            <SwiperSlide key={index} className="transition-all duration-500 my-auto">
              {({ isActive }) => (
                <div 
                  className={`bg-secondary p-6 sm:p-8 md:p-16 rounded-lg transition-transform duration-700 ease-out border border-white/5 ${
                    isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-40'
                  }`}
                >
                  <div className="text-gold-500 mb-6 flex gap-1">
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-base md:text-xl text-white/80 font-light leading-relaxed mb-8 italic">
                    "{test.text}"
                  </p>
                  <div>
                    <h4 className="font-serif text-accent text-xl">{test.author}</h4>
                    <p className="text-xs tracking-widest text-white/40 uppercase mt-2">{test.project}</p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          background: rgba(255, 255, 255, 0.1);
          width: 50px !important;
          height: 50px !important;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px !important;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.3) !important;
          opacity: 1 !important;
          width: 8px !important;
          height: 8px !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #d4af37 !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
        @media (max-width: 767px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 35px !important;
            height: 35px !important;
            background: rgba(255, 255, 255, 0.15) !important;
          }
          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 14px !important;
          }
          .swiper-button-next {
            right: 8px !important;
          }
          .swiper-button-prev {
            left: 8px !important;
          }
        }
      `}</style>
    </section>
  );
}
