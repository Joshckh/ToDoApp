// app.js
import { Task } from './task';
import { Project } from './project';
import '../css/index.css';

const homeBtn = document.getElementById("homeBtn")
const newBtn = document.getElementById("newBtn")
const delBtn = document.getElementById("delBtn")
const taskEditBtn = document.getElementById("taskEditBtn")
const taskDelBtn = document.getElementById("taskDelBtn")

const projectCont = document.querySelector(".projectCont")

newBtn.addEventListener("click", () => {
  const projectName = prompt("Enter project name:"); // Prompt the user for the project name
  if (projectName) {
    const newProject = new Project(projectName); // Create a new Project instance with the provided name
  }
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project');
  projectDiv.textContent = projectName;
  projectCont.appendChild(projectDiv);
});