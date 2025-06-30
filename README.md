# JiraApp

This is a simple Node.js calendar application that can integrate with Jira. It uses Express for the server and FullCalendar for the front-end calendar view.

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```
   *(You may need internet access for this step.)*

2. Start the application:
   ```sh
   npm start
   ```

3. Visit `http://localhost:3000` in your browser to see the calendar.

The `/api/events` endpoint currently returns sample data. Replace the logic in `index.js` with calls to the Jira REST API to load real issues and events.

