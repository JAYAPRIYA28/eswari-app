const express = require("express");
const db = require("./db");

const cors = require("cors");
const { default: axios } = require("axios");
const app = express();


app.use(cors());

app.use(express.json());

app.get("/" , async function(req,res){
    try{
      
    const response = await db.query("SELECT * FROM finOlex ORDER BY  sl_no ASC");

    res.status(200).json({
        data: response.rows
       
    })
     //console.log(response);
    }catch(err){
          console.log(err);
    }

});


app.get("/search", async function(req,res){
    try{
        
        const response = await db.query("SELECT DISTINCT item_name FROM finolex")

        res.status(200).json({
            data:response.rows
        })

        // console.log(response.rows)
    }catch(err){
        console.log(err)
    }
})

app.get("/coupler", async function(req, res){
    try{
        const response = await db.query("SELECT * FROM finOlex WHERE item_name='COUPLER' ORDER BY  sl_no ASC");

        res.status(200).json({
            data:response.rows
        })
        //console.log(response);

    }catch(err){
        console.log(err);
    }
})

app.get("/elbow", async function(req, res){
    try{
        const response = await db.query("SELECT * FROM finOlex WHERE item_name='ELBOW' ORDER BY  sl_no ASC");

        res.status(200).json({
            data:response.rows
        })
        //console.log(response);

    }catch(err){
        console.log(err);
    }
})

app.get("/endcap", async function(req, res){
    try{
        const response = await db.query("SELECT * FROM finOlex WHERE item_name='END CAP' ORDER BY  sl_no ASC");

        res.status(200).json({
            data:response.rows
        })
        //console.log(response);

    }catch(err){
        console.log(err);
    }
})

app.get("/theendcap", async function(req, res){
    try{
        const response = await db.query("SELECT * FROM finOlex WHERE item_name='THE END CAP' ORDER BY  sl_no ASC");

        res.status(200).json({
            data:response.rows
        })
        //console.log(response);

    }catch(err){
        console.log(err);
    }
})

app.get("/10kgelbow", async function(req, res){
    try{
        const response = await db.query("SELECT * FROM finOlex WHERE item_name='10KG ELBOW' ORDER BY  sl_no ASC");

        res.status(200).json({
            data:response.rows
        })
        //console.log(response);

    }catch(err){
        console.log(err);
    }
})


app.get("/fta", async function(req, res){
    try{
        const response = await db.query("SELECT * FROM finOlex WHERE item_name='FTA' ORDER BY  sl_no ASC");

        res.status(200).json({
            data:response.rows
        })
        //console.log(response);

    }catch(err){
        console.log(err);
    }
})


app.get("/mta", async function(req, res){
    try{
        const response = await db.query("SELECT * FROM finOlex WHERE item_name='MTA' ORDER BY  sl_no ASC");

        res.status(200).json({
            data:response.rows
        })
        //console.log(response);

    }catch(err){
        console.log(err);
    }
})

app.get("/service", async function(req, res){
    try{
        const response = await db.query("SELECT * FROM finOlex WHERE item_name='SERVICE SADDLE' ORDER BY  sl_no ASC");

        res.status(200).json({
            data:response.rows
        })
        //console.log(response);

    }catch(err){
        console.log(err);
    }
})

app.get("/tee", async function(req, res){
    try{
        const response = await db.query("SELECT * FROM finOlex WHERE item_name='TEE' ORDER BY  sl_no ASC");

        res.status(200).json({
            data:response.rows
        })
        //console.log(response);

    }catch(err){
        console.log(err);
    }
})

app.get("/10kgtee", async function(req, res){
    try{
        const response = await db.query("SELECT * FROM finOlex WHERE item_name='10KG TEE' ORDER BY  sl_no ASC");

        res.status(200).json({
            data:response.rows
        })
        //console.log(response);

    }catch(err){
        console.log(err);
    }
})

app.get("/tail", async function(req, res){
    try{
        const response = await db.query("SELECT * FROM finOlex WHERE item_name='TAIL PIECE' ORDER BY  sl_no ASC");

        res.status(200).json({
            data:response.rows
        })
        //console.log(response);

    }catch(err){
        console.log(err);
    }
})

app.get("/ball", async function(req, res){
    try{
        const response = await db.query("SELECT * FROM finOlex WHERE item_name='BALL VALVE' ORDER BY  sl_no ASC");

        res.status(200).json({
            data:response.rows
        })
        //console.log(response);

    }catch(err){
        console.log(err);
    }
})

