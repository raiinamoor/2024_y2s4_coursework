import { Class } from "../Interfaces";

export function CardDetails( {thisClass, clickFn} : {thisClass:Class, clickFn:CallableFunction} ) {
    function handleClick() {
        clickFn()
    }

    return (
        <div>
            {/* Background */}
            <div className="fixed opacity-40 w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-900" onClick={handleClick}></div>

            {/* Card with details */}
            <div className="card-details text-gray-300 pt-5 text-left w-[400px] h-[300px] transform -translate-x-1/2 -translate-y-1/2 bg-black">
                <b className="px-6 block left-1">
                    {thisClass.subject.name} ({thisClass.type})
                </b>
                <p className="p-6 absolute" style={{top:'15%'}}>
                    {thisClass.dateBegin} - {thisClass.dateEnd}
                </p>
                <p className="p-6 absolute" style={{top:'50%'}}>
                    {thisClass.classroom.type} {thisClass.classroom.name}
                </p>
                <p className="p-6 absolute" style={{top:'65%'}}>
                    {thisClass.professors?.map(p => 
                        `${p.lastName} ${p.firstName[0]}. ${p.secondName[0]}.`
                    ).join(", ")}
                </p>
            </div>
        </div>)

}