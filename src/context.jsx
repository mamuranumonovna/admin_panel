import React, { createContext, useContext, useState } from 'react'
import getStore from './utils/get'
import { useNavigate } from 'react-router-dom'


const UserContext = createContext()
export function UserProvider({ children }) {
 
    const[list,setList]=useState(getStore('lists'));
    const[user,setUser]=useState('');
    const[password,setPassword]=useState('');
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [selectedRow, setSelectedRow] = React.useState(null);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [searchInput, setSearchInput] = useState('');
    const[activLink,setActivLink]=useState(true);
    const [showCalendar, setShowCalendar] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleLogin = () => {
      setAuthenticated(true);
      localStorage.setItem('lists', JSON.stringify(list));
    };
 
  
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
    e.preventDefault()
    const newItem={title:user,password:password}
    setList([...list,newItem])
    setUser('')
    setPassword('')
    navigate('/')
 }
 const handleChangePage = (event, newPage) => {
  setPage(newPage);
  setSelectedRow(null);
};
const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
  setSelectedRow(null);
};
const handleRowClick = (row) => {
  setSelectedRow(row);
};
const navigateToSingleClient = (row) => {
  handleRowClick(row);
  navigate(`/client/${row.title}`); 
};

const handleCalendarButtonClick = () => {
  setShowCalendar(!showCalendar);
};
const handleSearchChange = (e) => {
  setSearchTerm(e.target.value);
};

const shortcutsItems = [
  {
    label: 'This Week',
    getValue: () => {
      const today = dayjs();
      return [today.startOf('week'), today.endOf('week')];
    },
  },
  {
    label: 'Last Week',
    getValue: () => {
      const today = dayjs();
      const prevWeek = today.subtract(7, 'day');
      return [prevWeek.startOf('week'), prevWeek.endOf('week')];
    },
  },
  {
    label: 'Last 7 Days',
    getValue: () => {
      const today = dayjs();
      return [today.subtract(7, 'day'), today];
    },
  },
  {
    label: 'Current Month',
    getValue: () => {
      const today = dayjs();
      return [today.startOf('month'), today.endOf('month')];
    },
  },
  {
    label: 'Next Month',
    getValue: () => {
      const today = dayjs();
      const startOfNextMonth = today.endOf('month').add(1, 'day');
      return [startOfNextMonth, startOfNextMonth.endOf('month')];
    },
  },
  { label: 'Reset', getValue: () => [null, null] },
];

  return (
    <UserContext.Provider
      value={{
        
          list,
          setList,
          user,
          setUser,
          password,
          setPassword,
          handleSubmit,
          isAuthenticated,
          setAuthenticated,
          handleLogin,
          selectedRow, 
          setSelectedRow,
          page,
          setPage,
          rowsPerPage, 
          setRowsPerPage,
          handleChangePage,
          handleChangeRowsPerPage,
          handleRowClick,
          navigateToSingleClient,
          searchInput,
          setSearchInput,
          activLink,
          setActivLink,
          showCalendar, 
          setShowCalendar,
          searchTerm, 
          setSearchTerm,
          handleCalendarButtonClick,
          handleSearchChange


      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useGlobalContext() {
  return useContext(UserContext)
}