app.get("/elbow45", async function(req, res){
    try{
        const response = await db.query("SELECT * FROM finOlex WHERE item_name='ELBOW 45' ORDER BY  sl_no ASC");

        res.status(200).json({
            data:response.rows
        })
        //console.log(response);

    }catch(err){
        console.log(err);
    }
})

app.get("/thread", async function(req, res){
    try{
        const response = await db.query("SELECT * FROM finOlex WHERE item_name='THREAD ELBOW' ORDER BY  sl_no ASC");

        res.status(200).json({
            data:response.rows
        })
        //console.log(response);

    }catch(err){
        console.log(err);
    }
})

app.get("/reducer", async function(req, res){
    try{
        const response = await db.query("SELECT * FROM finOlex WHERE item_name='REDUCER' ORDER BY  sl_no ASC");

        res.status(200).json({
            data:response.rows
        })
        //console.log(response);

    }catch(err){
        console.log(err);
    }
})

app.get("/redbush", async function(req, res){
    try{
        const response = await db.query("SELECT * FROM finOlex WHERE item_name='RED BUSH' ORDER BY  sl_no ASC");

        res.status(200).json({
            data:response.rows
        })
        //console.log(response);

    }catch(err){
        console.log(err);
    }
})

app.get("/redtee", async function(req, res){
    try{
        const response = await db.query("SELECT * FROM finOlex WHERE item_name='RED TEE' ORDER BY  sl_no ASC");

        res.status(200).json({
            data:response.rows
        })
        //console.log(response);

    }catch(err){
        console.log(err);
    }
})

app.get("/redfta", async function(req, res){
    try{
        const response = await db.query("SELECT * FROM finOlex WHERE item_name='RED FTA' ORDER BY  sl_no ASC");

        res.status(200).json({
            data:response.rows
        })
        //console.log(response);

    }catch(err){
        console.log(err);
    }
})

app.get("/redelbow", async function(req, res){
    try{
        const response = await db.query("SELECT * FROM finOlex WHERE item_name='RED ELBOW' ORDER BY  sl_no ASC");

        res.status(200).json({
            data:response.rows
        })
        //console.log(response);

    }catch(err){
        console.log(err);
    }
})

app.get("/brassfta", async function(req, res){
    try{
        const response = await db.query("SELECT * FROM finOlex WHERE item_name='BRASS FTA' ORDER BY  sl_no ASC");

        res.status(200).json({
            data:response.rows
        })
        //console.log(response);

    }catch(err){
        console.log(err);
    }
})

app.get("/brasstee", async function(req, res){
    try{
        const response = await db.query("SELECT * FROM finOlex WHERE item_name='BRASS TEE' ORDER BY  sl_no ASC");

        res.status(200).json({
            data:response.rows
        })
        //console.log(response);

    }catch(err){
        console.log(err);
    }
})

app.get("/brasselbow", async function(req, res){
    try{
        const response = await db.query("SELECT * FROM finOlex WHERE item_name='BRASS ELBOW' ORDER BY  sl_no ASC");

        res.status(200).json({
            data:response.rows
        })
        //console.log(response);

    }catch(err){
        console.log(err);
    }
})

app.get("/redmta", async function(req, res){
    try{
        const response = await db.query("SELECT * FROM finOlex WHERE item_name='RED MTA' ORDER BY  sl_no ASC");

        res.status(200).json({
            data:response.rows
        })
        //console.log(response);

    }catch(err){
        console.log(err);
    }
})

app.get("/itemName/:item_name",async function(req, res){
    try{
      const response = await db.query("SELECT * FROM finOlex WHERE item_name=$1", [ req.params.item_name]);

      res.status(200).json({
        data:response.rows
      })

    }catch(err){
        console.log(err);
    }
})

app.get("/itemName_inches/:item_name/:first_inches",async function(req, res){
    try{
      const response = await db.query("SELECT * FROM finOlex WHERE item_name=$1 AND first_inches=$2", [ req.params.item_name, req.params.first_inches]);

      res.status(200).json({
        data:response.rows
      })

    }catch(err){
        console.log(err);
    }
})

app.post("/item_change/:editChange/:unique_id", async function(req,res){
    try{
        await db.query("UPDATE finolex SET cost = $1 WHERE user_id = $2",[req.params.editChange, req.params.unique_id])
    }catch(err){
        console.log(err)
    }
})



