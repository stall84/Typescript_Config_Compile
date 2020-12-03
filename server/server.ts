import * as express from 'express';

const PORT: string | number = process.env.port || 5005;

const app = express();

app.listen(PORT, () => {
    console.log(`Server is UP on Port: ${PORT}`);
})

app.use(express.static("public"));