import { useEffect, useState } from "react";
import { HourLine } from "./HourLine";
import { DayColumn } from "./DayColumn";
import { Option, Class, daysOfWeek } from "../Interfaces";
import { CardDetails } from "./CardDetails";
import { CustomSelect } from "./CustomSelect";

export function Timetable() {
    const [input, setInput] = useState<string>('221-3710');
    const [groupOptions, setGroupOptions] = useState<Option[]>([]);
    const [classes, setClasses] = useState<Class[]>([]);
    const [details, setDetails] = useState<boolean>(false);
    const [displayedClass, setDisplayedClass] = useState<Class>();

    useEffect(() => {
        getGroups();
    }, [])
    
    // наполнение таблицы данными
    useEffect(() => {
        populateTimetable(input);
    }, [input])

    // выбор данных для отображения на CardDetails
    function showDetails(classId:number) : void {
        setDisplayedClass(classes?.find(c => c.id === classId))
        setDetails(!details);
    } 

    const content = (classes === undefined)
    ?   <p>Загрузка...</p>
    :   <>
        <CustomSelect placeholder="Номер группы" options={groupOptions} onChange={o => setInput(o.value.number)} isMulti={false}/>

        <div className="table mx-8 min-w-[1150px] rounded-lg bg-gray-600 pl">
            <div className="table-header grid rounded-t-lg h-[80px] grid-cols-6 bg-gray-700 pl-[75px]">
                <div className="week-header">Пн</div>
                <div className="week-header">Вт</div>
                <div className="week-header">Ср</div>
                <div className="week-header">Чт</div>
                <div className="week-header">Пт</div>
                <div className="week-header">Сб</div>
            </div>

            <div className="grid overflow-auto h-[450px] grid-cols-1 grid-rows-1">
                <div className="pt-[24px] row-start-1 col-start-1 space-y-[58px]">
                    <HourLine>9:00</HourLine>
                    <HourLine>10:00</HourLine>
                    <HourLine>11:00</HourLine>
                    <HourLine>12:00</HourLine>
                    <HourLine>13:00</HourLine>
                    <HourLine>14:00</HourLine>
                    <HourLine>15:00</HourLine>
                    <HourLine>16:00</HourLine>
                    <HourLine>17:00</HourLine>
                    <HourLine>18:00</HourLine>
                    <HourLine>19:00</HourLine>
                    <HourLine>20:00</HourLine>
                </div>

                <div className="row-start-1 pt-[24px] col-start-1 pl-[75px]">
                    <div className="grid top-[0px] relative grid-cols-6">
                        <DayColumn clickFn={showDetails} classes={classes} dayOfWeek={daysOfWeek.monday}></DayColumn>
                        <DayColumn clickFn={showDetails} classes={classes} dayOfWeek={daysOfWeek.tuesday}></DayColumn>
                        <DayColumn clickFn={showDetails} classes={classes} dayOfWeek={daysOfWeek.wednesday}></DayColumn>
                        <DayColumn clickFn={showDetails} classes={classes} dayOfWeek={daysOfWeek.thursday}></DayColumn>
                        <DayColumn clickFn={showDetails} classes={classes} dayOfWeek={daysOfWeek.friday}></DayColumn>
                        <DayColumn clickFn={showDetails} classes={classes} dayOfWeek={daysOfWeek.saturday}></DayColumn>
                    </div>
                </div>
            </div>
        </div>
        {details && <CardDetails thisClass={displayedClass!} clickFn={showDetails}/>}
        </>
    
    return (
        <>{content}</>
    )

    function populateTimetable(groupNumber:string) {
        fetch(`schedule/GetClasses?group=${groupNumber}`)
        .then(res => res.json())
        .then(data => setClasses(data))
        console.log('Populated table with data: ', groupNumber)
    }
    function getGroups() {
        fetch(`schedule/GetAllGroups`)
        .then(res => res.json())
        .then(data => setGroupOptions(
            data.map((g:any) => ({value: g, label: g.number}) as Option)))
    }
}

