function findBestRestaurant() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick () {
        const inputText = document.getElementsByTagName('textarea')[0].value;
        const restaurantsData = JSON.parse(inputText);
        
        const restaurants = {};

        // Process each restaurant entry
        for (const entry of restaurantsData) {
            const [name, workersString] = entry.split(' - ');
            const workersArray = workersString.split(', ');

            if (!restaurants[name]) {
                restaurants[name] = {
                    workers: [],
                    totalSalary: 0,
                    averageSalary: 0,
                    bestSalary: 0
                };
            }

            // Add workers to the restaurant
            for (const worker of workersArray) {
                const [workerName, workerSalary] = worker.split(' ');
                const salary = Number(workerSalary);

                restaurants[name].workers.push({ workerName, salary });
                restaurants[name].totalSalary += salary;
                if (salary > restaurants[name].bestSalary) {
                    restaurants[name].bestSalary = salary;
                }
            }

            // Update the average salary
            const workerCount = restaurants[name].workers.length;
            restaurants[name].averageSalary = restaurants[name].totalSalary / workerCount;
        }

        // Find the best restaurant
        let bestRestaurantName = '';
        let bestAverageSalary = 0;

        for (const name in restaurants) {
            if (restaurants[name].averageSalary > bestAverageSalary) {
                bestAverageSalary = restaurants[name].averageSalary;
                bestRestaurantName = name;
            }
        }

        const bestRestaurant = restaurants[bestRestaurantName];
        bestRestaurant.workers.sort((a, b) => b.salary - a.salary);

        // Display the best restaurant
        const bestRestaurantDiv = document.querySelector('#bestRestaurant p');
        bestRestaurantDiv.textContent = `Name: ${bestRestaurantName} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

        // Display the workers of the best restaurant
        const workersDiv = document.querySelector('#workers p');
        for (const worker of bestRestaurant.workers) {
            workersDiv.textContent += `Name: ${worker.workerName} With Salary: ${worker.salary} `;
        }
        workersDiv.textContent.trim();
    }
}