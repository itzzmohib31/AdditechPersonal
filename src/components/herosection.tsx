import HeroImg from '../assets/images/main.gif';
import Image from 'next/image';


export const HeroSection=()=>{

    return(

        <section className='bg-left flex-col md:p-40 bg-cover hero font-Montserrat '>
         <h4 className='md:text-3xl text-2xl pt-10 font-medium leading-tight text-White text-center  italic'>Welcome To Additech Sim!</h4>
         <h2 className='mt-5 md:text-7xl  leading-tight font-bold text-White text-center text-5xl '>IT'S NICE TO MEET YOU</h2>
         <div className='mt-5 m-auto md:w-1/6 w-1/2'>
         <button className='w-40 bg-Red rounded shadow text-White p-4  text-center'>Tell Me More</button>
         </div>
        </section>

    );

}