import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface TasksState {
    idCount: number,
    tasks: TaskState[]
}

export type TaskState = {
    id: number,
    title: string,
    completed: boolean
}

const initialState: TasksState = {
    idCount: 3,
    tasks: [
        {
            id: 1, title: "Task 1", completed: true
        },
        {
            id: 2, title: "Task 2", completed: false
        },
        {
            id: 3, title: "Task 3", completed: false
        }
    ]
};

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        newTask: (state, action: PayloadAction<string>) => {
            state.idCount++;
            const newItem = {
                id: state.idCount,
                title: action.payload,
                completed: false
            };
            state.tasks = [newItem, ...state.tasks]
        },
        completeTask: (state, action: PayloadAction<TaskState>) => {
            const task = state.tasks.find((t) => { return t.id === action.payload.id });
            if (task) {
                task.completed = !task.completed;
            }
        },
        deleteTask: (state, action: PayloadAction<TaskState>) => {
            state.tasks = state.tasks.filter((t) => { return t.id !== action.payload.id });
        },
    },
});

export const { newTask, completeTask, deleteTask } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.task.tasks;

export default taskSlice.reducer;
