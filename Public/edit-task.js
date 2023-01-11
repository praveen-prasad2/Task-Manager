const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id')
console.log(id);


async function getOneTask(){
    let onetask=await axios.get("http://localhost:5000/get-one-task/"+ id)
    console.log(onetask.data)

    let taskname=document.querySelector("#taskname")
    
 if(onetask.data.success){
    taskname.value=onetask.data.task.taskname
 }
}



getOneTask()