import menuIcon from "/menu.svg";
import DayLi from "./DayLi.tsx";
import {useState} from "react";
import {DayOfTheWeekEng, DayOfTheWeekKeys, DaysOfTheWeek} from "../App.tsx";


interface INav {
    active: number;
    daysOfTheWeekEng: readonly DayOfTheWeekEng[];
    daysOfTheWeek: DaysOfTheWeek;
    changeDayOfTheWeek(e: MouseEvent, newDay: DayOfTheWeekKeys, newActive: number): void;
}


const Navbar = (props: INav) => {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

    return <nav
        className={"md:hidden overflow-hidden p-2 border-blue-100 bg-blue-500 w-full fixed top-0 transition-all " + `${isMenuOpen && 'h-[23rem]' || 'h-14'}`}>
        <img onClick={() => setMenuOpen(!isMenuOpen)} className={"w-10 h-10"} src={menuIcon} alt="menu"/>
        <ul className={`${!isMenuOpen && 'hidden'}`}>
            <DayLi active={props.active === 0} dayKey={0} onClick={props.changeDayOfTheWeek} dayName="today"
                   text="Сьогодні"/>
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
    </nav>
}

export default Navbar;