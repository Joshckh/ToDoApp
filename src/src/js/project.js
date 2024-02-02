export class Project{
    constructor(name){
        this.name = name;
        this.list = []
    }

    addTask(task) {
        this.list.push(task);
    }

    removeTask(taskToRemove){
        this.list = this.list.filter(task => task !== taskToRemove);
    }

    complete(taskName) {
        const task = this.list.find(task => task.name === taskName);
    
        if (task) {
          task.completed = true;
        } else {
          console.error(`Task "${taskName}" not found in project "${this.name}".`);
        }
      }

    edit(taskName,item,revise){
        const task = this.list.find(task => task.name === taskName)

        if (task) {
            task[item] = revise;
        } else {
            console.error(`Task "${taskName}" not found in project "${this.name}".`)
        }

    }
    }

