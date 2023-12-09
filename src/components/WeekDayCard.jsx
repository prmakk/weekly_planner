import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import ModalError from "./ModalError";
import Notification from "./Notification";

const WeekDayCard = ({ day }) => {
    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState([]);
    const [activeModal, setActiveModal] = useState(false);
    const [completedTasks, setCompletedTasks] = useState(0);
    const [activeNotification, setActiveNotification] = useState(false);

    useEffect(() => {
        const localStorageKey = `myComponentData_${day}`;
        const storedData = localStorage.getItem(localStorageKey);

        if (storedData) {
            setTodos(JSON.parse(storedData));
        }
    }, [day]);

    useEffect(() => {
        let res = Math.round((completedTasks / todos.length) * 100);
        if (res === 100) {
            setActiveNotification(true);
            //notificationSound();
        } else {
            setActiveNotification(false);
        }
    }, [completedTasks, todos.length]);

    useEffect(() => {
        let count = 0;
        if (todos.length > 0) {
            todos.forEach((todo) => {
                if (todo.isCompleted) {
                    count += 1;
                }
            });
            setCompletedTasks(count);
        }
    }, [todos]);

    const addTodo = () => {
        if (title.trim() !== "") {
            const newTodo = {
                id: Date.now(),
                body: title,
                isCompleted: false,
                day: day,
            };

            const updatedTodos = [newTodo, ...todos];
            setTodos(updatedTodos);

            const localStorageKey = `myComponentData_${day}`;
            localStorage.setItem(localStorageKey, JSON.stringify(updatedTodos));
            setTitle("");
        } else {
            setActiveModal(true);
        }
    };

    const removeTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        const localStorageKey = `myComponentData_${day}`;
        localStorage.setItem(localStorageKey, JSON.stringify(updatedTodos));
    };

    const changeTodo = (id) => {
        const copy = [...todos];
        const current = copy.find((todo) => todo.id === id);
        current.isCompleted = !current.isCompleted;
        setTodos(copy);
        const localStorageKey = `myComponentData_${day}`;
        localStorage.setItem(localStorageKey, JSON.stringify(copy));
    };

    const resetAllTodos = () => {
        setTodos([]);
        const localStorageKey = `myComponentData_${day}`;
        localStorage.setItem(localStorageKey, JSON.stringify([]));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className="weekDayCard">
            { Math.round((completedTasks / todos.length) * 100) === 100 ? 
                <Notification
                    active={activeNotification}
                    setActive={setActiveNotification}
                    title={`You've done all your tasks for ${day}`}
                    subtitle={"Keep it up"}
                /> : null}
            <h3>{day}</h3>
            <form onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button onClick={addTodo}>
                    <img
                        width="15"
                        height="15"
                        src="https://img.icons8.com/ios-glyphs/30/ffffff/plus-math.png"
                        alt="plus-math"
                    />
                    add
                </button>
                {title.trim() === '' ? <ModalError
                    active={activeModal}
                    setActive={setActiveModal}
                    errorMsg={"Input was empty..."}
                />: null}
            </form>

            {todos.length > 0 ? (
                todos.map((todo, index) => {
                    return (
                        <TodoItem
                            todo={todo}
                            removeTodo={removeTodo}
                            changeTodo={changeTodo}
                            isCompleted={todo.isCompleted}
                            key={index}
                        />
                    );
                })
            ) : (
                <p
                    style={{ opacity: 0.6, textAlign: "center" }}
                    className="noInfo"
                >
                    {day === "Notes" ? "No notes" : `No tasks for ${day}`}
                </p>
            )}

            <footer className="footer">
                {todos.length > 0 ? (
                    <>
                        <button className="resetAllBtn" onClick={resetAllTodos}>
                            Reset All
                        </button>
                        <div className="completedTodos">
                            <p>
                                {completedTasks} / {todos.length}
                            </p>
                            <p>
                                {Math.round(
                                    completedTasks > 0
                                        ? (completedTasks / todos.length) * 100
                                        : "0"
                                )}{" "}
                                %
                            </p>
                        </div>
                    </>
                ) : (
                    ""
                )}
            </footer>
        </div>
    );
};

export default WeekDayCard;
