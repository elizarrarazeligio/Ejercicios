const randomizer = require("./randomizer");

// Escribe tu código aquí
test("Comprueba tipo numérico", () => {
  expect(typeof randomizer()).toBe("number");
});

test("Comprueba mayor que 10", () => {
  expect(randomizer()).toBeGreaterThan(10);
});

test("Comprueba menor que 80", () => {
  expect(randomizer()).toBeLessThan(80);
});
