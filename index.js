// apikey= 89de241cc78f0b94f718a10cd3139961
// api secret key = 7da9aa2203f8753c2327f1d4ebb87082

// token= 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
// store name =admin.shopify.com/store/lokesh96

// https://89de241cc78f0b94f718a10cd3139961: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@lokesh96.myshopify.com/admin/api/2023-01/products.json

const request=require('request')
const cors=require('cors')
const express=require('express')
const app=express();

app.use(express.json());

app.use(cors())

const apikey=`89de241cc78f0b94f718a10cd3139961`
const password=`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`
const store=`lokesh96.myshopify.com`


//API TO FETCH ALL CUSTOMERS
app.get(`/getcustomers`,(req,res)=>{
    
    const options={
        'method':'GET',
        'url':`https://${apikey}:${password}@${store}/admin/api/2023-01/customers.json`,
        'headers':{
            'content-type':'application/json'
        }
    }

    request(options,function(error,response){
        if(error) throw new Error(error);
        res.send(response.body)
    });
})


//API TO FETCH DATA OF SINGLE CUSTOMER USING ID

app.get(`/getcustomer/:id`,(req,res)=>{
    const id=req.params.id
    
    const options={
        'method':'GET',
        'url':`https://${apikey}:${password}@${store}/admin/api/2023-01/customers/
        ${id}.json`,
        'headers':{
            'content-type':'application/json'
        }
    }

    request(options,function(error,response){
        if(error) throw new Error(error);
        res.send(response.body)
    });
})



//API TO UPDATE EXISTING CUSTOMER USING ID

app.put(`/updatecustomer/:id`,(req,res)=>{
    const id=req.params.id
    
    const options={
        'method':'PUT',
        'url':`https://${apikey}:${password}@${store}/admin/api/2023-01/customers/${id}.json`,
        'headers':{
            'content-type':'application/json'
        },
        body: JSON.stringify({
            "customer":{
                "email":req.body.email,
                "first_name":req.body.first_name,
                "last_name":req.body.last_name,
                "phone":req.body.phone
            }
        })
    }

    request(options,function(error,response){
        if(error) throw new Error(error);
        res.send(response.body)
    });
})


app.listen(3400)