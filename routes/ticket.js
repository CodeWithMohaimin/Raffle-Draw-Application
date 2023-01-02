const router = require("express").Router();
const db = require("../db/db");

router.get("/t/:ticketId", () => {});
router.patch("/t/:ticketId", () => {});
router.delete("/t/:ticketId", () => {});

router.get("/u/:username", () => {});
router.patch("/u/:username", () => {});
router.delete("/u/:username", () => {});

router.post("/bulk", () => {});
router.post("/sell", () => {});
router.get("/draw", () => {});

module.exports = router;
