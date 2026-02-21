const form = document.getElementById("data-from");
let courseData = {}

form.addEventListener("submit",(e)=>{
   e.preventDefault() 
   //collect form data
   let formData= new FormData(form);

   let firstName = formData.get("first-name")
   let lastName = formData.get("last-name")
   let batch = formData.get("batch")
   let course = formData.get("course")
   let email = formData.get("email")

   courseData = {
       formFirstName: firstName,
       formLastName: lastName,
       formBatch: batch,
       formCourse: course,
       formEmail: email
   }
   console.log(courseData)
   console.log(JSON.stringify(courseData))



  
})

