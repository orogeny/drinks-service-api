import request from "supertest";
import { app } from "../app";

describe("/coffee endpoint", () => {
  test("GET /coffee should return default object", async () => {
    const res = await request(app).get("/coffee");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Coffee",
      name: "Latte",
    });
  });

  test("GET /coffee returns requested coffee name", async () => {
    const res = await request(app).get("/coffee?coffeeName=Espresso");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Coffee",
      name: "Espresso",
    });
  });
});
