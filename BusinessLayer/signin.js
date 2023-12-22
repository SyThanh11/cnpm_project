var authentication_model = require("../PersistenceLayer/authentication");
const authorization_model = require('../PersistenceLayer/authorization');

module.exports = {
    signin: function (req, res) {
      let obj = {
        email: req.body.email,
        password: req.body.password
      };
      if (authentication_model.checkNoEmpty(obj)) {
        authentication_model.signin(res, obj);
      }
      else {
        res.status(400).json({ message: "Vui lòng không bỏ trống bất kỳ trường thông tin đăng nhập nào" });
      }
    }
  }