const {Router} = require("express");
const router = Router();
const personaCtrl = require("../controller/persona.controller")

router.get("/", personaCtrl.getStart);

router.get("/profesional", personaCtrl.getPersona);

router.get("/profesional/:id", personaCtrl.getPersonaParams);

router.post("/profesional", personaCtrl.postPersona);

router.put("/profesional", personaCtrl.putPersona);

router.delete("/profesional", personaCtrl.deletePersona);

module.exports =router;
