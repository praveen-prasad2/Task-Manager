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
                    return ` <div class="cards">
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
          </div>`}).join("")
                document.querySelector("#main").innerHTML = newArr
                console.log(newArr);
            } else {
                console.log(data.message)
            }
        })
}
getData()