export class Task {
    constructor(name,about,deadline,priority){
        this.name = name;
        this.about = about;
        this.deadline = deadline;
        this.priority = priority;
        this.completed = false
    }
}
