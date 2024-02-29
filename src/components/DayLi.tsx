import {DayOfTheWeekKeys} from "../App.tsx";

const DayLi = (props: {
    active: boolean,
    dayName: DayOfTheWeekKeys,
    text: string,
    onClick: (e: MouseEvent, param: DayOfTheWeekKeys, newActive: number) => void
    dayKey: number
}) => {
    return <p className={`${(props.active && "bg-blue-500 text-white hover:bg-blue-500")} text-xl hover:bg-blue-100 cursor-pointer mr-2 rounded-md`} onClick={(e: never) => props.onClick(e, props.dayName, props.dayKey)}>
        <li className="py-3 px-2">{props.text}</li>
    </p>
}
export default DayLi;