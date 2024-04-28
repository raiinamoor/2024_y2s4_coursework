import { Class } from "../Interfaces";

export function Card({ thisClass, clickFn } : {thisClass:Class, clickFn:CallableFunction}) {
    const startValue = timeToNumber(thisClass.timeBegin)-dayStart;
    const endValue = timeToNumber(thisClass.timeEnd)-dayStart;
    const dur = endValue-startValue;
    const color = colorFromTime(startValue);
    
    function handleClick() : void {
        clickFn(thisClass.id);
    }
    
    return (
        <div className="card truncate items-start ease-in-out duration-200 hover:opacity-100 p-1" onClick={handleClick} style={{top:startValue, height:dur, backgroundColor:color}}>
            <b className="p-1 left-1">{thisClass.subject.name} ({thisClass.type})</b>
            <p className="p-1 text-sm">{thisClass.classroom.type} {thisClass.classroom.name}</p>
            <p className="p-1 text-sm">{thisClass.dateBegin} - {thisClass.dateEnd}</p>
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