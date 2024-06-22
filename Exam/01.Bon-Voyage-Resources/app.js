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
        listItem.innerHTML = `
            <strong>${firstName}</strong> <strong>${lastName}</strong> <span>From date: ${fromDate}</span> <span>To date: ${toDate}</span>
            <button class="edit-btn">Edit</button>
            <button class="continue-btn">Continue</button>
        `;

        // Append the list item to the "info-list"
        infoList.appendChild(listItem);

        // Clear the input fields
        firstNameInput.value = '';
        lastNameInput.value = '';
        startDate.value = '';
        endDate.value = '';

        // Disable the "Next" button
        buttonNext.disabled = true;

        // Add event listener for the "Edit" button
        listItem.querySelector('.edit-btn').addEventListener('click', () => {
            // Load the information back into the input fields
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            startDate.value = fromDate;
            endDate.value = toDate;

            // Remove all buttons from the "info-list"
            infoList.innerHTML = '';

            // Enable the "Next" button
            buttonNext.disabled = false;
        });

        // Add event listener for the "Continue" button
        listItem.querySelector('.continue-btn').addEventListener('click', () => {
            // Remove the list item from the "info-list"
            infoList.innerHTML = '';

            // Transfer the list item to the "confirm-list"
            const confirmItem = document.createElement('li');
            confirmItem.innerHTML = `
                <strong>${firstName}</strong> <strong>${lastName}</strong> <span>From date: ${fromDate}</span> <span>To date: ${toDate}</span>
                <button class="confirm-btn">Confirm</button>
                <button class="cancel-btn">Cancel</button>
            `;
            confirmList.appendChild(confirmItem);

            // Add event listener for the "Confirm" button
            confirmItem.querySelector('.confirm-btn').addEventListener('click', () => {
                // Remove the list item from the "confirm-list"
                confirmList.innerHTML = '';

                // Update the status header
                statusHeader.className = 'vacation-confirmed';
                statusHeader.textContent = 'Vacation Requested';

                // Enable the "Next" button
                buttonNext.disabled = false;
            });

            // Add event listener for the "Cancel" button
            confirmItem.querySelector('.cancel-btn').addEventListener('click', () => {
                // Remove the list item from the "confirm-list"
                confirmList.innerHTML = '';

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
