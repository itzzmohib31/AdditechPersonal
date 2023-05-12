import { useRouter } from 'next/router';
import { ServicePageData } from '@/utils/services-page-data';
import ServicePage from './servicepage';
import { useEffect, useState } from 'react';
import Error404 from './404';
const Service=()=>{
    const router = useRouter();
    const [serviceObj,setServiceObj]=useState<Object>();

    useEffect(()=>{
     let ServiceObj=ServicePageData.find(el=>el.Title==router.query.service);
     setServiceObj(ServiceObj);
    },[router.query.service])


   return(
       <div>
      {serviceObj!=undefined?<ServicePage serviceData={serviceObj} />:<Error404/>}

       </div>
    
   )
}

export default Service;