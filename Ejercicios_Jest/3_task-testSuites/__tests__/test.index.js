const {
  isValidEmail,
  isValidPassword,
  validateUserInput,
} = require("../index.js");

// Para tu comodidad, hemos añadido algunos datos de prueba, pero puedes usar los tuyos
const dataValid = { email: "bob@yandex.com", password: "1amAp0k3m0n%" };
const dataInvalidPassword = { email: "bob@yandex.com", password: "123456" };
const dataInvalidEmail = { email: "bob", password: "1amAp0k3m0n%" };
const dataInvalidCredentials = { email: "bob", password: "12345" };

// Escribe las pruebas aquí
describe("Validación de entradas de usuario", () => {
  test("Email válido", () => {
    expect(isValidEmail(dataValid.email)).toBeTruthy();
    expect(isValidEmail(dataInvalidEmail.email)).toBeFalsy();
  });

  test("Contraseña válida", () => {
    expect(isValidPassword(dataValid.password)).toBeTruthy();
    expect(isValidPassword(dataInvalidPassword.password)).toBeFalsy();
  });

  test("Entrada de usuario válida", () => {
    expect(validateUserInput(dataValid).isValidated).toBeTruthy();
    expect(validateUserInput(dataValid).error).toBeNull();
    expect(validateUserInput(dataValid).message).toBe(
      "Usuario creado correctamente"
    );
  });

  test("Entrada de usuario inválida por correo inválido", () => {
    expect(validateUserInput(dataInvalidEmail).isValidated).toBeFalsy();
    expect(validateUserInput(dataInvalidEmail).error).toBe(
      "Correo electrónico incorrecto"
    );
    expect(validateUserInput(dataInvalidEmail).message).toBeNull();
  });

  test("Entrada de usuario inválida por contraseña inválida", () => {
    expect(validateUserInput(dataInvalidPassword).isValidated).toBeFalsy();
    expect(validateUserInput(dataInvalidPassword).error).toBe(
      "Contraseña incorrecta"
    );
    expect(validateUserInput(dataInvalidPassword).message).toBeNull();
  });

  test("Entrada de usuario inválida por credenciales inválidas", () => {
    expect(validateUserInput(dataInvalidCredentials).isValidated).toBeFalsy();
    expect(validateUserInput(dataInvalidCredentials).error).toBe(
      "Datos incorrectos"
    );
    expect(validateUserInput(dataInvalidCredentials).message).toBeNull();
  });
});
