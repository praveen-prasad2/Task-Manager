


function getData() {
  console.log("Hi")
  fetch("http://localhost:5000/get-all-task")
    .then((r) => r.json())
    .then((data) => {
      if (data.success) {
        // console.log(data.alltask)

        const { alltask } = data;
        // alltask.forEach(task => {console.log(task.taskname)});
        let newArr = alltask.map((task) => {
          return ` 
            <div class="card">
            <div class="content">
              <div class="tools">
                <div class="circles">
                  <div class="circle">
                    <span class="red box"></span>
                  </div>
                  <div class="circle">
                    <span class="yellow box"></span>
                  </div>
                  <div class="circle">
                    <span class="green box"></span>
                  </div>
                </div>
                <h5 class="taskname">${task.taskname}</h5>
              </div>
      
              <div class="cardcontent">
                <p class="description">${task.completed ? `<del>${task.description}</del>` : task.description}</p>
              </div>
              <div class="options">
                <button class="edit">
                  <span> <i class="fa-solid fa-pen-to-square"></i>
                  </span>
                </button>
                <button class="delete edit">
                  <span> <i class="fa-solid fa-trash"></i>
                  </span>
                </button>
                <label class="container ">
                  <input ${task.completed ? 'checked="checked" ' : ""} type="checkbox">
                  <div class="checkmark"></div>
                </label>
              </div>
              </div>
            </div>
          `}).join("")
        document.querySelector("#main").innerHTML = newArr
        console.log(newArr);
      } else {
        console.log(data.message)
      }
    })
}
// getData()

async function fetchData() {

  let response = await axios.get("http://localhost:5000/get-all-task")
  console.log(response.data)
  {
    if (response.data.success) {
      // console.log(data.alltask)

      const { alltask } = response.data;
      // alltask.forEach(task => {console.log(task.taskname)});
      let newArr = alltask.map((task) => {
        return ` 
  <div class="card"  >
  <div class="content" >
    <div class="tools">
      <div class="circles">
        <div class="circle">
          <span class="red box"></span>
        </div>
        <div class="circle">
          <span class="yellow box"></span>
        </div>
        <div class="circle">
          <span class="green box"></span>
        </div>
      </div>
      <h5 class="taskname">${task.taskname}</h5>
    </div>

    <div class="cardcontent">
      <p class="description">${task.completed ? `<del>${task.description}</del>` : task.description}</p>
    </div>
    <div class="options" >
      <button class="edit">
        <span>  <a href="http://localhost:5000/edit-task.html?id=${task._id}"><i class="fa-solid fa-pen-to-square"></i></a>
        </span>
      </button>
      <button class="delete edit delete-btn" data-id=${task._id}>
        <span class="delete-btn" > <i class="fa-solid fa-trash"  data-id=${task._id}></i>
        </span>
      </button>
      <label class="container ">
        <input ${task.completed ? 'checked="checked" ' : ""} type="checkbox">
        <div class="checkmark"></div>
      </label>
    </div>
    </div>
  </div>
`}).join("")
      document.querySelector("#main").innerHTML = newArr
      // console.log(newArr);
    } else {
      console.log(response.data.message)
    }
  }
}

fetchData()


// EDIT TASK

let edited = document.querySelector(".edit")
edited.addEventListener("click", function () {
  location.href = "edit-task.html"
})


// DELETE TASK 

let deletetask = document.querySelector("#main")
deletetask.addEventListener("click", async function (e) {
  console.log(e.target.parentElement)

  if (e.target.classList.contains("delete-btn") || (e.target.parentElement.classList.contains("delete-btn"))) {
    let id = e.target.getAttribute("data-id")
    console.log(id);
    async function deleteTask() {
      let del = await axios.delete("http://localhost:5000/delete-task/" + id)
      if (del.data.success) {
        alert(del.data.message)
        location.href = "index.html"
      } else {
        alert(del.data.message)
      }




    }
    deleteTask()
  }
})
