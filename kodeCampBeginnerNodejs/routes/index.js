var express = require('express');
var router = express.Router();
const { index, 
    handlePost, 
    handlePut, 
    handlePatch, 
    handleDelete 
} = require("../controllers/indexcontroller")

/* GET home page. */
router.get('/', index); 

module.exports = router;

router.post("/", handlePost);

router.put("/", handlePut);

router.patch("/", handlePatch);

router.delete("/", handleDelete);