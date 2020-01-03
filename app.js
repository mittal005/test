require('./config/settings');
require('./config/connection');
var app = require('./routes/route');

app.listen(process.env.PORT, async () => {
    console.log('Server running on ', process.env.PORT)
})