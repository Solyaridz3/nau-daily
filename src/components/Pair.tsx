import pairTime from "../data/pairTime.json";
import { IPair } from "../App.tsx";
import classRoomsData from "../data/classRooms.json";

type ClassRooms = {
    [key: string]: {
        [key: string]: {
            classroom: string;
            googleMeet: string;
        };
    };
};

const classRooms: ClassRooms = classRoomsData;

const Pair = (props: { pair: IPair }) => {
    const currentPairTime = pairTime.filter((timeData) => {
        return timeData.pairNumber === props.pair.pairNumber;
    })[0];
    const pairClassRoomData =
        classRooms[props.pair.pairFormat][props.pair.name];
    let classroom = "";
    let googleMeet = "";
    if (pairClassRoomData !== undefined) {
        classroom = pairClassRoomData.classroom;
        googleMeet = pairClassRoomData.googleMeet;
    }
    return (
        <div className="pair">
            <ul className="text-xl border-2 border-blue-500 rounded-md p-6">
                <li>
                    Пара №{props.pair.pairNumber}: {props.pair.name}
                </li>
                <li>Формат: {props.pair.pairFormat}</li>
                <li>Веде: {props.pair.professor}</li>
                <li>
                    Пара триває з{" "}
                    <p className="inline text-2xl">{currentPairTime.start}</p>{" "}
                    до{" "}
                    <p className="inline text-2xl   ">{currentPairTime.end}</p>
                </li>
                <div className="text-xl text-white flex justify-between pt-2">
                    {googleMeet && (
                        <a
                            href={googleMeet}
                            target="_blank"
                            className="p-2 rounded-md bg-blue-500 hover:bg-blue-700"
                        >
                            <li>Google meet</li>
                        </a>
                    )}
                    {classroom && (
                        <a
                            href={classroom}
                            target="_blank"
                            className="p-2 rounded-md bg-blue-500 hover:bg-blue-700"
                        >
                            <li>Classroom</li>
                        </a>
                    )}
                </div>
            </ul>
        </div>
    );
};

export default Pair;
