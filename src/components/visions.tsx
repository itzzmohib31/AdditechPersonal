import VisionCover from '../assets/images/vision.gif';
import Image from 'next/image';
import { text } from 'stream/consumers';
import { Tables } from './LOM/Tables';
const Visions=()=>{

    return(
        <section className='p-5'>
        <h2 className='text-center text-4xl font-Montserrat font-semibold text-Matte'>VISION</h2>
        <div className='md:flex p-5 items-center'>
                <Image
                    className='md:w-2/5 md:h-40 m-auto w-11/12  h-auto'
                    src={VisionCover}
                    alt={`Visions`}
                />
                    <p className='md:w-2/5 text-Gray-100 m-auto w-10/12 text-left'>AddiTech Sim includes the theme of Additive Technology Simulation which will help in R&D and innovation hubs specifically for Automotive, Aerospace and Digital technologies. AddiTech Sim transforms how products are designed, produced and serviced specifically from the raw designs. It will be a step by step process, Material Flow Simulations followed by Product defintion which will be accessed virtually, then integrated solution to bring the Industrial robots and 3D printers together in different ways.</p>

        </div>

    <Tables></Tables>

      
        </section>
    )
}

export default Visions;