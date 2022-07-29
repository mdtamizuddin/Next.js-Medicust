import 'animate.css';
import Head from 'next/head'
import Image from 'next/image'
import Depertment from '../components/Depertment'

import doctorsI from '../components/images/doctors.png'
import palyBtn from '../components/images/icon/play-btn.png'
import Doctorscard from '../components/card/DoctorsCard'
import sectionI from '../components/images/section.png'
import headphone from '../components/images/icon/headPhone.png'
import inbox from '../components/images/icon/inbox.png'
import Testimonials from '../components/Testimonials'
import { useState } from 'react'

import photo from '../components/images/photo-1.png'
import Doctors from '../components/Doctors';
export default function Home() {

  const [item, setItem] = useState(0)

  return (

    <div >
      <Head>
        <title>Medicust</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header
        style={{ backgroundImage: `url('https://i.ibb.co/dgGvgJ8/hero.png')` }}
        className='w-full lg:h-[90vh] h-auto bg-cover bg-center py-20'>
        {/* <Image src={hero} alt="" /> */}
        <div className="container mx-auto flex justify-between items-center h-full">
          <div>
            <h2 className='text-2xl text-primary font-semibold'>Medical And Health</h2>
            <h1 className='lg:text-6xl text-4xl py-5   font-bold text-neutral'>
              A professional <br /> and friendly care <br /> provider.</h1>
            <p className='text-xl text-primary mt-2 mb-5'>Excepteur sint occaecat cupidatat non proident sunt officia</p>
            <button className='btn btn-primary px-10 mt-4 rounded-3xl'>All Doctors</button>
          </div>
        </div>
      </header>
      {/***************************** 
            section End Here 
      ****************************/}
      {/***************************** 
            section Start Here 
      ****************************/}
      <section className='py-14 container mx-auto'>
        <h1 className='lg:text-4xl text-3xl leading-tight font-bold text-neutral'>Need a doctor for checkup? <br />  Call for an emergency services!</h1>
      </section>

      {/***************************** 
            section End Here 
      ****************************/}
      {/***************************** 
            section Start Here 
      ****************************/}
      <Depertment />

      {/***************************** 
            section Start Here 
      ****************************/}
      <section className='container mx-auto my-10'>
        <div className='lg:h-[500px] h-auto w-full bg-neutral relative rounded-md'>
          <div className=' left-48 right-52 absolute bottom-36 flex justify-center items-center bg-transparent'>
            <button className='bg-transparent animate-bounce'>
              <Image src={palyBtn} alt="" />
            </button>
          </div>
          <div className="w-[90%] mx-auto flex flex-col lg:flex-row justify-between items-center h-full text-white lg:py-0 py-5">


            <div className='lg:w-[50%] w-full'>
              <h2 className='text-xl text-accent font-semibold'>Medical And Health</h2>
              <h1 className='lg:text-5xl py-5 text-3xl font-bold text-white'>
                A professional <br /> and friendly care <br /> provider.</h1>
              <p className='text-xl mt-2 mb-5'>Excepteur sint occaecat cupidatat non proident sunt officia</p>
              <button className='btn btn-primary px-10 mt-4 rounded-3xl'>All Doctors</button>
            </div>

            <div className='lg:w-[40%] lg:my-0 my-5 w-full  h-full flex justify-end items-center'>
              <Image src={doctorsI} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/***************************** 
            section End Here 
      ****************************/}
      {/***************************** 
           Doctors section Start Here 
      ****************************/}

      <Doctors />

      {/***************************** 
            section End Here 
      ****************************/}
      {/***************************** 
          section Start Here 
      ****************************/}

      <section className='w-full mt-20 blueBg  bg-cover bg-center  bg-primary'
        style={{
          backgroundImage: `url('https://i.ibb.co/gym5bHb/blueBg.png')`
        }}
      >
        <div className='flex flex-col lg:flex-row justify-between container mx-auto'>

          <div className='flex justify-center items-center'>
            <div className='bg-white p-10 rounded-2xl w-full lg:w-auto'>
              <h2 className='lg:text-4xl text-3xl leading-tight font-bold text-neutral text-center'>We always ready <br /> for a challenge.</h2>
              <div className='flex items-center mt-4'>
                <Image src={headphone} alt="" />
                <h2 className='text-primary font-bold  ml-3 text-2xl lg:text-3xl'>+00 568 467 46</h2>
              </div>
              <div className='flex items-center mt-4'>
                <h2 className='text-primary font-bold text-2xl lg:text-3xl ml-3'>medicust@gmail.com</h2>
                <Image src={inbox} alt="" />
              </div>
            </div>
          </div>
          <div className='lg:mt-0 mt-7'>
            <h2 className='text-3xl font-semibold text-white'>Duis aute irure dolor in reprehenderit <br /> in voluptate velit esse cillum dolore eu<br />fugiat nulla pariatur.</h2>
            <p className='mt-3 text-white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu nostrud <br /> exercitation ullamco laboris nisi ut aliquip.
            </p>
            <div className='mt-10'>
              <Image className='w-full' src={sectionI} alt="" />
            </div>
          </div>

        </div>

      </section>

      {/***************************** 
            section End Here 
      ****************************/}
      {/***************************** 
          section Start Here 
      ****************************/}
      <Testimonials />
      {/***************************** 
            section End Here 
      ****************************/}
      {/***************************** 
          section Start Here 
      ****************************/}
      <section className='w-full  my-20 h-auto  bg-cover bg-no-repeat'
        style={{
          backgroundImage: `url('https://i.ibb.co/Kq8p8j6/Bg.png')`
        }}>
        <div className='container mx-auto py-10 flex flex-col lg:flex-row justify-between items-center'>

          <h1 className='lg:text-5xl text-4xl text-left w-full lg:w-auto leading-tight font-bold text-white'>Get Every Single <br /> Updates Here.</h1>
          <div className='overflow-hidden p-3 lg:mt-0 mt-5'>
            {
              items[item]
            }
          </div>
          <span className='flex lg:mt-0 mt-5'>
            <button
              onClick={() => {
                if (items.length - 1 === item) {
                  setItem(0)
                }
                else {
                  setItem(item + 1)
                }


              }}
              className='btn btn-primary mr-4  rounded-full'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button
              onClick={() => {
                if (item === 0 || item < 0) {
                  setItem(items.length)
                }
                else {
                  setItem(item - 1)
                }


              }}
              className='btn btn-secondary rounded-full'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
            </button>
          </span>
        </div>

      </section>
      {/***************************** 
            section End Here 
      ****************************/}
      {/***************************** 
          section Start Here 
      ****************************/}
      <section className='grid grid-cols-1 justify-items-center py-10 gap-10 lg:grid-cols-2 justify-between container mx-auto'>
        <div className='flex w-full rounded-xl overflow-hidden shadow-xl shadow-blue-100'>
          <Image src={photo} alt="" />
          <div className='border-2 border-primary flex flex-col w-[70%] lg:w-[50%] items-start justify-center p-5'>
            <h3 className='font-bold text-gray-400'>25, February, 2022</h3>
            <h2 className='text-2xl mt-3 text-neutral font-bold'>If you find your<br />self constantly book<br />marking and health<br />sections.</h2>
            <a className='flex btn-link mt-3' href="#">Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
        <div className='flex w-full rounded-xl overflow-hidden shadow-xl shadow-blue-100'>
          <Image src={photo} alt="" />
          <div className='border-2 border-primary flex flex-col w-[70%] lg:w-[50%]  items-start justify-center p-5'>
            <h3 className='font-bold text-gray-400'>25, February, 2022</h3>
            <h2 className='text-2xl mt-3 text-neutral font-bold'>If you find your<br />self constantly book<br />marking and health<br />sections.</h2>
            <a className='flex btn-link mt-3' href="#">Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

      </section>


    </div>
  )
}

const items = [
  <p className='text-white text-mini animate__animated animate__fadeInLeft'>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit <br /> sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enim ad minim veniam
  </p>,
  <p className='text-white text-mini animate__animated animate__fadeInDown'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit <br /> sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enim ad minim veniam
  </p>,
  <p className='text-white text-mini animate__animated animate__fadeInLeft'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit <br /> sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enim ad minim veniam
  </p>,
  <p className='text-white text-mini animate__animated animate__fadeInDown'>
    Lorem ipsum dolor sit amet, consectetur adipisicing. <br /> sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enim ad minim veniam
  </p>
]

