const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
<<<<<<< HEAD
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
/**
 * Get all of the items on the shelf
 */
router.get("/", (req, res) => {
  res.sendStatus(200); // For testing only, can be removed
=======
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  let queryText = `SELECT * FROM "item"`;
  pool.query(queryText).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log(error);
    res.sendStatus(500);
  });
>>>>>>> 1e08a177666a3303dcdc26d55ff185ee451d2e4c
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post("/", rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  const newItem = req.body;
  console.log(newItem);

  const query = `
  INSERT INTO "item" ("description", "image_url", "user_id") VALUES ($1, $2, $3);`;

  const values = [newItem.description, newItem.image_url, req.user.id];

  pool
    .query(query, values)
    .then((result) => {
      console.log("POST SUCCESS");
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("POST ERROR", error);
      res.sendStatus(500);
    });
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete("/:id", (req, res) => {
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put("/:id", (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get("/count", (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get("/:id", (req, res) => {
  // endpoint functionality
});

module.exports = router;