app.post("/item/itempost", async function(req, res){
    try{
        const results = await db.query("INSERT INTO craete_billing(item_name,first_inches ,mm , inches , cost,sl_no,name) VALUES($1,$2,$3,$4,$5,$6,$7) returning *", [
            req.body.item_name,
            req.body.first_inches,
            req.body.mm,
            req.body.inches,
            req.body.cost,
            req.body.sl_no,
             req.body.name ])

           await db.query("UPDATE craete_billing SET total_cost = count*cost");
        // console.log("hii", hii);

        res.status(201).json({
            status:"success",
       
            data:{
                name:results.rows[0]
            }
        })
    }catch(err){
        console.log(err)
    }
})


app.get("/item/itempost", async function(req, res){
    try{
        const response = await db.query("SELECT * FROM craete_billing ORDER BY  id ASC");
        
        res.status(200).json({
            data:response.rows
        })
    }catch(err){
        console.log(err);
    }
})



app.delete("/item/:item_name/:sl_no", async function(req, res){
    try{
      await db.query("DELETE FROM craete_billing WHERE item_name= $1 AND sl_no=$2" , [ req.params.item_name,req.params.sl_no])
    //   console.log("delete",req.params.sl_no)
    }catch(err){
        console.log(err)
    }
})


//billing increament 
// var converter = require('number-to-words')
app.get("/total_cost", async function(req, res){
  
    try{
       const resp = await db.query("SELECT SUM(total_cost) FROM craete_billing");
       const respQty = await db.query("SELECT SUM(count) FROM craete_billing");
       const respItem = await db.query("SELECT COUNT(unique_id) from craete_billing")
       res.status(200).json({
        data:resp.rows[0],
        dataQTY:respQty.rows[0],
        dataItem: respItem.rows[0]
        // word:a
    })
     
   
    }catch(err){
        console.log(err);
    }
})


// app.get("/total_quantity", async function(req, res){
//     try{
        

//         res.status(200).json({
//             data:resp.rows[0]
//         })

//     }catch(err){
//         console.log(err)
//     }
// })




app.post("/item_percentage/:percentage/:unique_id", async function(req,res){
    try{
       const a = req.params.percentage/100;
        
        await db.query("UPDATE craete_billing SET percentage =$1 WHERE unique_id = $2", [ a, req.params.unique_id])

        if( a !== 0){
        await db.query("UPDATE craete_billing SET total_cost = (cost*percentage) + cost WHERE unique_id=$1",[req.params.unique_id])
        }
    }catch(err){
        console.log(err);
    }
})


app.post("/item_post/:value/:unique_id", async function(req, res){
    try{

    const response = await db.query("UPDATE craete_billing SET count =$1 WHERE unique_id = $2", [req.params.value, req.params.unique_id])
     const result = await db.query("UPDATE craete_billing SET total_cost = count*cost WHERE unique_id = $1 ",[req.params.unique_id])


     await db.query("UPDATE ")
     console.log(result)
    }catch(err){
        console.log(err);
    }
})

app.post("/update_entry/:entry/:unique_id", async function(req,res){
    try{
        await db.query("UPDATE craete_billing SET cost = $1 WHERE unique_id = $2", [ req.params.entry, req.params.unique_id]);

    }catch(err){
        console.log(err)
    }
})



app.get("/signin/:email/:password", async function(req,res){
    try{
      const response = await db.query("SELECT Email from signin WHERE password = crypt($1,password)",[req.params.password]);
      
     

    //   const a = response.rows[0].email;
    

    //  console.log(a.email)
     

   

    //   console.log(count)
  
    res.status(200).json({
        data: response.rows[0]
        
    })  
    }catch(err){
        console.log(err)
    }
})

app.get("/check", async function(req,res){
    try{

        const result = await db.query ( "SELECT * FROM signin");

        res.status(200).json({
            data:result.rows[0],
        })



    }catch(err){
        console.log(err);
    }
})


app.delete("/delete_item/:unique_id",async function(req,res){
    try{

        await db.query("DELETE FROM craete_billing WHERE unique_id=$1",[req.params.unique_id])

    }catch(err){
        console.log(err)
    }
})

app.delete("/historyDelete", async function(req, res){
    try{
      await db.query("TRUNCATE TABLE craete_billing")
    }catch(err){
        console.log(err)
    }
})

app.post("/history", async function(req, res){
    try{
        console.log(req.body.arr)
        // for(var i=0; i<a.length ; i++){
        //     for(var j=0; j<a[i].length; j++){
        //         console.log(a[i][j])
        //     }
        // }
      await db.query("INSERT INTO History(item_name, cost, qty, date, user_name) VALUES($1, $2, $3, $4,$5) returning *", [ req.body.arr, req.body.cost, req.body.qty, req.body.date, req.body.user_name])
     


    }catch(err){
        console.log(err)
    }
})

