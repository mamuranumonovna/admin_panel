import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const columns = [
  { field: 'id', headerName: '№', width: 70 },
  { field: 'firstName', headerName: 'Клиент', width: 180 },
  { field: 'idOrder', headerName: 'Ид.заказа', width: 160 },
  { field: 'timer', headerName: 'Таймер', width: 160 },
  { field: 'kuryer', headerName: 'Курьер', width: 160 },
  { field: 'filial', headerName: 'Филиал', width: 160 },
  { field: 'type', headerName: 'Тип доставки', width: 160 },
  { field: 'sum', headerName: 'Цена заказа', width: 160 },
  { field: 'adress', headerName: 'Адресс клиента', width: 160 },
 
];

const rows = [
  { id: 1,  firstName: 'Арсений Морозов +998 (90) 123-45-67',idOrder:'5262261',sum:'$888',adress:'ул. Байкальская‚ д. 52‚ кв. 22',kuryer:'-',filial:'Марк Васильев +998 (90) 123-45-67', type:'Доставка'},
  { id: 2,  firstName: 'Дамир Баранов +998 (90) 123-45-67',idOrder:'5637657',sum:'$888',adress:'ул. Байкальская‚ д. 52‚ кв. 22' ,kuryer:'-',filial:'Ева Васильева +998 (90) 123-45-67', type:'Доставка' },
  { id: 3,  firstName: 'Вероника Новиковa +998 (90) 123-45-67',idOrder:'5425683',sum:'$888',adress:'ул. Байкальская‚ д. 52‚ кв. 22' ,kuryer:'-',filial:'Мадияр Макаров +998 (90) 123-45-67', type:'Доставка' },
  { id: 4,  firstName: 'Денис Андреев +998 (90) 123-45-67',idOrder:'9003237',sum:'$888',adress:'ул. Байкальская‚ д. 52‚ кв. 22',kuryer:'-' ,filial:'София  Иванова +998 (90) 123-45-67', type:'Доставка'},
  { id: 5,  firstName: 'Дмитрий Лебедев +998 (90) 123-45-67',idOrder:'9232734',sum:'$888' ,adress:'ул. Байкальская‚ д. 52‚ кв. 22' ,kuryer:'-',filial:'Евгений Кудрявцев +998 (90) 123-45-67', type:'Доставка' },
  { id: 6,  firstName:'Елизавета Фёдорова +998 (90) 123-45-67',idOrder:'5227365' ,sum:'$888' ,adress:'ул. Байкальская‚ д. 52‚ кв. 22',kuryer:'-',filial:'Полина Петрова +998 (90) 123-45-67', type:'Доставка'},
  { id: 7,  firstName: 'Марьяна Соловьёва +998 (90) 123-45-67',idOrder:'9232734',sum:'$888',adress:'ул. Байкальская‚ д. 52‚ кв. 22',kuryer:'-',filial:'Владислав Тарасов +998 (90) 123-45-67', type:'Доставка' },
  { id: 8,  firstName: 'Ева Васильева +998 (90) 123-45-67',idOrder:'7527365',sum:'$888' ,adress:'ул. Байкальская‚ д. 52‚ кв. 22',kuryer:'-',filial:'Захар Романов +998 (90) 123-45-67', type:'Доставка'},
  { id: 9,  firstName: 'Амелия Белова +998 (90) 123-45-67',idOrder:'7426774',sum:'$888' ,adress:'ул. Байкальская‚ д. 52‚ кв. 22' ,kuryer:'-',filial:'Михаил Михайлов +998 (90) 123-45-67', type:'Доставка'},
  { id: 10,  firstName: 'Павел Титов +998 (90) 123-45-67', idOrder:'6426778',sum:'$888',adress:'ул. Байкальская‚ д. 52‚ кв. 22' ,kuryer:'-',filial:'Афина Борисова +998 (90) 123-45-67', type:'Доставка'},
];

export default function DataTable() {
  return (
    <div className=' px-4' style={{ height: 650, width: '100%' }}>
      <DataGrid className='bg-white'
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
