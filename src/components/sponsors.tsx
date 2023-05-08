import { sponsorsList } from "@/utils/sponsors-list";
import Link from "next/link";
import Image from "next/image";
const Sponsors=()=>{
    return(
        <section>
        <h2 className='p-8 text-center text-4xl font-Montserrat font-semibold text-Matte'>SPONSORS</h2>
        <div className="md:flex justify-around">
        {sponsorsList.map((item,index)=>{
                return(
                    <div className="md:w-1/4  rounded text-Red"  key={index}>                       
                        <Image
                        className="img"
                        src={item.image}
                        alt={`Sponsor${index}`}
                        width={180}
                        height={180}
                        />
                        <h4 className="p-5 text-Matte text-center text-2xl">{item.title}</h4>
                        <div className="p-2 flex justify-center p-4">
                            {item.links?.map((linkitem,i)=>{
                                return(
                                    <Link href={linkitem.URL}>{linkitem.Icon}</Link>
                                )
                            })}
                        </div>
                    </div>
                )})}
        </div>

        </section>
    )
}

export default Sponsors;