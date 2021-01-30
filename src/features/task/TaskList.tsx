import React from 'react'
import { useSelector } from "react-redux";
import { selectTasks, TaskState } from './taskSlice';
import TaskItem from "./TaskItem";


const TaskList = () => {
    const tasks = useSelector(selectTasks);

    return (
        <>
            {tasks.map((task: TaskState) => (
                <TaskItem
                    key={task.id}
                    task={task} />)
            )}
        </>
    )
}

export default TaskList
