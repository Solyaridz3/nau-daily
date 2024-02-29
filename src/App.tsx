import './App.css'
import data from './data/DataBase.json';
import {useState} from "react";
import Panels from "./components/Panels.tsx";
import Content from "./components/Content.tsx";

export interface IPair {
    name: string
    professor: string,
    pairFormat: string,
    pairNumber: number,
    classroom?: string,
    googleMeet?: string
}

export interface IWeek {
    [key: string]: IPair[]
}


const getWeek = (date: Date): number => {
    const startDate = new Date("February 23 2024 23:59:59");
    const nowDate = new Date(date);
    const dayDifference = nowDate.getTime() - startDate.getTime();
    const daysSinceDate = dayDifference / (24 * 60 * 60 * 1000);
    return Number(Math.ceil(daysSinceDate / 7).toFixed());
}

const daysOfTheWeek = {
    "monday": "Понеділок",
    "tuesday": "Вівторок",
    "wednesday": "Середа",
    "thursday": "Четвер",
    "friday": "П'ятниця",
    "saturday": "Субота",
    "sunday": "Неділя"
} as const;

const daysOfTheWeekEng = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] as const;

export type DayOfTheWeekEng = typeof daysOfTheWeekEng[number];

export type DaysOfTheWeek = typeof daysOfTheWeek;

export type DayOfTheWeekKeys = keyof typeof daysOfTheWeek | 'calendar' | 'today';

const App = () => {
    const d = new Date();
    const week = getWeek(d) % 2 === 0 ? 'week2' : 'week1';
    const dayNumber = (d.getDay() + 6) % 7; // monday is 1
    const currentDay: DayOfTheWeekEng = daysOfTheWeekEng[dayNumber];
    const currentWeekPairs: IWeek = data[week];
    const today: IPair[] = currentWeekPairs[currentDay];
    const [dayToShow, setDayToShow] = useState<IPair[]>(today);
    const [textToShow, setTextToShow] = useState<string>(`Сьогодні - ${daysOfTheWeek[currentDay]}`);
    return <>
        <div className="min-h-full min-w-full container">
            <div className="main flex flex-col md:flex-row items-start min-h-dvh">
                <Panels
                    week={week}
                    today={today}
                    daysOfTheWeekEng={daysOfTheWeekEng}
                    daysOfTheWeek={daysOfTheWeek}
                    currentDay={currentDay}
                    currentWeekPairs={currentWeekPairs}
                    setDayToShow={setDayToShow}
                    setTextToShow={setTextToShow}
                />
                <Content dayNumber={dayNumber} dayToShow={dayToShow} textToShow={textToShow}/>
            </div>
        </div>
    </>
}
export default App
