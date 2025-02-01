let name = document.querySelector(".name");
let narx = document.querySelector(".narx");
let date = document.querySelector(".datetime");
let tanlov = document.querySelector(".option");
let avatar = document.querySelector(".avatar");

const instance = axios.create({
    baseURL: "https://679a147f747b09cdcccd9957.mockapi.io",
});

instance.get("/data").then(res=>idTanlash(res.data));
function idTanlash(data){
    data.forEach(e => {
        tanlov.insertAdjacentHTML("beforeend",`
        <option>${e.id}</option>
    `)
    });
}



function creatpeaduct() {
    let tavar = {
        name: name.value,
        avatar: avatar.value,
        createdAt: date.value,
    };
    instance.post("/data", tavar).then((res) => location.reload());
}
function abdet() {
    let id = tanlov.value; 
    let tavar = {
        name: name.value,
        avatar: avatar.value,
        createdAt: date.value,
    };
    if (id) {
        instance.put(`/data/${id}`, tavar)
        .then((res) => location.reload());
        console.log(tavar);
    } else {
        console.log("Tanlangan id mavjud emas");
    }
}

function clouse() {
    name.value = "";
    narx.value = "";
    avatar.value = "";
    date.value = "";
    tanlov.selectedIndex = 0;
    console.log("Tozalandi");
}

document.querySelector(".del").addEventListener("click", clouse);
document.querySelector(".save").addEventListener("click", creatpeaduct);
document.querySelector(".cancel").addEventListener("click", abdet);
