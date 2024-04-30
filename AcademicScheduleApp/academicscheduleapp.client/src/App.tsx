import { useState } from 'react';
import { Timetable } from './Components/Timetable';
import { NewClassForm } from './Components/NewClassForm';
import { CustomButton } from './Components/CustomButton';
import { RemoveClassForm } from './Components/RemoveClassForm';
import './App.css';

function App() {
    const [page, setPage] = useState<string>('schedule');
    
    return ( 
    <div className='flex flex-col gap-5'>
        <div className='flex flex-row justify-evenly'>
            <CustomButton isSelected={page==='schedule'} onClick={()=>setPage('schedule')}>Расписание</CustomButton>
            <CustomButton isSelected={page==='add'} onClick={()=>setPage('add')}>Добавить занятие</CustomButton>
            <CustomButton isSelected={page==='remove'} onClick={()=>setPage('remove')}>Удалить занятие</CustomButton>
        </div>
        {page === 'schedule' && <Timetable/>}
        {page === 'add' && <NewClassForm/>}
        {page === 'remove' && <RemoveClassForm/>}
    </div>)
    
}

export default App;