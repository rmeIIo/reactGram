const { body } = require("express-validator");

const userCreateValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome é obrigatório.")
      .isLength({ min: 3 })
      .withMessage("O nome deve ter no mínimo 3 caracteres."),
    body("email")
      .isString()
      .withMessage("O email é obrigatório.")
      .isEmail()
      .withMessage("O email deve ser válido."),
    body("password")
      .isString()
      .withMessage("A senha é obrigatória.")
      .isLength({ min: 5 })
      .withMessage("A senha deve ter no mínimo 5 caracteres."),
    body("confirmpassword")
      .isString()
      .withMessage("A confirmação de senha é obrigatória.")
      .custom((value, { req }) => {
        if (value != req.body.password) {
          throw new Error("As senhas devem ser iguais.");
        }
        return true;
      }),
  ];
};

module.exports = {
  userCreateValidation,
};
