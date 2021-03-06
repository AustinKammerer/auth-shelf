const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * Get all of the items on the shelf
 */
router.get("/", (req, res) => {
  console.log('GET REQUEST');
  let queryText = `SELECT * FROM "item"`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
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
router.delete("/:id", rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  const queryText = `
    DELETE FROM item
    WHERE id = $1
    AND user_id = $2;
  `;

  const values = [req.params.id, req.user.id];

  pool.query(queryText, values)
    .then(result => {
      res.sendStatus(204);
    }).catch(err => {
      console.log(err)
      res.sendStatus(500);
    })
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
