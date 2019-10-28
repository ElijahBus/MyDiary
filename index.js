import app from './server/server';

const server = app.listen(3000, () => {
  console.log('listening to port 3000 ...');  
});

export default server;