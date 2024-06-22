window.addEventListener('load', solve);

function solve() {
    // Select the necessary elements
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const startDate = document.getElementById('from-date');
    const endDate = document.getElementById('to-date');
    const buttonNext = document.getElementById('next-btn');
    const infoList = document.querySelector('.info-list');
    const confirmList = document.querySelector('.confirm-list');
    const statusHeader = document.getElementById('status');
    
    // Add event listener for the "Next" button
    buttonNext.addEventListener('click', () => {
        // Get the input values
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const fromDate = startDate.value.trim();
        const toDate = endDate.value.trim();

        // Validate the input values
        if (!firstName || !lastName || !fromDate || !toDate || new Date(fromDate) >= new Date(toDate)) {
            return;
        }

        // Create the list item for the "info-list"
        const listItem = document.createElement('li');
        listItem.classList.add('vacation-content');
        const articleItem = document.createElement('article');
        const h3Item = document.createElement('h3');
        h3Item.textContent = `Name: ${firstName} ${lastName}`;
        const pStartDate = document.createElement('p');
        pStartDate.textContent = `From date: ${fromDate}`;
        const pEndDate = document.createElement('p');
        pEndDate.textContent = `To date: ${toDate}`;

        const editBtnItem = document.createElement('button');
        editBtnItem.classList.add('edit-btn');
        editBtnItem.textContent = 'Edit';

        const continueBtnItem = document.createElement('button');
        continueBtnItem.classList.add('continue-btn');
        continueBtnItem.textContent = 'Continue'

        // Append the items
        articleItem.append(h3Item, pStartDate, pEndDate);
        articleItem.style.display = 'flex';
        listItem.append(articleItem, editBtnItem, continueBtnItem);
        infoList.append(listItem);

        // Clear the input fields
        firstNameInput.value = '';
        lastNameInput.value = '';
        startDate.value = '';
        endDate.value = '';

        // Disable the "Next" button
        buttonNext.disabled = true;

        // Add event listener for the "Edit" button
        listItem.getElementsByClassName('edit-btn')[0].addEventListener('click', () => {
            // Load the information back into the input fields
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            startDate.value = fromDate;
            endDate.value = toDate;

            // Remove all buttons from the "info-list"
            infoList.removeChild(listItem);

            // Enable the "Next" button
            buttonNext.disabled = false;
        });

        // Add event listener for the "Continue" button
        listItem.getElementsByClassName('continue-btn')[0].addEventListener('click', () => {
            // Remove the list item from the "info-list"
            infoList.removeChild(listItem);

            // Transfer the list item to the "confirm-list"
            const confirmBtnItem = document.createElement('button');
            confirmBtnItem.classList.add('confirm-btn');
            confirmBtnItem.textContent = 'Confirm'
            const cancelBtnItem = document.createElement('button');
            cancelBtnItem.classList.add('cancel-btn');
            cancelBtnItem.textContent = 'Cancel'
            listItem.removeChild(editBtnItem);
            listItem.removeChild(continueBtnItem);
            listItem.append(confirmBtnItem, cancelBtnItem);
            confirmList.append(listItem);

            // Add event listener for the "Confirm" button
            confirmList.querySelector('.confirm-btn').addEventListener('click', () => {
                // Remove the list item from the "confirm-list"
                confirmList.removeChild(listItem);

                // Update the status header
                statusHeader.className = 'vacation-confirmed';
                statusHeader.textContent = 'Vacation Requested';

                // Enable the "Next" button
                buttonNext.disabled = false;
            });

            // Add event listener for the "Cancel" button
            confirmList.querySelector('.cancel-btn').addEventListener('click', () => {
                // Remove the list item from the "confirm-list"
                confirmList.removeChild(listItem);

                // Update the status header
                statusHeader.className = 'vacation-cancelled';
                statusHeader.textContent = 'Cancelled Vacation';

                // Enable the "Next" button
                buttonNext.disabled = false;
            });
        });
    });

    // Add event listener for the status header to reload the page
    statusHeader.addEventListener('click', () => {
        location.reload();
    });
}
