import Navigation from '@/components/navigation';
import Img from '../assets/images/map-image.png';

const ContactUs=()=>{


    return(
        <div className='h-full contactus bg-Matte '>
            <Navigation></Navigation>
            <div className='p-4'>
            <h2 className='m-2 font-bold text-White text-4xl text-center font-Montserrat'>CONTACT US</h2>
            <p className='m-2 text-White text-center font-Montserrat'>USE THE FORM BELOW TO DROP US AN EMAIL.</p>
            <p className='m-2 font-bold text-White text-center font-Montserrat'>{`PHONE CALL WORKS TOO >> +49 176 36356049.`}</p>
            </div>
            
      <form className='md:flex items-center justify-center p-5'>
           <div className=' md:w-1/4 w-11/12 flex flex-col  m-auto'>
           <input className='w-full mt-4 shadow rounded p-4' placeholder='Your Name*'></input>
           <input className='mt-4 shadow rounded p-4' placeholder='Your Email*'></input>
           <input className='mt-4 shadow rounded p-4' placeholder='Your Phone*'></input>
           </div>

           <div className='md:w-1/2 w-11/12 mt-4 m-auto '>
           <textarea rows={7}  className='w-full shadow rounded p-4' placeholder='Your Message*'></textarea>
           </div>
       </form>


       <div className='m-auto w-full flex justify-center'>
       <button className='w-40 m-auto bg-Red rounded shadow text-White p-4  text-center'>Tell Me More</button>
       </div>

        </div>
 
    )

}

export default ContactUs;