import Navbar from "./Navbar.tsx";
import {DayOfTheWeekEng, DayOfTheWeekKeys, DaysOfTheWeek, IPair, IWeek} from "../App.tsx";
import React, {useState} from "react";
import Sidebar from "./Sidebar.tsx";

interface IPanels {
    daysOfTheWeekEng: readonly DayOfTheWeekEng[];
    daysOfTheWeek: DaysOfTheWeek;
    setDayToShow: React.Dispatch<React.SetStateAction<IPair[]>>
    setTextToShow: React.Dispatch<React.SetStateAction<string>>
    today: IPair[];
    currentDay: DayOfTheWeekEng;
    week: 'week1' | 'week2';
    currentWeekPairs: IWeek;
}

const Panels = (props: IPanels) => {
    const [active, setActive] = useState<number>(0);
    const changeDayOfTheWeek = (e: MouseEvent, newDay: DayOfTheWeekKeys, newActive: number): void => {
        e.preventDefault();
        if (newDay === "today") {
            props.setDayToShow(props.today);
            props.setTextToShow(`Сьогодні - ${props.daysOfTheWeek[props.currentDay]}`);
        } else if (newDay === "calendar") {
            props.setTextToShow("Календар");
        } else {
            props.setDayToShow(props.currentWeekPairs[newDay]);
            props.setTextToShow(props.daysOfTheWeek[newDay]);
        }
        setActive(newActive);
    }

    return <>
        <Navbar
            active={active}
            changeDayOfTheWeek={changeDayOfTheWeek}
            daysOfTheWeek={props.daysOfTheWeek}
            daysOfTheWeekEng={props.daysOfTheWeekEng}
        />
        <Sidebar
            week={props.week}
            active={active}
            changeDayOfTheWeek={changeDayOfTheWeek}
            daysOfTheWeekEng={props.daysOfTheWeekEng}
            daysOfTheWeek={props.daysOfTheWeek}
        />
    </>
}
export default Panels;