app.post("/datapost", async function(req, res){
    try{

      await db.query("INSERT INTO craete_billing(name,item_name,first_inches,cost,count,percentage) VALUES($1,$2,$3,$4,$5,$6)",[req.body.bname, req.body.pname, req.body.mm, req.body.rate, req.body.qty, req.body.per])
      await db.query("UPDATE craete_billing SET total_cost = count*cost");
    }catch(err){
        console.log(err);
    }
})



app.get("/historyget", async function(req, res){
    try{
      
       const response =  await db.query("SELECT * FROM History ORDER BY  time DESC");
       res.status(200).json({
          data:response.rows
       })

    }catch(err){
        console.log(err)
    }
})

app.post("/edit_itemadd", async function(req,res){
    try{
    //    const a = req.body.cost + 'mm';
    //     console.log(a)
        await db.query(`INSERT INTO finolex(item_name,cost, first_inches) VALUES($1, 
            $2, $3) returning *`,[req.body.name,req.body.cost,req.body.inches])
    }catch(err){
        console.log(err)
    }
})

app.post("/other", async function(req, res){
    try{

     const resp =  await db.query('INSERT INTO Other(name, item_name, first_inches, cost,nameItem) VALUES($1,$2,$3,$4,$5)',[req.body.name, req.body.item_name, req.body.first_inches, req.body.cost, req.body.nameItem] )


     res.status(200).json({
        data:resp.rows
     })
    }catch(err){
        console.log(err)
    }
})

app.get("/getother", async function(req, res){
    try{

        const resp = await db.query("SELECT * FROM Other")

        res.status(200).json({
            data:resp.rows
        })

    }catch(err){
        console.log(err)
    }
})

app.get("/getSecific/:nameitem", async function(req,res){
    try{
        console.log(req.params.nameitem)
        const resp = await db.query("SELECT * FROM Other WHERE nameitem = $1",[req.params.nameitem])

        res.status(200).json({
            data:resp.rows
        })
        // console.log(resp)
    }catch(Err){
        console.log(err)
    }
})

app.post("/pvc", async function(req, res){
    try{

     const resp =  await db.query('INSERT INTO PVC(name, item_name, first_inches, cost,nameItem) VALUES($1,$2,$3,$4,$5)',[req.body.name, req.body.item_name, req.body.first_inches, req.body.cost, req.body.nameItem] )


     res.status(200).json({
        data:resp.rows
     })
    }catch(err){
        console.log(err)
    }
})

app.get("/pvcother", async function(req, res){
    try{

        const resp = await db.query("SELECT * FROM PVC")

        res.status(200).json({
            data:resp.rows
        })

    }catch(err){
        console.log(err)
    }
})

app.get("/pvcgetSecific/:nameitem", async function(req,res){
    try{
        console.log(req.params.nameitem)
        const resp = await db.query("SELECT * FROM PVC WHERE nameitem = $1",[req.params.nameitem])

        res.status(200).json({
            data:resp.rows
        })
        // console.log(resp)
    }catch(Err){
        console.log(err)
    }
})


const port = 3002;
app.listen(port, ()=>{
    console.log(`server is up and listening on port ${port}`);
})


// app.get("/addBilling_post/:unique_id", async function(req, res){
//     try{
//         const results = await db.query("UPDATE craete_billing SET count = count + 1 WHERE unique_id=$1", [req.params.unique_id]);
//         await db.query("UPDATE craete_billing SET total_cost = count*cost");
         


//         const resp = await db.query("SELECT count from craete_billing WHERE unique_id = $1",[req.params.unique_id])


//         res.status(200).json({
//             data:resp.rows[0]
//         })
//         // res.status(201).json({
//         //     status:"success",
       
//         //     data:{
//         //         name:results.rows[0]
//         //     }
//         // })
//         console.log("addbilling:  ",results)
//     }
//     catch(err){
//         console.log(err);
//     }
// })




// app.get("/billing/:sl_no", async function(req,res){
//     try{
//       const response = await db.query("SELECT COUNT(sl_no) FROM billing2 WHERE sl_no = $1",[req.params.sl_no]);
//       res.status(200).json({
//             data:response.rows[0]
//         })
//         console.log(response)
//     }catch(err){
//         console.log(err);
//     }
// })



// app.delete("/deleteBilling_post/:unique_id", async function(req, res){
//     try{
//         // console.log(req.params.unique_id)
//       await db.query("UPDATE craete_billing SET count = count - 1 WHERE unique_id=$1", [req.params.unique_id]);
//       await db.query("UPDATE craete_billing SET total_cost = count*cost");
//     }catch(err){
//         console.log(err);
//     }
// })


