const {Router} = require("express");
const router = Router();
const personasCtrl = require("../controller/personas.controller")

router.get("/", personasCtrl.getStart);

router.get("/profesionals", personasCtrl.getPersonas);

// router.get("/profesionals/:id", personasCtrl.getPersonasID);

router.post("/profesionals", personasCtrl.postPersonasinBD);

router.put("/profesionals", personasCtrl.putPersonasBD);

router.delete("/profesionals", personasCtrl.deletePersonasBD);

module.exports = router;
