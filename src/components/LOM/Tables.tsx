import Data from '../../utils/LOMData.json';

export const Tables=(props:any)=>{
    const propertyValues = Object.values(Data.fibre.IFB_Tutorial_Carbon);
    const propertyNames=Object.keys(Data.fibre.IFB_Tutorial_Carbon);

    return(
        
        <table>
            {propertyNames.map((e,index)=>{
                return(
                    <tr>
                        <td>{e}</td>
                        <td>{propertyValues[index]}</td>
                    </tr>
                )
            })}
        </table>

    )
}

