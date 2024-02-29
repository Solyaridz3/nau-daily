import Pair from "./Pair.tsx";
import {IPair} from "../App.tsx";

interface IContent{
    textToShow: string;
    dayToShow: IPair[];
    dayNumber: number;
}

const Content = (props: IContent) => {
    const dayOff = props.dayNumber > 4;
    return <div className="content min-h-dvh bg-blue-50 w-full flex justify-center py-20">
        <div className="shedule sm:w-full md:w-2/3 px-6 flex flex-col gap-6 h-fit">
            <h1 className="text-3xl text-center mb-4">{props.textToShow}</h1>
            {(dayOff && props.dayToShow === undefined) &&
                <h1 className="text-center text-2xl">Сьогодні вихідний 🥳</h1>}
            {props.dayToShow !== undefined && props.dayToShow.map((pair: IPair, index) => <Pair pair={pair}
                                                                                    key={index}/>)}
        </div>
    </div>
}


export default Content;
