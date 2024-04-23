import { Class } from "../Interfaces";

export function Card({ thisClass} : {thisClass:Class}) {
    const startValue = timeToNumber(thisClass.timeBegin)-dayStart;
    const endValue = timeToNumber(thisClass.timeEnd)-dayStart;
    const dur = endValue-startValue;
    
    return (
        <div className="card bg-red-400" style={{top:startValue, height:dur}}>
            <b className="p-1 truncate left-1">{thisClass.subject.name} ({thisClass.type})</b>
            <p className="p-1 truncate absolute left-1 top-5 text-sm">{thisClass.classroom.type} {thisClass.classroom.name}</p>
            <p className="p-1 absolute left-1 bottom-0 text-sm">{thisClass.dateBegin} - {thisClass.dateEnd}</p>
        </div>
    );
}


function timeToNumber(time: string) : number {
    let [hrs, mins] = time.split(':');
    return +hrs*60 + +mins;
}

const dayStart = timeToNumber('9:00:00');
