// app.js
import { Task } from './task';
import { Project } from './project';


const project1 = new Project("todo");

let task1 = new Task("create project","create a project","today","high");
let task2 = new Task("task","make task","today","high")

project1.addTask(task1)
project1.addTask(task2)
project1.removeTask(task1)
project1.edit("task","asd","tomorrow")
project1.complete("task")
console.log(project1)



