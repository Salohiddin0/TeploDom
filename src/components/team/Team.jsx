'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import I1 from '../../assets/images/team/i1.png'
import I2 from '../../assets/images/team/i2.png'
import I3 from '../../assets/images/team/i3.png'
import I4 from '../../assets/images/team/i4.png'

const teams = [
  { id: 1, firstName: 'Ӯткуров Сардор', work: 'Директор фирмы', image: I1 },
  {
    id: 2,
    firstName: 'Рахматуллаев Хаб',
    work: 'Менеджерпо продажам',
    image: I2
  },
  { id: 3, firstName: 'Усмонов Нодир', work: 'Менеджерпо продажам', image: I3 },
  {
    id: 4,
    firstName: 'Йолдошев Донийор',
    work: 'Менеджерпо продажам',
    image: I4
  }
]

const Team = () => {
  return (
    <section className='md:py-[50px] py-[50px]'>
      <div className='container mx-auto px-4'>
        <div className='top flex justify-between items-center mb-[30px]'>
          <h3 className='font-semibold text-[30px] my-5'>Наши команда</h3>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className='team-wrapper'
        >
          {teams.map(team => (
            <SwiperSlide key={team.id}>
              <div className='team-item flex flex-col items-center justify-center bg-white rounded-[12px] pt-[30px] shadow-md'>
                <div className='top-image rounded-full overflow-hidden w-[150px] h-[150px]'>
                  <img
                    src={team.image}
                    alt={team.firstName}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='team-item-body text-center pb-[30px]'>
                  <p className='text-[18px] font-medium mt-[30px] mb-[10px]'>
                    {team.firstName}
                  </p>
                  <p className='text-[#878787]'>{team.work}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Team
