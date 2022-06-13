const {Router} = require ("express")
const router = Router();
const students_ctrl = require("../controller/studentController")

router.get("/students/?id=", students_ctrl.getStudent);

router.get("/students/", students_ctrl.getStudent);

router.post("/students/", students_ctrl.postStudent);

router.put("/students", students_ctrl.putStudent);

router.delete("/students", students_ctrl.deleteStudent);
//Marks
router.get("/mark", students_ctrl.getMark);

router.put("/mark", students_ctrl.putMark);

router.post("/mark", students_ctrl.postMark);

router.delete("/mark", students_ctrl.deleteMark);
//Media
router.get("/media", students_ctrl.getMedia);

router.get("/apuntadas", students_ctrl.getApuntadas);

router.get("/impartidas", students_ctrl.getImpartidas);
module.exports = router;