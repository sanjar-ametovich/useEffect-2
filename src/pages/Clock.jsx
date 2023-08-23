import '../css/Clock.css'
import { useEffect, useState } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hourDeg = (hours % 12) * 30 + minutes * 0.5;
    const minuteDeg = minutes * 6;
    const secondDeg = seconds * 6;

    return (
        <div className="clock">
            <div className="clock-block">
                <div className="clock-hour" style={{ transform: `rotate(${hourDeg}deg) rotateX(180deg) translateX(-50%)` }}></div>
                <div className="clock-minute" style={{ transform: `rotate(${minuteDeg}deg) rotateX(180deg) translateX(-50%)` }}></div>
                <div className="clock-second" style={{ transform: `rotate(${secondDeg}deg) rotateX(180deg) translateX(-50%)` }}></div>
                <div className="clock-center"></div>
                <ul className={'clock-numbers'}>
                    <li key={1}>1</li>
                    <li key={2}>2</li>
                    <li key={3}>3</li>
                    <li key={4}>4</li>
                    <li key={5}>5</li>
                    <li key={6}>6</li>
                    <li key={7}>7</li>
                    <li key={8}>8</li>
                    <li key={9}>9</li>
                    <li key={10}>10</li>
                    <li key={11}>11</li>
                    <li key={12}>12</li>
                </ul>
            </div>
        </div>
    );
};

export default Clock;
