function lockedProfile() {
    const btns = document.getElementsByTagName("button");

    for (const btn of btns) {
        btn.addEventListener('click', showHide);
    }

    function showHide() {
        const hiddenDiv = this.parentElement.querySelector('div');
        const radioBtns = this.parentElement.querySelectorAll('input[type="radio"]');
        if (radioBtns[1].checked) {
            if (this.parentElement.getElementsByTagName("button")[0].classList.contains("showDiv")) {
                hiddenDiv.style.display = "none";
                this.parentElement.getElementsByTagName("button")[0].textContent = "Show more";
                this.parentElement.getElementsByTagName("button")[0].classList.remove("showDiv");
            } else {
                hiddenDiv.style.display = "block";
                this.parentElement.getElementsByTagName("button")[0].textContent = "Hide it";
                this.parentElement.getElementsByTagName("button")[0].classList.add("showDiv");
            }
        }
    }
}