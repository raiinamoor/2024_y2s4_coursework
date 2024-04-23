export function HourLine({children} : {children: string}) {
    return (
        <div className="flex flex-row relative items-center col-span-6">
            <p className="h-0 absolute m-2 top">{children}</p>
            <div className="hour-line"></div>
        </div>
    )
}