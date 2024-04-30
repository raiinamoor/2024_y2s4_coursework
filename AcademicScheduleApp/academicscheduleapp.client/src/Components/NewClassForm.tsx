import { useEffect, useState } from "react"
import { Option, Class, Classroom, Professor, StudentGroup, Subject, dayOptions } from "../Interfaces"
import { CustomSelect } from "./CustomSelect";

export function NewClassForm() {
    const [subs, setSubs] = useState<Subject[]>([]);
    const [grs, setGrs] = useState<StudentGroup[]>([]);
    const [profs, setProfs] = useState<Professor[]>([]);
    const [rooms, setRooms] = useState<Classroom[]>([]);

    useEffect(() => {
        populateFields()
    }, [])

    const c: Class = {} as Class;

    const groups = toOptions(grs, g => g.number);
    const subjects = toOptions(subs, s => s.name);
    const professors = toOptions(profs, p => `${p.lastName} ${p.firstName} ${p.secondName}`)
    const classrooms = toOptions(rooms, r => r.name);

    // функция для преобразования в тип Option для использования в компоненте Select
    function toOptions(collection:Array<any>, callback:(item:any) => string) : Array<Option> {
        return collection.map(
            i => ({value: i, label: callback(i)}));
    }
    
    return (
        <div className="gap-5 flex flex-col">
            <div className="mx-10 grid grid-cols-2 gap-5">
                <div className="grid grid-rows-2 gap-4 justify-end">
                    <input className="input-element" type="time" onChange={e => c.timeBegin = e.target.value + ':00'}/> 
                    <input className="input-element" type="time" onChange={e => c.timeEnd = e.target.value + ':00'}/>
                </div>
                <div className="grid grid-rows-2 gap-4 justify-start">
                    <input className="input-element" type="date" onChange={e => c.dateBegin = e.target.value}/>
                    <input className="input-element" type="date" onChange={e => c.dateEnd = e.target.value}/>
                </div>
            </div>
            <div className="grid grid-rows-2 grid-cols-3 gap-4">
                <CustomSelect options={groups} placeholder="Группа" onChange={opt => c.studentGroup = opt?.value}/>
                <CustomSelect options={subjects} placeholder="Дисциплина" onChange={opt => c.subject = opt?.value}/>
                <input className="input-element w-full" placeholder="Тип занятия (лаб. раб., практикум и т.п.)" onChange={e => c.type = e.target.value}/>
                <CustomSelect options={dayOptions} placeholder="День недели" onChange={opt => c.dayOfWeek = opt?.value}/>
                <CustomSelect  options={professors} isMulti placeholder="Преподаватели" onChange={opt => c.professors = opt.map((p:Option) => p.value)}/>
                <CustomSelect options={classrooms} placeholder="Аудитория" onChange={opt => c.classroom = opt?.value}/>
            </div>

            <button className="button m-10" onClick={verifyInputData}>Добавить</button>

        </div>
    )

    function populateFields() {
        fetch('schedule/GetData')
        .then(res => res.json())
        .then(data => {
            setGrs(data.groups)
            setSubs(data.subjects)
            setProfs(data.professors)
            setRooms(data.classrooms)
        });
    }
    function verifyInputData() {
        if (c.dayOfWeek !== undefined
            && c.subject !== undefined
            && c.professors.length != 0
            && c.classroom !== undefined
            && c.studentGroup !== undefined
            && c.type !== undefined
            && c.timeBegin !== undefined
            && c.timeEnd !== undefined
            && c.dateBegin !== undefined
            && c.dateEnd !== undefined
        ) {
            postClass();
        } else {
            alert("Все поля должны быть заполнены.");
        }
    }
    function postClass() {
        let payload: Class = c;
        
        fetch('schedule/PostClass',
        {
            method: 'POST',
            headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res => {
            if (res.status == 400)
                alert("Одно или несколько полей заполнены неверно. Убедитесь, что введённые данные не содержат ошибок.");
        })
    }
} 