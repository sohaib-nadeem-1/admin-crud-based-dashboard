import { eq } from "drizzle-orm";
import { db } from "../db/index.js";
import { users } from "../db/schema/user.js";
import { numeric } from "drizzle-orm/pg-core";

export const getUsers = async (req, res) => {
  try {
    const data = await db.select().from(users);

    res.status(200).json({
      message: "These are Users",
      data,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};



export const createUser = async (req, res) => {
  try {
    const userData = req.body;

    const userinsertingData = await db
      .insert(users)
      .values(userData)
      .returning();

    res.status(201).json({
      message: "User Created SucessFully",
      userinsertingData,
    });
  } catch (err) {
    console.log("FULL ERROR:", err);
    if (err.cause?.code === "23505") {
      return res.status(409).json({
        message: "Email already exists",
      });
    }
    res.status(500).json({
      message: "500 Internal Server Error",
    });
  }
};



export const getUserById = async (req, res) => {
 try{
     const id = Number(req.params.id);

  const GetUserDataID = await db.select().from(users).where(eq(users.id, id));
  if (GetUserDataID.length===0) {
    return res.status(404).json({
      message: "User Not Found",
    });
  } else {
    res.status(200).json({
      message: "This is the user",
      GetUserDataID,
    });
  }
}
catch{
    res.status(500).json({
        message : "500 Internal Server Error"

    })
}
 }



export const updateUser = async (req, res) => {
 try{
     const id = Number(req.params.id);
  const data = req.body;

  const updatingData = await db
    .update(users)
    .set(data)
    .where(eq(users.id, id))
    .returning();
    
if(updatingData.length===0){
  return  res.status(404).json({
        message : " User Not FOund",

    })
}
else{
 return res.status(200).json({
    message: "User Updated SucessFully",
    updatingData,
  });}

  
}
catch{
   return res.status(500).json({
        message : "Internal Server error"
    })
}

 }



export const deleteuser = async (req, res) => {
  try{
    const id = Number(req.params.id);

  const deletingUser = await db.delete(users).where(eq(users.id, id)).returning();
if(deletingUser.length===0){
   return res.status(404).json({
    message:"User Not Found" ,
  });
}
else{
return  res.status(200).json({
        message : " User IS Deletd SucessFully"
    })

}

  }
  catch(err){
    res.status(500).json({
        message : "Internal Server Error Or Db Error"
    })
  }
};
