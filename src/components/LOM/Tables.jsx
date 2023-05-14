import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect,useState } from 'react';

function createData(Name, Property) {
  return { Name, Property};
}








export default function Tables(props) {

     const [rows,setRows]=useState([]);
    useEffect(()=>{

        if(props.data)
        {
            let rows = [];
            const propertyValues = Object.values(props.data);
            const propertyNames=Object.keys(props.data);
    
    
          propertyNames.map((e,index)=>{
            rows.push(createData(e,propertyValues[index]));
          })
    
          setRows(rows);
        }


    },[props.data])





  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" style={{width:'90%',margin:'auto'}}>
        <TableHead>
          <TableRow>
            <TableCell style={{color:'#8b0000'}}>Name</TableCell>
            <TableCell style={{color:'#8b0000'}} align="right">Property</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.Property}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}