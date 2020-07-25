$(`.design`).click(function(){
    $(`.design img`).toggle();
    $(`#design`).toggle();
})

$(`.development`).click(function(){
    $(`.development img`).toggle();
    $(`#development`).toggle();
})

$(`.product`).click(function(){
    $(`.product img`).toggle();
    $(`#product`).toggle();
})

function formsubmit(){
    var name = document.getElementById(`name`).value;
    var email = document.getElementById(`email`).value;
    var feedback = document.getElementById(`feedback`).value;

    if(name=== ``){
        alert(`*Name field is required`)
    }

    if(email===``){
        alert(`*Your email address is required`)
    }

    if(feedback===``){
        alert(`*please enter something`)
    }
    
   if(name !=`` && email !=`` && feedback != ``){
       var filledname = name;
       var filledemail = email;
       var filledfeedback = feedback;

       alert(`Thank you for your feedback, we will be intouch soon.`)
   }

}