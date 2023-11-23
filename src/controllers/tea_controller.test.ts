import request from "supertest";
import { app } from "../app";

describe("/tea endpoint", () => {
  test("GET /tea returns Green Tea", async () => {
    const res = await request(app).get("/tea");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Tea",
      name: "Green",
    });
  });
});
