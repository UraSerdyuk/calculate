let express = require('express');

let app = express();
app.use('/', express.static('1+1'));

app.get('/hello',function(req,res){
    res.send('helo world');
    console.log('server is starting');
});
app.listen(3000);