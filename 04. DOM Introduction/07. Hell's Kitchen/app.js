function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick () {
        const textInput = document.getElementsByTagName('textarea')[0].value;
        ' console.log(JSON.parse(textInput)) '
        const regex = /\"(.*?)\"/g;
        const result = {};
        let bestRestaurant = '';
        let avgSalary = 0;
        let bestSalary = 0;

        for (const match of textInput.matchAll(regex)) {
            const worker = {}
            const restaurant = match[1].split(' - ')[0];
            const workers = match[1].split(' - ')[1].split(', ');
            if (result[restaurant]) {
                for (const w of workers) {
                    if (result[restaurant][w.split(' ')[0]]) {
                        result[restaurant][w.split(' ')[0]] += Number(w.split(' ')[1]);
                    } else {
                        result[restaurant][w.split(' ')[0]] = Number(w.split(' ')[1]);
                    }
                }
            } else {
                for (const w of workers) {
                    if (worker[w.split(' ')[0]]) {
                        worker[w.split(' ')[0]] += Number(w.split(' ')[1]);
                    } else {
                        worker[w.split(' ')[0]] = Number(w.split(' ')[1]);
                    }
                }
                result[restaurant] = worker;
            }
        }

        for (const rest in result) {
            let sum = 0;
            let avg = 0;
            let best = 0
            for (const k in result[rest]) {
                sum += result[rest][k];
                if (result[rest][k] > best) {
                    best = result[rest][k];
                }
            }
            avg = (sum / Object.keys(result[rest]).length);
            if (avg > avgSalary) {
                avgSalary = avg;
                bestSalary = best;
                bestRestaurant = rest;
            }
        }

        document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestaurant} Average Salary: ${avgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

        for (const k in result[bestRestaurant]) {
            document.querySelector('#workers p').textContent += `Name: ${k} With Salary: ${result[bestRestaurant][k]} `
        }
        document.querySelector('#workers p').textContent.trim();
    }
}


/*
["PizzaHut - Peter 500, George 300, Mark 800, George 300", "TheLake - Bob 1300, Joe 780, Jane 660", "PizzaHut - Peter 500, George 300, Mark 800, George 300"]
["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]
*/