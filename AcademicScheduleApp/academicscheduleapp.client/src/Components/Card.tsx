import { Class } from "../Interfaces";

export function Card({ thisClass} : {thisClass:Class}) {
    const startValue = timeToNumber(thisClass.timeBegin)-dayStart;
    const endValue = timeToNumber(thisClass.timeEnd)-dayStart;
    const dur = endValue-startValue;
    const color = colorFromTime(startValue);
    
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

function colorFromTime(time: number) : string {
    if (time < timeToNumber('10:40:00') - dayStart)
        return '#fca5a5';
    else if (time < timeToNumber('12:20:00') - dayStart)
        return '#fde68a';
    else if (time < timeToNumber('13:50:00') - dayStart)
        return '#d9f99d';
    else if (time < timeToNumber('16:00:00') - dayStart)
        return '#a5f3fc';
    else if (time < timeToNumber('19:20:00') - dayStart)
        return '#818cf8';
    else return '#c084fc';
}