import Data from '../../utils/LOMData.json';
import { Table } from 'flowbite-react';
export const Tables=(props:any)=>{
    const propertyValues = Object.values(Data.fibre.IFB_Tutorial_Carbon);
    const propertyNames=Object.keys(Data.fibre.IFB_Tutorial_Carbon);

    return(
        
 
       
<div className="md:w-1/4 relative overflow-x-auto shadow-md sm:rounded-lg">
 

    <table className="w-full text-sm text-left text-Matte dark:text-Blue-100">
        <thead className="text-xs text-White uppercase bg-Red dark:text-White">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name                </th>
                <th scope="col" className="px-6 py-3">
                    Property
                </th>
            </tr>
        </thead>
        <tbody>
        {propertyNames.map((e,index)=>{
                return(
                    <tr className='bg-blue-100 border-b border-Matte'>
                        <td className='px-6 py-4' >{e}</td>
                        <td className='px-6 py-4' >{propertyValues[index]}</td>
                    </tr>
                )
            })}
            
        </tbody>
    </table>
</div>

    )
}
            