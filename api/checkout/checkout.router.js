const { createCheckout } = require("./checkout.controller");

const router = require("express").Router();

const { checkToken } = require("../../auth/token_validation");


router.post("/", createCheckout);

module.exports = router;