const handleAddToStorage = () => {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const data = { id, name };
  localStorage.setItem(id, JSON.stringify(data));
  console.log(name, id);
};

const storedItem = localStorage.getItem("123");
console.log(JSON.parse(storedItem));

const handleClear = () => {
  localStorage.clear();
};
