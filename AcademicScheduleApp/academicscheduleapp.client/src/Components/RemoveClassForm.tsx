import { useEffect, useState } from "react"
import { Option, Class, dayOptions } from "../Interfaces"
import { CustomSelect } from "./CustomSelect";

export function RemoveClassForm() {
    const [selection, setSelection] = useState<Class[]>([]);
    const [classOptions, setClassOptions] = useState<Option[]>([]);

    useEffect(() => {
        getClasses();
    }, [])
    
    return (
        <>
            <CustomSelect options={classOptions} placeholder={"Занятие"} onChange={opt => setSelection(opt.value)} />
            <button className="button" onClick={deleteClass}>Удалить</button>
        </>
    )
    function getClasses() {
        fetch('schedule/GetAllClasses')
        .then(res => res.json())
        .then(data => setClassOptions(
            data.map((c:Class) => ({
                value: c, 
                label: `${dayOptions.find(d => d.value == c.dayOfWeek)?.label}, 
                ${c.timeBegin.slice(0, -3)}-${c.timeEnd.slice(0,-3)}, 
                ${c.studentGroup.number}, 
                ${c.subject.name}`
            }) as Option)))
    }
    function deleteClass() {
        if (selection == undefined || selection.length == 0)
            return;

        let payload = selection;
        
        fetch('schedule/DeleteClass', {
            method: 'DELETE',
            headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        getClasses();
    }
}