class HomeRenovation {
    constructor(budget) {
        this.budget = budget;
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask(description, cost, priority) {
        if (cost > this.budget) {
            return `Not enough budget to add '${description}' task.`;
        }
        this.tasks.push({ description, cost, priority });
        this.budget -= cost;
        return `The task '${description}' has been successfully added to the renovation plan.`;
    }

    markTaskAsCompleted(description) {
        const taskIndex = this.tasks.findIndex(task => task.description === description);
        if (taskIndex === -1) {
            throw new Error(`Task '${description}' not found in the renovation plan.`);
        }
        const task = this.tasks.splice(taskIndex, 1)[0];
        this.completedTasks.push(task);
        return `The task '${description}' has been successfully completed.`;
    }

    getPriorityTasksCount(minimalPriority) {
        if (minimalPriority <= 0) {
            return "The priority cannot be zero or negative.";
        }
        const tasksCount = this.tasks.filter(task => task.priority >= minimalPriority).length;
        if (tasksCount === 0) {
            return `No tasks found with priority ${minimalPriority} or higher.`;
        }
        return `You have ${tasksCount} tasks to prioritize.`;
    }

    renovationSummary() {
        if (this.completedTasks.length === 0) {
            throw new Error("No tasks have been completed yet!");
        }
        let summary = `Budget left $${this.budget}.\n`;
        summary += `You have completed ${this.completedTasks.length} tasks.\n`;
        summary += "Pending tasks in the renovation plan:\n";
        this.tasks.forEach(task => {
            summary += `${task.description} - Cost: ${task.cost}, Priority: ${task.priority}\n`;
        });
        return summary.trim();
    }
}

// Example usage
const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2)); 
console.log(renovation.addTask("Install new windows", 5000, 1)); 
console.log(renovation.addTask("New Roof", 5000, 1)); 

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
