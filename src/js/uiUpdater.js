export function createProjectDiv(projectName,projectCont) {
    let projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.textContent = projectName;
    projectCont.appendChild(projectDiv);    
}
