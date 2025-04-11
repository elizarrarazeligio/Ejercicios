const supertest = require("supertest");
const app = require("../app.js");

const request = supertest(app);

// Escribe las pruebas aquí
describe("Los endpoints responden a las solicitudes", () => {
  test("Devuelve '¡Hola, mundo!' y estado 200 en solicitud '/'", () => {
    return request.get("/").then((response) => {
      expect(response.status).toBe(200);
      expect(response.text).toBe("¡Hola, mundo!");
    });
  });

  test("Devuelve objeto JSON con datos de usuario y estado 201 en solicitud '/users'", () => {
    return request.post("/users").then((response) => {
      expect(response.status).toBe(201);
      expect(response.header["content-type"]).toMatch("application/json");
      expect(JSON.parse(response.text).message).toBe("éxito");
      expect(response.body.data.isDeveloper).toBeTruthy();
      expect(response.body.data.followersOnGithub).toBeGreaterThan(10);
    });
  });
});
