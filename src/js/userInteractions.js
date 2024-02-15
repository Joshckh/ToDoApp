import camelCase from 'camelcase';
import { Project, projectList } from './project';
import { Task } from './task';
import * as uiUpdater from './uiUpdater';


function listenForClicks() {
    const homeBtn = document.getElementById("homeBtn")
    homeBtn.addEventListener("click", homeBtnAction)

    const newBtn = document.getElementById("newBtn");
    newBtn.addEventListener("click", newBtnAction);

    const delBtn = document.getElementById("delBtn");
    delBtn.addEventListener("click", delBtnAction)

    const taskAddBtn = document.getElementById("taskEditBtn")
    taskAddBtn.addEventListener("click", addTask())
    const taskEditBtn = document.getElementById("taskEditBtn")
    const taskDelBtn = document.getElementById("taskDelBtn")
}

const projectCont = document.querySelector(".projectCont")  

function homeBtnAction() {
    console.log("You are home!")
}

function newBtnAction(){
    const projectName = prompt("Enter project name:"); 
    if (projectName) {
        const camelCaseName = camelCase(projectName);
        const newProject = new Project(camelCaseName);
        projectList.push(newProject)
        uiUpdater.createProjectDiv(projectName,projectCont);
  }
}

function delBtnAction(){
    
    uiUpdater.removeProjectDiv(projectName,projectCont);
}

export { listenForClicks };