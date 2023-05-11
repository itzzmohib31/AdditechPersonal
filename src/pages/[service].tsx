import { useRouter } from 'next/router';
import { ServicePageData } from '@/utils/services-page-data';
import Image from 'next/image';

const Service=()=>{
    const router = useRouter();
    
   return(
    <section>


    <div className='bg-left flex-col md:p-40 bg-cover hero font-Montserrat '>
    <h2 className='mt-5 md:text-7xl  leading-tight font-bold text-White text-center text-5xl '>{router.query.service}</h2>
    </div>

    <div>
    {ServicePageData.map((item,index)=>{
                return(
                    <div>
                          <div className="items-center md:flex w-full p-5 m-auto" key={index}>
                        <div className='w-1/2 p-5'>
                        {
                            item.MainPara.map((p,i)=>{
                                return(
                                    <p className='mt-2 font-sans text-lg  text-Matte'>{p}</p>
                                )
                            })
                        }
                        </div>
                        <Image
                        src={item.MainImg}
                        alt={`Service${index}`}
                        className='w-1/2'
                    />
                    
                    
                    </div>

                    <div className='w-1/2 p-5'>
                        {
                            item.ServicesList.map((p,i)=>{
                                return(
                                    <li className='mt-2 font-sans text-lg  text-Matte'>{p}</li>
                                )
                            })
                        }
                        </div>


                        <div className='w-full p-5'>
                        {
                            item.SecondaryPara.map((p,i)=>{
                                return(
                                    <p className='mt-2 font-sans text-lg  text-Matte'>{p}</p>
                                )
                            })
                        }
                        </div>

                </div>
                  
                )})}
    </div>



    </section>
    
   )
}

export default Service;