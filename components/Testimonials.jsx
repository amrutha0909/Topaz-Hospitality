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
      author: "Amit Sharma",
      text: "An absolute royal masterpiece in Karnal. The Rajputana and Mughal architectural execution is incredibly detailed. The hospitality and service levels are outstanding, making you feel like royalty from the moment you enter.",
      project: "Noormahal Palace Hotel",
      rating: 5.0
    },
    {
      author: "Rajat K.",
      text: "Outstanding facility planning and design. The rooms are clean and spacious, the food quality is supreme, and the hospitality staff is highly cooperative. Excellent venue for conferences and corporate stays in Jammu.",
      project: "Viraj Sarovar Portico",
      rating: 4.8
    },
    {
      author: "Priyanka Thakur",
      text: "A beautiful premium property with exceptional banquet facilities. The landscape design, spacious event halls, and catering execution are superb. The staff coordination is flawless and highly professional.",
      project: "17 Miles Jammu",
      rating: 4.7
    },
    {
      author: "Sourav Mohanty",
      text: "Highly convenient location at Rasulgarh Square. The service is incredibly warm and hospitable, and the room layout is highly practical. A very reliable and comfortable stay in Bhubaneswar!",
      project: "Hotel Urmee",
      rating: 4.5
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
                  <div className="flex items-center justify-between mb-6 flex-wrap gap-4 border-b border-white/5 pb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => {
                          const isFull = test.rating >= star;
                          const isHalf = !isFull && test.rating > star - 1;
                          return (
                            <svg 
                              key={star} 
                              className={`w-5 h-5 ${isFull || isHalf ? 'text-accent' : 'text-white/10'}`} 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              {isHalf ? (
                                <>
                                  <defs>
                                    <linearGradient id={`grad-${index}-${star}`}>
                                      <stop offset="70%" stopColor="#c99b41" />
                                      <stop offset="30%" stopColor="rgba(255,255,255,0.1)" />
                                    </linearGradient>
                                  </defs>
                                  <path fill={`url(#grad-${index}-${star})`} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </>
                              ) : (
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              )}
                            </svg>
                          );
                        })}
                      </div>
                      <span className="text-accent font-mono text-xs font-semibold tracking-wider bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
                        {test.rating.toFixed(1)} / 5
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[10px] text-white/60 tracking-wider font-light uppercase">
                      <svg className="w-3 h-3 fill-current text-accent" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-6.887 4.114-4.62 0-8.382-3.762-8.382-8.382S7.62 1.75 12.24 1.75c2.03 0 3.887.77 5.316 2.03l3.07-3.07C18.23-1.214 15.424-2 12.24-2c-6.85 0-12.4 5.55-12.4 12.4s5.55 12.4 12.4 12.4c7.152 0 11.89-5.03 11.89-12.115 0-.819-.08-1.4-.24-2.4H12.24z"/>
                      </svg>
                      Google Review
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-white/80 font-light leading-relaxed mb-8 italic min-h-[100px]">
                    "{test.text}"
                  </p>
                  <div className="border-t border-white/5 pt-5">
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
          background: #c99b41 !important;
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
