const mongoose = require("mongoose");

const Conn = (url, user, pass, data) => {
  mongoose.connect(`${url}/${data}`, {
      user: user,
      pass: pass,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Conexao com Banco executada com sucesso");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = Conn;
