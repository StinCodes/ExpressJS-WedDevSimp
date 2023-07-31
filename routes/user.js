const express = require("express");
const router = express.Router();

//home route (/users)
router.get("/", (req, res) => {
  res.send("User List");
});

//new users form route, (/users/new), static routes must be at the top
router.get("/new", (req, res) => {
  res.send("users/new", {firstName: 'Test'});
});

router.post("/", (req, res) => {
  res.send("Create User");
});

//get specific user with ID route, dynamic routes must be put at the bottom
// router.get("/:id", (req, res) => {
//   res.send(`Get User with ID ${req.params.id}`);
// });

// router.put("/:id", (req, res) => {
//   res.send(`Update User with ID ${req.params.id}`);
// });

// router.delete("/:id", (req, res) => {
//   res.send(`Delete User with ID ${req.params.id}`);
// });


//router.route combines the https req, define the route ('/:id), add the .get.put.delete together
router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get User with ID ${req.params.id}`);
    console.log(req.user)
  })
  .put((req, res) => {
    res.send(`Update User with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User with ID ${req.params.id}`);
  });

const users = [{name: 'Kyle'},{name: 'Sally'}]

//whenever route with id parameter is hit, run this function, this middleware is hit after req but before res
router.param('id', (req, res, next, id)=>{
  req.user = users[id]
  next()
})

module.exports = router;
