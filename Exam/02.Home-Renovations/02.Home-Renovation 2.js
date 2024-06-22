class HomeRenovation {
    constructor(initialBudget) {
        this.remainingBudget = initialBudget;
        this.pendingTasks = [];
        this.finishedTasks = [];
    }

    addTask(taskDescription, taskCost, taskPriority) {
        if (taskCost > this.remainingBudget) {
            return `Not enough budget to add '${taskDescription}' task.`;
        }
        this.pendingTasks.push({ taskDescription, taskCost, taskPriority });
        this.remainingBudget -= taskCost;
        return `The task '${taskDescription}' has been successfully added to the renovation plan.`;
    }

    markTaskAsCompleted(taskDescription) {
        const taskIndex = this.pendingTasks.findIndex(task => task.taskDescription === taskDescription);
        if (taskIndex === -1) {
            throw new Error(`Task '${taskDescription}' not found in the renovation plan.`);
        }
        const task = this.pendingTasks.splice(taskIndex, 1)[0];
        this.finishedTasks.push(task);
        return `The task '${taskDescription}' has been successfully completed.`;
    }

    getPriorityTasksCount(minPriority) {
        if (minPriority <= 0) {
            return "The priority cannot be zero or negative.";
        }
        const priorityTaskCount = this.pendingTasks.filter(task => task.taskPriority >= minPriority).length;
        if (priorityTaskCount === 0) {
            return `No tasks found with priority ${minPriority} or higher.`;
        }
        return `You have ${priorityTaskCount} tasks to prioritize.`;
    }

    renovationSummary() {
        if (this.finishedTasks.length === 0) {
            throw new Error("No tasks have been completed yet!");
        }
        let summary = `Budget left $${this.remainingBudget}.\n`;
        summary += `You have completed ${this.finishedTasks.length} tasks.\n`;
        summary += "Pending tasks in the renovation plan:\n";
        this.pendingTasks.forEach(task => {
            summary += `${task.taskDescription} - Cost: ${task.taskCost}, Priority: ${task.taskPriority}\n`;
        });
        return summary.trim();
    }
}

// Example usage
const renovation1 = new HomeRenovation(10000);
console.log(renovation1.addTask("Paint walls", 1500, 2)); 
console.log(renovation1.addTask("Install new windows", 5000, 1)); 
console.log(renovation1.addTask("New Roof", 5000, 1)); 

const renovation2 = new HomeRenovation(10000);
console.log(renovation2.addTask("Paint walls", 1500, 2)); 
console.log(renovation2.addTask("Install new windows", 5000, 1)); 
console.log(renovation2.markTaskAsCompleted("Paint walls")); 
try {
    console.log(renovation2.markTaskAsCompleted("Change doors"));
} catch (error) {
    console.error(error.message);
}

const renovation3 = new HomeRenovation(10000);
console.log(renovation3.addTask("Paint walls", 1500, 2)); 
console.log(renovation3.addTask("Install new windows", 5000, 1)); 
console.log(renovation3.markTaskAsCompleted("Paint walls")); 
console.log(renovation3.getPriorityTasksCount(1)); 

const renovation4 = new HomeRenovation(10000);
console.log(renovation4.addTask("Paint walls", 1500, 2)); 
console.log(renovation4.addTask("Install new windows", 5000, 1)); 
console.log(renovation4.markTaskAsCompleted("Paint walls")); 
try {
    console.log(renovation4.renovationSummary());
} catch (error) {
    console.error(error.message);
}
