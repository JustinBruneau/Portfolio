function sendMail(params){
    var tempParams ={
        entreprise: document.getElementById("fromName").value,
        to_name: document.getElementById("toName").value,
        mail: document.getElementById("mail").value,
        message: document.getElementById("message").value,
    };
    
    
    emailjs.send('service_8wfb3mo','template_d949bqv',tempParams).then(function(res){
        console.log("success", res.status);
    })
    
}
