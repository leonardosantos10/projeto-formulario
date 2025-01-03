import express from 'express';
import clientsRouter from './routes/clients';
import db from './db';

const app = express();
const port = parseInt(`${process.env.PORT}`);


app.use(clientsRouter);
app.set('view engine', 'pug');
app.set('views', './views');

db.sync().then(() => {
   console.log(`conectado com sucesso ao banco: ${process.env.DB_NAME}`);
}).then(() => {
     app.listen(port, () => {
          console.log(`Servidor Rodando na porta ${port}`); 
     });
});



