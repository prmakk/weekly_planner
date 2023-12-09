import React, { useEffect} from "react";

const Notification = ({ active, setActive, title, subtitle }) => {


    useEffect(() =>{
        if(active){
            const timeoutID = setTimeout(() =>{
                setActive(false)
            }, 3000)

            return () => clearTimeout(timeoutID);
        }

    }, [active, setActive])

    return (
        <div className={active
                    ? "notification _active"
                    : "notification"}>
            <img
                width="40"
                height="40"
                src="https://img.icons8.com/cotton/64/appointment-reminders--v2.png"
                alt="appointment-reminders--v2"
            />
            <div className="notification__info">
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>

            <div className="notification__timer">
            </div>
        </div>
    );
};

export default Notification;
