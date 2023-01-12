const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id')
console.log(id);

let taskname=document.querySelector("#taskname")
let description=document.querySelector('#description')

async function getOneTask(){
    let onetask=await axios.get("http://localhost:5000/get-one-task/"+ id)
    console.log(onetask.data)

   
    
 if(onetask.data.success){
    taskname.value=onetask.data.task.taskname
    description.value=onetask.data.task.description
 }
}


getOneTask()


const form= document.querySelector('#form')
form.addEventListener("submit",async (e)=>{
   e.preventDefault()
   
   let response=await axios.patch("http://localhost:5000/update-task/"+id,{taskname:taskname.value,description:description.value})
   console.log(response.data)

   if(response.data.success){

      alert(response.data.message)
      window.location.href="index.html"
  }else{
      alert(response.data.message)
  }
       
        
      })