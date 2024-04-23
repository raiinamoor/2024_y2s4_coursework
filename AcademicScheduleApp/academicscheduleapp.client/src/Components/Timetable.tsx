import { HourLine } from "./HourLine";
export function Timetable() {
    const content = (classes === undefined)
    ?   <p>Загрузка...</p>
    :   <>
        <div className="table m-8 min-w-[1100px] rounded-lg  bg-gray-600 pl">
            <div className="table-header grid rounded-t-lg h-[80px] grid-cols-6 bg-gray-700 pl-10">
                <div className="week-header">Пн</div>
                <div className="week-header">Вт</div>
                <div className="week-header">Ср</div>
                <div className="week-header">Чт</div>
                <div className="week-header">Пт</div>
                <div className="week-header">Сб</div>
            </div>

            <div className="grid grid-cols-1 grid-rows-1">
                <div className="row-start-1 col-start-1 space-y-[58px]">
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

                <div className="row-start-1 col-start-1 pl-10">
                    <div className="grid top-[0px] relative grid-cols-6">
                    </div>
                </div>
            </div>
        </div>
        </>
    
    return (
        <>{content}</>
    )
}

