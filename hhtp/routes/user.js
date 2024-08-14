const express = require("express");
const {handleGetAllUsers, 
     handleGetUserById,
     handleUpdateUserById, 
     handledeletUserById, 
     handleCreateNewUser
    } = require('../controllers/user');
const router = express.Router();

// Endpoint to list users in HTML format
// router.get("/users", async (req, res) => {
//     const allDbUsers = await User.find({});
//     const html = `
//     <ul> 
//           ${allDbUsers.map((user) => `<li>${user.first_name} - ${user.email}</li>`).join("")}
//     </ul>
//     `;
//     res.send(html);
// });

// Endpoint to return users in JSON format (for mobile users)
router.route("/")
.get(handleGetAllUsers)
.post(handleCreateNewUser);

// Route to handle specific user actions: GET, PATCH, DELETE
router
    .route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handledeletUserById);



module.exports = router;