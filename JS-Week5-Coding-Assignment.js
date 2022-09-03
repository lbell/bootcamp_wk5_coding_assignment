/**
 * Class #1: Task
 * Now with a method!
 *
 */
class Task {
  constructor(taskName) {
    this.taskName = taskName;
    this.taskStatus = "Todo";
  }

  setDone() {
    this.taskStatus = "Done";
  }
}

/**
 * Class #2: Menu
 *
 * Contains: 1 array (tasks)
 * Contains methods: Create, view, delete, and (as a bonus) set a task to done.
 *
 */
class Menu {
  constructor() {
    // Using "at least 1 array"
    this.tasks = [];
  }

  start() {
    let selection = this.showMainMenuOptions();

    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createTask();
          break;
        case "2":
          this.viewTasks();
          break;
        case "3":
          this.doneTask();
          break;
        case "4":
          this.deleteTask();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }
    alert("Goodbye!");
  }

  showMainMenuOptions() {
    return prompt(`
      0) exit
      1) create a new task
      2) view all tasks
      3) mark task as done
      4) delete task
    `);
  }

  buildTaskList() {
    let taskList = "";

    for (let i = 0; i < this.tasks.length; i++) {
      taskList += i + ". " + this.tasks[i].taskName + " - " + this.tasks[i].taskStatus + "\n";
    }

    return taskList;
  }

  createTask() {
    let task = prompt("What are you doing, Dave?: ");
    this.tasks.push(new Task(task));
  }

  viewTasks() {
    alert(this.buildTaskList());
  }

  doneTask() {
    let index = prompt(`Which task did you do?
----------------------------
${this.buildTaskList()}
    `);
    if (index > -1 && index < this.tasks.length) {
      this.tasks[index].setDone();
    }
  }

  deleteTask() {
    let index = prompt(`Which task to delete?
----------------------------
${this.buildTaskList()}
    `);
    if (index > -1 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }
  }
}

let menu = new Menu();
menu.start();

