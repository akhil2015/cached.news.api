const express = require("express");
const router = express.Router();
const {
  fetchNews,
  searchByKeyword,
  searchByTitle,
  // searchByAuthor,
} = require("../services/NewsManagementService");

router.route("/").get(fetchNews);
router.route("/search").get(searchByKeyword);
router.route("/title").get(searchByTitle);

module.exports = router;