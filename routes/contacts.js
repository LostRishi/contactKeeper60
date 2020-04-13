const express = require("express");

const router = express.Router();

// @route    GET api/contacts
// @desc     Get all user contacts
// @access   Private

router.get("/", (req, res) => {
  res.send("get all contacts");
});

// @route    GET api/contacts
// @desc     Get all user contacts
// @access   Private

router.post("/", (req, res) => {
  res.send("Add contacts");
});

// @route    PUT api/contacts/:id
// @desc     Update contacts
// @access   Private

router.put("/:id", (req, res) => {
  res.send("Update contacts");
});

// @route    DELETE api/contacts
// @desc     Delete contacts
// @access   Private

router.delete("/:id", (req, res) => {
  res.send("Delete contacts");
});

module.exports = router;
