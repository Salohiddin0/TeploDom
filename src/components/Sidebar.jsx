import React, { useState } from 'react'
import logo from '../assets/navbar/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import closeIcon from '../assets/modal/close.svg'
import { useDispatch } from 'react-redux'
import { delModals } from '../features/modal/modalSlice'

const Sidebar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isClosing, setIsClosing] = useState(false) // Animatsiya uchun state

  const handleClose = path => {
    setIsClosing(true)
    setTimeout(() => {
      dispatch(delModals())
      navigate(path)
    }, 500)
  }

  return (
    <aside
      onClick={() => handleClose('/')}
      className={`fixed top-0 left-0 z-[99] h-full w-full transition-opacity duration-500 
      ${isClosing ? 'opacity-0' : 'opacity-100'} 
      bg-black/50 backdrop-blur-sm`} // Orqa fon qorayadi + xiralashadi
    >
      <div
        onClick={e => e.stopPropagation()}
        className={`h-full w-4/5 bg-white px-[15px] py-[20px] rounded-r-lg transition-transform duration-500 
        ${isClosing ? '-translate-x-full' : 'translate-x-0'}`}
      >
        <div className='flex justify-between items-center'>
          <Link
            onClick={() => handleClose('/')}
            className='flex items-center gap-2 cursor-pointer'
          >
            <img src={logo} alt='Navbar logo' className='w-14 sm:w-[70px]' />
            <div className='text-center'>
              <h1 className='bg-linarOrange bg-clip-text text-transparent text-lg lg:!text-2xl font-semibold tracking-wider'>
                TEPLODOM
              </h1>
              <p className='text-[10px] lg:text-sm leading-4'>
                Интернет магазин <br /> строй материалов
              </p>
            </div>
          </Link>
          <button
            onClick={() => handleClose('/')}
            className='p-3 rounded-full bg-[#F7F7F7] cursor-pointer'
          >
            <img src={closeIcon} alt='close icon' className='scale-110' />
          </button>
        </div>
        <ul className='flex flex-col divide-y divide-black mt-5'>
          <li className='py-5 text-lg'>
            <button
              onClick={() => handleClose('/sale')}
              className='w-full text-left'
            >
              Товары по акции
            </button>
          </li>
          <li className='py-5 text-lg'>
            <button
              onClick={() => handleClose('/new')}
              className='w-full text-left'
            >
              Новинки
            </button>
          </li>
          <li className='py-5 text-lg'>
            <button
              onClick={() => handleClose('/toProviders')}
              className='w-full text-left'
            >
              Поставщикам
            </button>
          </li>
          <li className='py-5 text-lg'>
            <button
              onClick={() => handleClose('/contacts')}
              className='w-full text-left'
            >
              Контакты
            </button>
          </li>
          <li className='py-5 text-lg'>
            <button
              onClick={() => handleClose('/returnProduct')}
              className='w-full text-left'
            >
              Возврат товара
            </button>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
