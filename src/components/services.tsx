import { serviceList } from "@/utils/services-list";
import Image from "next/image";

const Services=()=>{

    return(
        <section className="pt-20">
            <h2 className='text-center text-4xl font-Montserrat font-semibold text-Matte'>SERVICES</h2>
            <div className="md:flex justify-center" >
            {serviceList.map((item,index)=>{
                return(
                    <div className="md:w-1/4 w-4/5 p-5 m-auto" key={index}>
                        <Image
                        className="img"
                        src={item.image}
                        alt={`Service${index}`}
                        width={180}
                        height={180}
                    />
                        <p className="text-center font-sans text-xl  text-Matte" >{item.title}</p>
                    </div>
                )})}
            </div>
            
         
     
        </section>
    )


}


export default Services;
