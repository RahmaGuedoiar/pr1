const {getAllUsers,getUserById,UpdateUser,UpdateUserPassword,getCurrentUser } = require("../Controles/userControles");
const  { userMiddelware, verifyRole }=require("../middleware/usermiddelware");
const express = require("express")
const router = express.Router()
router.get('/getUsers', userMiddelware,verifyRole('admin'), getAllUsers);
// userRouter.route("/me").get(getCurrentUser);
// userRouter.route("/update").patch(UpdateUser);
// userRouter.route("/update/password").patch(UpdateUserPassword);
router.get("/IdUser/:id",userMiddelware,verifyRole('admin'),getUserById)


module.exports = router;