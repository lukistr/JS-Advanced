function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        let rows = document.querySelectorAll('tbody tr');
        let srch = document.getElementById('searchField').value;

        for (let i = 0; i < rows.length; i++) {
            rows[i].classList.remove('select');
        }

        for (let i = 0; i < rows.length; i++) {
            if (rows[i].textContent.includes(srch)) {
                rows[i].classList.add('select');
            }
        }
    }
}