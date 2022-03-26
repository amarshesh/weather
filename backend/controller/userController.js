// const Register = require("../database/models");

// const enter = (req, res, next) => {
//   const user = new Register({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//     phone: req.body.phone
//   });
//   user
//     .save()
//     .then((user) => {
//       res.json({
//         message: "Your data added sucessfully",
//         user,
//       });
//     })
//     .catch((err) => {
//       res.json({
//         message: err,
//       });
//     });
// };
// module.exports = { enter };
