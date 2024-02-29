import DayLi from "./DayLi.tsx";
import {DayOfTheWeekEng, DayOfTheWeekKeys, DaysOfTheWeek} from "../App.tsx";

interface ISide{
    week: 'week1' | 'week2';
    active: number;
    changeDayOfTheWeek(e: MouseEvent, newDay: DayOfTheWeekKeys, newActive: number): void;
    daysOfTheWeekEng: readonly DayOfTheWeekEng[];
    daysOfTheWeek: DaysOfTheWeek;
}

const Sidebar = (props: ISide) => {
    return <div className="sidebar hidden md:block sticky top-0 h-dvh w-1/5 border-r-2 border-blue-100">
        <ul className="px-6 mt-10">
            <li>
                <h1 className="text-xl border-blue-500 rounded-md p-2 mb-4 border-2">
                    Наразі <p></p> тиждень
                    № {props.week === 'week1' ? 1 : 2}
                </h1>
            </li>
            <DayLi active={props.active === 0} dayKey={0} onClick={props.changeDayOfTheWeek} dayName="today"
                   text="Сьогодні"/>
            {/*<DayLi onClick={changeDayOfTheWeek} dayKey="calendar" text="Календар"/>*/}
            {props.daysOfTheWeekEng.slice(0, 5).map((day, index) => {
                return <DayLi
                    active={props.active === index + 1}
                    onClick={props.changeDayOfTheWeek}
                    key={index}
                    dayKey={index + 1}
                    dayName={day}
                    text={props.daysOfTheWeek[day]}/>
            })}
        </ul>
    </div>

}
export default Sidebar;