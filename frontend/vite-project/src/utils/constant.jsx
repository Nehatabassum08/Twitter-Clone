export const USER_API_END_POINT = "http://localhost:5000/api/v1/user";
export const TWEET_API_END_POINT = "http://localhost:5000/api/v1/tweet";


export const timeSince = (timestamp) => {
    const time = Date.parse(timestamp); // Convert timestamp to milliseconds
    const now = Date.now(); // Current time in milliseconds
    let secondsPast = (now - time) / 1000; // Calculate time difference in seconds
    const suffix = 'ago'; // Suffix for the time description

    // Define intervals in seconds for different time periods
    const intervals = {
        year: 31536000, // Seconds in a year
        month: 2592000, // Seconds in a month (30 days)
        week: 604800, // Seconds in a week
        day: 86400, // Seconds in a day
        hour: 3600, // Seconds in an hour
        minute: 60, // Seconds in a minute
        second: 1 // Seconds
    };

    // Iterate through intervals to find the appropriate time period
    for (const interval in intervals) {
        if (secondsPast >= intervals[interval]) {
            const count = Math.floor(secondsPast / intervals[interval]);
            return `${count} ${interval}${count !== 1 ? 's' : ''} ${suffix}`; // Return formatted time string
        }
    }

    return 'just now'; // Default if time is within seconds
};
