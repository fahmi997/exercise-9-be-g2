const { accounts } = require("../models");
module.exports = {
  create: async (req, res, next) => {
    try {
      const checkAccount = await accounts.findAll({
        where: {
          email: req.body.email,
          phone: req.body.phone,
          password: req.body.password,
        },
        attributes: { exclude: ["password"] },
      });
      if (checkAccount.length > 0) {
        throw {
          rc: 400,
          succes: false,
          message: "Akun sudah ada",
        };
      } else if (checkAccount.length === 0) {
        if (
          req.body.confirmPassword === req.body.password &&
          req.body.password.length > 8
        ) {
          if (req.body.password.length > 8) {
            const result = await accounts.create(req.body);
            return res.status(201).send(result);
          } else {
            return res.status(400).send({
              succes: false,
              message: "Password harus lebih 8 huruf",
            });
          }
        } else {
          return res.status(400).send({
            succes: false,
            message: "Password salah isi confirm password",
          });
        }
      }
    } catch (error) {
      console.log(error);
      return res.status(error.rc || 500).send(error);
    }
  },
};
