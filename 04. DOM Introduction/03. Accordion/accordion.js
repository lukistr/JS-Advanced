function toggle() {
    let disp = document.getElementById('extra').style.display;
    let btn = document.getElementsByClassName('button')[0];

    if (disp !== 'block') {
        document.getElementById('extra').style.display = 'block';
        btn.textContent = 'Less'
    } else {
        document.getElementById('extra').style.display = 'none';
        btn.textContent = 'More'
    }
}