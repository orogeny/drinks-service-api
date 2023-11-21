import request from "supertest";
import { app } from "../app";

describe("/coffeelover endpoint", () => {
  test("GET responds with 'I like coffee!'", async () => {
    const res = await request(app).get("/coffeelover");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("I like coffee!");
  });
});
