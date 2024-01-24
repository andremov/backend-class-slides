const request = require("supertest");
const express = require("express");

const app = express();

app.use(express.json());

app.post("/user", function (req, res) {
  res.status(200).json(req.body);
});

test("supertest", async () => {
  const test_body = { name: "john" };

  const { status, _body: body } = await request(app)
    .post("/user")
    .send(test_body)
    .set("Accept", "application/json");

  expect(status).toBe(200);
  expect(body).toBeDefined();
  expect(body).toStrictEqual(test_body);
});
