const db = require('../models');

const Productmaster   = db.products;
const recipientMaster = db.recipient_for;
const recipientMatrix = db.recipient_mail_list;
const stateMaster     = db.state_tbl;
const employeeMaster  = db.employee_tbl;

const productMasterController = {

    getProductDetails: async (req, res) => {
        const products = await Productmaster.findAll();
        res.json(products);
    },

    getMatrixDetails : async (req,res)=>{
        
        const state_id = req.body.state_nm;
        const emp_id   = req.body.emp_nm;
        const response= [];
        let obj={};
            
        if(state_id != '' && emp_id != ''){
            try {
            const recipientRecord = await recipientMaster.findAll();
            const  recipientList  = JSON.parse(JSON.stringify(recipientRecord));
                for (let i = 0; i < recipientList.length; i++) 
                {
                    let matrixRecord = await recipientMatrix.findAll({
                        where:{
                            'state_id':state_id,
                            'emp_id':emp_id,
                            'recipient_for':recipientList[i].id
                        }
                    });
                    let  matrixList  = JSON.parse(JSON.stringify(matrixRecord));
                    // console.log(matrixList);
                    if(matrixRecord.length > 0){ 
                        obj = { 
                            is_checked: 1,
                            mail_type: matrixList[0].mail_type,
                            is_disable_na: 1,
                            matrix_id:recipientList[i].id,
                            matrix_name:recipientList[i].recipient_for_title
                        };
                    }else{
                        obj = { 
                            is_checked: 0,
                            mail_type: '',
                            is_disable_na: 0,
                            matrix_id:recipientList[i].id,
                            matrix_name:recipientList[i].recipient_for_title
                        };
                    }
                    response.push(obj);
                }
                const data = response.sort((a, b)=> b.is_checked-a.is_checked);
                res.json(data);
            } catch (error) {
                res.json({'status':0,'msg':'Internal server error'}); 
            }
        }else{
            res.json({'status':0,'msg':'Please provide statename and employee name'});
        }
    },

    getEmpStates:async(req,res)=>{
        const employeeId = req.body.employeenm;
        const response= [];
        let obj={};
        try{
            const states = await stateMaster.findAll({
                where:{
                    'working_status':1
                },
                order: [
                    ['state_name', 'ASC']
                ],
            });
            if(states.length > 0){
                const  allStates  = JSON.parse(JSON.stringify(states));
                for(let i=0; i<allStates.length;i++){
                    const recipient = await recipientMatrix.findAll({
                        where:{
                            'emp_id':employeeId,
                            'state_id':allStates[i].state_id
                        }
                    });
                    if(recipient.length > 0){
                        obj = { 
                            is_top: 1,
                            state_id: allStates[i].state_id,
                            state_name: allStates[i].state_name
                        };
                    }else{
                        obj = { 
                            is_top: 0,
                            state_id: allStates[i].state_id,
                            state_name: allStates[i].state_name
                        };

                    }
                    response.push(obj);
                }
                const data = response.sort((a, b)=> b.is_top-a.is_top);
                res.json(data);
            }else{
                res.json({'status':0,'msg':'No record found'});
            }

        }catch(error) {
            res.json({'status':0,'msg':'Internal server error'});       
        }
    },

    employeeList:async(req,res)=>{
        try{
            const employees = await employeeMaster.findAll({
                where:{
                    'active':1
                },
                order: [
                    ['emp_name', 'ASC']
                ],
            });
            if(employees.length > 0){
                res.json(employees);
            }else{
                res.json({'status':0,'msg':'Something went wrong'});
            }

        }catch(error) {
            res.json({'status':0,'msg':'Internal server error'});       
        }
    }

}
module.exports = productMasterController;