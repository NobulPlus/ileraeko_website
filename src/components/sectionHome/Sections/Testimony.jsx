import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Import Swiper styles for navigation
import 'swiper/css/pagination'; // Import Swiper styles for pagination

const testimonies = [
  {
    name: '',
    testimony: 'Hi there, lovely individuals. Indeed, I am an Ilera Eko recipient. The firstborn ambassador, Mr. Shola Etunshola, presented it to me when he took it to our church and brought others with him to discuss Ilera Eko here. That was what I utilized for my prenatal care, and that was when my spouse and I actually started dating.Indeed. That happened in 2021. I also had to perform a CS procedure last year. And I had been in the hospital for a week by the time I was released. Less than 10,000 naira had been paid by the time I was released, and that was only for legalities.',
    position: '',
  },
  {
    name: 'Adetola Adepitan',
    testimony: 'I started using Ilera Eko in 2021, and so far the scheme is fantastic because the first time a woman introduced me to Ilera Eko, I was just listening to her, but when I registered, I realized it was a good scheme. Anyone who does not use Ilera Eko is missing a lot. I treated my blood pressure on the scheme, and all the tests I did in the hospital plus the drugs I was given were free, and now my blood pressure is normal. I am using this medium to advise many people who have not joined Ilera Eko to join, and they will appreciate the government, and the money they paid on the scheme will not be in vain. I have and will continue to introduce more people to the scheme. Thank You LASHMA.',
    position: '',
    image: '' // Replace with actual image URL
  },
  {
    name: 'Iniobong Emmanuella Williams',
    testimony: 'My name is Iniobong Emmanuella Williams, and I am a proud beneficiary of LASHMA, all thanks to Vivian, who introduced me to LASHMA. At first, I did not want anything that involved government because I did not want any insults. But Vivian confused me to register that such will not happen. I never believed my eyes when I got to the general hospital in Ikorodu and they directed me to their office; the way they attended to me was something else. Even the private hospitals that I have been visiting have not attended to me like that. I gave birth through CS, and I did not pay anything apart from my registration fee. To God be the glory, I have introduced more than 10 people, and each time I talk to them, they will say, Hahaha, you mean we should go to the general hospital?". But I keep telling them that LASHMA is different. My prayer is that this LASHMA should last, and may God bless the Lagos State Government.',
    position: '',
    image: '' // Replace with actual image URL
  },
  {
    name: 'Seun Sosanya',
    testimony: 'I fainted in the office because I had ruptured an ectopic pregnancy, and I was rushed to the Lagos State Teaching Hospital (LASUTH) Emergency Unit unconscious. I only became conscious at LASUTH, and they performed salpingectomy surgery on me. If not for the timely intervention, only God knows what would have happened. The bill given to me was huge. This is because while unconscious, I could not say my ILERA EKO policy ID, nor could anyone who took me there give me my policy ID, and I was treated as a private person, but the Lagos State Health Management Agency (LASHMA) came to my rescue and took care of my bills. This gave me a lot of relief. I am highly grateful to the Governor of Lagos State, Mr. Babajide Olusola Sanwo-Olu. I also appreciate LASHMA and LASHMA Customer Care Supervisor, Mrs. Iyabo Adepitan, who responded to my calls immediately. I do not know that customer service can work like that in Nigeria. ILERA EKO is real. They did well for me.',
    position: '',
    image: '' // Replace with actual image URL
  },
];

const Testimony = () => {
  return (
    <>
      <div className="container px-4 py-12 mx-auto text-center">
        <div>
          <h3 className="mb-4 text-3xl font-bold">
            See what our <span className="text-orange-500">community</span> says
          </h3>
          <p className="mb-8 text-gray-600">
            When we bring our customers together with the providers they need, everyone benefits. But don’t take our word for it.
          </p>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
          >
            {testimonies.map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="max-w-sm p-6 bg-white rounded-lg shadow-lg">
                  {item.image && (
                    <img src={item.image} alt={item.name} className="w-24 h-24 mx-auto mb-4 rounded-full" />
                  )}
                  <p className="mb-4 text-sm italic text-justify text-gray-800">"{item.testimony}"</p>
                  <div className="text-left">
                    <p className="font-bold text-gray-900">{item.name}</p>
                    <p className="text-gray-600">{item.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimony;
