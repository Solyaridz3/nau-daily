import {DayOfTheWeekKeys} from "../App.tsx";

const DayLi = (props: {
    active: boolean,
    dayName: DayOfTheWeekKeys,
    text: string,
    onClick: (e: MouseEvent, param: DayOfTheWeekKeys, newActive: number) => void
    dayKey: number
}) => {
    return <button className={`${(props.active && "bg-blue-500 text-white md:hover:bg-blue-500")} md:hover:bg-blue-100 text-start w-full text-xl cursor-pointer mr-2 rounded-md`} onClick={(e: never) => props.onClick(e, props.dayName, props.dayKey)}>
        <li className="py-3 px-2">{props.text}</li>
    </button>
}
export default DayLi;