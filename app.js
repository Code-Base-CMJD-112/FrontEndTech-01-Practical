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

   if(!firstName || !lastName || !batch || !course || !email){
     document.getElementById("alert-pan-failed")
     .innerHTML =" <p>Save Failed!!</p>";
     document.getElementById("alert-pan-success").innerHTML = "";
     return;
   }

   courseData = {
       formFirstName: firstName.trim(),
       formLastName: lastName.trim(),
       formBatch: batch.trim(),
       formCourse: course.trim(),
       formEmail: email.trim()
   }
   console.log(courseData);
   console.log(JSON.stringify(courseData));

   
   document.getElementById("alert-pan-success").innerHTML = "<p>Saved!!</p>"
  document.getElementById("alert-pan-failed").innerHTML =""

})

