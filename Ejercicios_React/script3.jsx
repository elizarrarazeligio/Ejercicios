// Generación de listas
const list = [
  {
    id: 1,
    name: "Pan",
    quantity: "1 rebanada",
  },
  {
    id: 2,
    name: "Ron",
    quantity: "3 botellas",
  },
  {
    id: 3,
    name: "Coca-cola",
    quantity: "3 botellas",
  },
  {
    id: 4,
    name: "Papel higiénico",
    quantity: "Tanto como sea humanamente posible",
  },
];

ReactDOM.render(
  <ul>
    {list.map((item) => (
      <li key={item.id}>
        <b>{item.name}</b>
        <i>{item.quantity}</i>
      </li>
    ))}
  </ul>,
  document.querySelector("#root")
);
