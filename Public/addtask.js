


    const form=document.querySelector("#form")
    form.addEventListener ("submit" ,async (e)=>{
        e.preventDefault()
        let taskName=document.querySelector(".taskname")
        console.log(taskName.value)

        let description=document.querySelector(".description")
        console.log(description.value);

        
     let   response=await axios.post("http://localhost:5000/task",{taskname:taskName.value,description:description.value})
     console.log(response.data)

if(response.data.success){

    alert(response.data.message)
    window.location.href="index.html"
}else{
    alert(response.data.message)
}
     
      
    })

 





   

