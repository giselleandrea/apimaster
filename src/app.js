import express from 'express';
import routes from './routes/index.js';

const app = express();

app.use(routes);

//Puerto de ejecucion
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
}); 