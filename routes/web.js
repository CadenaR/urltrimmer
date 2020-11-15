const router = require("express").Router();
const urlController = require("../controllers/UrlsController");

router.post("/url", urlController.store);

router.get("/url/:hash", urlController.getSpecific);

router.post("/url/:hash", urlController.updateSpecific);

module.exports = router;
