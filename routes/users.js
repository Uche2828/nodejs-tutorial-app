var express = require('express');
var router = express.Router();

router.get("/:name/:age/:sex", (req, res) => {
  const name = req.params.name;
  const age = req.params.age;
  const sex = req.params.sex;

  const user = {
    name: name,
    age: age,
    sex: sex
  };

  res.json(user);
})

module.exports = router;
