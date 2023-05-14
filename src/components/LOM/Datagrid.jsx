import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';



export default function GridTable(props) {
  let propertyNames;
  let temp = props.data[0];
  let columns = [];

  if (temp) {
    propertyNames = Object.keys(temp);
    console.log(propertyNames);

    propertyNames.map((e, index) => {
      columns.push({
        field: e,
        headerName: e,
        width: 100,
        flex: 2
      })

    })
  }





  return (
    <Box sx={{ height: 700, width: '40%' }}>
      <DataGrid
        style={{ background: 'white' }}
        getRowId={(row) => row.Vf}
        rows={props.data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 11,
            },
          },
        }}
        pageSizeOptions={[11]}
      />
    </Box>
  );
}