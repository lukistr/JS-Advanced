function attachEventsListeners() {
    document.getElementById("daysBtn").addEventListener('click', convertFromDays);
    document.getElementById("hoursBtn").addEventListener('click', convertFromHours);
    document.getElementById("minutesBtn").addEventListener('click', convertFromMinutes);
    document.getElementById("secondsBtn").addEventListener('click', convertFromSeconds);
    
    function convertFromDays() {
        const days = parseFloat(document.getElementById('days').value);
        if (isNaN(days)) return;

        document.getElementById('hours').value = days * 24;
        document.getElementById('minutes').value = days * 24 * 60;
        document.getElementById('seconds').value = days * 24 * 60 * 60;
    }

    function convertFromHours() {
        const hours = parseFloat(document.getElementById('hours').value);
        if (isNaN(hours)) return;

        document.getElementById('days').value = hours / 24;
        document.getElementById('minutes').value = hours * 60;
        document.getElementById('seconds').value = hours * 60 * 60;
    }

    function convertFromMinutes() {
        const minutes = parseFloat(document.getElementById('minutes').value);
        if (isNaN(minutes)) return;

        document.getElementById('days').value = minutes / (24 * 60);
        document.getElementById('hours').value = minutes / 60;
        document.getElementById('seconds').value = minutes * 60;
    }

    function convertFromSeconds() {
        const seconds = parseFloat(document.getElementById('seconds').value);
        if (isNaN(seconds)) return;

        document.getElementById('days').value = seconds / (24 * 60 * 60);
        document.getElementById('hours').value = seconds / (60 * 60);
        document.getElementById('minutes').value = seconds / 60;
    }
}