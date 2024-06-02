function generateReport() {
    const output = document.getElementById('output');
    const checkboxes = document.querySelectorAll('thead input[type="checkbox"]');
    const rows = document.querySelectorAll('tbody tr');
    const selectedColumns = [];

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            selectedColumns.push({
                name: checkbox.name,
                index: index
            });
        }
    });

    const report = [];

    rows.forEach(row => {
        const cells = row.children;
        const reportEntry = {};

        selectedColumns.forEach(column => {
            reportEntry[column.name] = cells[column.index].textContent;
        });

        report.push(reportEntry);
    });

    output.value = JSON.stringify(report, null, 2);
}