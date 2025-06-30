const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/events', (req, res) => {
  // Placeholder: return sample data. Replace with Jira integration later.
  res.json([
    { id: 1, title: 'Sample Issue', start: '2025-07-01' },
    { id: 2, title: 'Another Issue', start: '2025-07-05' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
