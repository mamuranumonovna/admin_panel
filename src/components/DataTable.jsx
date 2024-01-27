import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: '№', width: 70 },
  { field: 'firstName', headerName: 'Клиент', width: 160 },
  { field: 'idOrder', headerName: 'Ид.заказа', width: 160 },
  { field: 'timer', headerName: 'Таймер', width: 160 },
  { field: 'kuryer', headerName: 'Курьер', width: 160 },
  { field: 'filial', headerName: 'Филиал', width: 160 },
  { field: 'type', headerName: 'Тип доставки', width: 160 },
  { field: 'sum', headerName: 'Цена заказа', width: 160 },
  { field: 'adress', headerName: 'Адресс клиента', width: 160 },
 
];

const rows = [
  { id: 1,  firstName: 'Арсений Морозов +998 (90) 123-45-67',idOrder:'5262261' },
  { id: 2,  firstName: 'Дамир Баранов +998 (90) 123-45-67',idOrder:'5637657' },
  { id: 3,  firstName: 'Вероника Новиковa +998 (90) 123-45-67',idOrder:'5425683' },
  { id: 4,  firstName: 'Денис Андреев +998 (90) 123-45-67',idOrder:'9003237'},
  { id: 5,  firstName: 'Дмитрий Лебедев +998 (90) 123-45-67',idOrder:'5262261'  },
  { id: 6,  firstName:'Елизавета Фёдорова +998 (90) 123-45-67',idOrder:'5262261' },
  { id: 7,  firstName: 'Марьяна Соловьёва +998 (90) 123-45-67',idOrder:'5262261'},
  { id: 8,  firstName: 'Ева Васильева +998 (90) 123-45-67',idOrder:'5262261'},
  { id: 9,  firstName: 'Амелия Белова +998 (90) 123-45-67',idOrder:'5262261' },
  { id: 10,  firstName: 'Павел Титов +998 (90) 123-45-67', idOrder:'5262261'},
];

export default function DataTable() {
  return (
    <div style={{ height: 650, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    
  )
}
