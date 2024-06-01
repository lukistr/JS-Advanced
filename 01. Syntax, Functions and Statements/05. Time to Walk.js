function timeToWalk(steps, footprintLength, speed) {
    const distanceMeters = steps * footprintLength;

    const speedMetersPerSecond = speed * 1000 / 3600;

    const walkingTimeSeconds = distanceMeters / speedMetersPerSecond;

    const breaks = Math.floor(distanceMeters / 500);
    const breakTimeSeconds = breaks * 60;

    const totalTimeSeconds = walkingTimeSeconds + breakTimeSeconds;

    const hours = Math.floor(totalTimeSeconds / 3600);
    const minutes = Math.floor((totalTimeSeconds % 3600) / 60);
    const seconds = Math.round(totalTimeSeconds % 60);

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
}