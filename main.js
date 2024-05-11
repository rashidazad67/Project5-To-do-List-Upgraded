#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
//Print a welcome message.
console.log(chalk.blueBright.bold("\n \t Welcom to Rashid ToDo List App.\n"));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select one Option",
                choices: ["Add Task", "Delete Task", "Update Task", "view Todo List", "Exit"]
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deletTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "view Todo List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
//Funtion to add new task in todo list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter New Task.",
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added in Todo List.`);
};
//Function to view Todo list taks.
let viewTask = async () => {
    console.log("\n Your Todo List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
//function to delete a task
let deletTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index number of the task to delete:",
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedTask} this task has been deleted from Todo List.`);
};
main();
//Funtion to update task
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index number you want to update:"
        },
        {
            name: "new_task",
            type: "input",
            message: "Enter the new task name:"
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task at index number ${update_task_index.new_task - 1} updated successfully. For updated list check option:"view Todo List"`);
};
