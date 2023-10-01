const express = require("express");
const uregister = express.Router();
const { UserModal} = require("../model/register.model");

uregister.get("/", (req, res) => {
  res.send("hello register");
});

uregister.post("/register", async(req, res)=>{
  const {name, email, gender, password, age, city} = req.body;
    
  try {
  
    const data = await UserModal.findOne({email:email})

    if(data){
      res.status(200).send({msg: "user already registered"})
    } else {
      const user = UserModal({
        name , email, gender, password, age, city
      })

      await user.save()
    }
    

  } catch (error) {
    res.status(401).send({ msg: error.message });
  }

})

// uregister.post("/register", (res, res)=>{

// })



module.exports = {
  uregister,
};
