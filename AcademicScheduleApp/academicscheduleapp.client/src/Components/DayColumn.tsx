import { Card } from "./Card";
import { Class, daysOfWeek } from "../Interfaces";


export function DayColumn({classes, dayOfWeek, clickFn} : {classes:Class[], dayOfWeek:daysOfWeek, clickFn:CallableFunction}) {

    function getData(classId:number) {
        clickFn(classId)
    }
    
    return (
        <div className="grid h-[300px] relative">
        {classes
            ?.filter(c => 
                c.dayOfWeek === dayOfWeek)
            ?.map(c => 
                <Card key={c.id} thisClass={c} clickFn={getData}></Card>)}
        </div>
    )
}