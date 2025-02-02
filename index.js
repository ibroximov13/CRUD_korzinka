// fetch("https://679a13fe747b09cdcccd963a.mockapi.io/product")

const instance = axios.create({
  baseURL: 'https://679a147f747b09cdcccd9957.mockapi.io',
});

instance.get("/data").then(res => showData(res.data));

let all = document.querySelector(".all");

function showData(arr) {
  arr.forEach(element => {
      all.insertAdjacentHTML("beforeend", `
      <div id="card">
          <h4>${element.name}</h4>
          <img src="${element.avatar}" alt="">
          <p>$${element.createdAt}</p>
          <div id = "cardBtns">
              <div id = "editDeleteBuyBtn">
                  <button onClick = "window.location.href='add/add.html'">edit</button>
                  <button onClick = "deleteData(${element.id})">delete</button>
                  <button onClick = "localStorageGo(${element.id})">buy</button>
              </div>
          </div>
      </div>
      `)
  });
}

function deleteData(id) {
  instance.delete(`/data/${id}`);
  location.reload()
}

let arr = localStorage.getItem("crudKorzinka");
if(!arr) {
  arr = localStorage.setItem("crudKorzinka", JSON.stringify([]));
}

function localStorageGo(objId) {
  let newArr = JSON.parse(localStorage.getItem("crudKorzinka"));
  newArr.push(objId);
  localStorage.setItem("crudKorzinka", JSON.stringify(newArr));
  location.reload();
}