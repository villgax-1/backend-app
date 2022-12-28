const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
/*Server listen part*/
app.listen(4000, err=>{ console.log('listening'); });
/*Controller importing part*/
const productMasterController = require('./app/controllers/product.controller');
/*route*/
app.get('/all-product',productMasterController.getProductDetails);
app.post('/get-matrix',productMasterController.getMatrixDetails);
app.get('/get-employees',productMasterController.employeeList);
app.post('/get-states',productMasterController.getEmpStates);

app.get('*',function(req,res){
    res.status(404);
    res.send("This url not find");
});
