const urlGenerator = require("./urlGenerator.js");
const urlRegEx =
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

// Escribe tu código aquí
test("Comrpueba tipo string de URL", () => {
  expect(typeof urlGenerator("řâñđöḿ texto")).toBe("string");
});

test("Comrpueba regEx de URL", () => {
  expect(urlGenerator("řâñđöḿ texto")).toMatch(urlRegEx);
});
