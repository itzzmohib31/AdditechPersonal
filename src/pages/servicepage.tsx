import Navigation from '@/components/navigation';
import { ServicePageData } from '@/utils/services-page-data';
import Image from 'next/image';

const ServicePage=(props:any)=>{
    

    return(
        <section>
        <Navigation></Navigation>
{/* 
        <div className='bg-left flex-col md:p-40 bg-cover hero font-Montserrat '>
        <h2 className='mt-5 md:text-7xl  leading-tight font-bold text-White text-center text-5xl '>{props.serviceData.Title}</h2>
        </div>
    
        
                        <div>
                              <div className="items-center md:flex w-full p-5 m-auto">
                            <div className='w-1/2 p-5'>
                            {
                                props.serviceData.MainPara.map((p:string)=>{
                                    return(
                                        <p className='mt-2 font-sans text-lg  text-Matte'>{p}</p>
                                    )
                                })
                            }
                            </div>
                            <Image
                            src={props.serviceData.MainImg}
                            alt={`${props.serviceData.Title}`}
                            className='w-1/2'
                        />
                        
                        
                        </div>
    
                        <div className='w-1/2 p-5'>
                            {
                                props.serviceData.ServicesList.map((p:string)=>{
                                    return(
                                        <li className='mt-2 font-sans text-lg  text-Matte'>{p}</li>
                                    )
                                })
                            }
                            </div>
    
    
                            <div className='w-full p-5'>
                            {
                                props.serviceData.SecondaryPara.map((p:string)=>{
                                    return(
                                        <p className='mt-2 font-sans text-lg  text-Matte'>{p}</p>
                                    )
                                })
                            }
                            </div>
    
                    </div>
        
    
     */}
        </section>
    )
}

export default ServicePage;