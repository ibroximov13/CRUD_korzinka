const instance = axios.create({
  baseURL: "https://679a147f747b09cdcccd9957.mockapi.io",
});

instance.get("/data").then((res) => showData(res.data));

let root = document.querySelector(".all");
function showData(arr) {
  let a = JSON.parse(localStorage.getItem("crudKorzinka"));
  arr.forEach((e) => {
    if (a.includes(Number(e.id))) {
      root.insertAdjacentHTML(
        "beforeend",
        `
        <div class="card">
            <img src="${e.avatar}" alt="rasm">
            <h4>${e.name}</h4>
            <p>$${e.createdAt}</p>
            <button onClick = "delProd(${e.id})">delete</button>
        </div>
        `
      );
    }
  });
}

function delProd(son) {
  let a = JSON.parse(localStorage.getItem("crudKorzinka"));
  a = a.filter((i) => i !== son);
  localStorage.setItem("crudKorzinka", JSON.stringify(a));
  location.reload();
}
