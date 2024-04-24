import { Class } from "../Interfaces";

export function CardDetails( {thisClass, clickFn} : {thisClass:Class, clickFn:CallableFunction} ) {
    function handleClick() {
        clickFn()
    }

    return (
        <div>
            {/* Background */}
            <div className="absolute opacity-40 w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-900" onClick={handleClick}></div>

            {/* Card with details */}
            <div className="card-details w-[400px] h-[300px] transform -translate-x-1/2 -translate-y-1/2 bg-black">
                <b className="p-5 absolute left-1">
                    {thisClass.subject.name} ({thisClass.type})
                </b>
                <p className="p-6 absolute" style={{top:'10%'}}>
                    {thisClass.dateBegin} - {thisClass.dateEnd}
                </p>
                <p className="p-6 absolute" style={{top:'20%'}}>
                    {thisClass.classroom.type} {thisClass.classroom.name}
                </p>
                <p className="p-6 absolute top-1/2">
                    {thisClass.professors?.map(p => 
                        `${p.lastName} ${p.firstName[0]}. ${p.secondName[0]}.`
                    ).join(", ")}
                </p>
            </div>
        </div>)

}