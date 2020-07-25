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



$(`.design`).click(function(){
    $(`.design img`).slideToggle();
    $(`#design`).slideToggle();
})

$(`.development`).click(function(){
    $(`.development img`).slideToggle();
    $(`#development`).slideToggle();
})

$(`.product`).click(function(){
    $(`.product img`).slideToggle();
    $(`#product`).slideToggle();
})

$(`#whitesquare1`).mouseover(function(){
    $(`#whitesquare1`).css(`opacity`, `0.7`);
})

$(`#whitesquare1`).mouseout(function(){
    $(`#whitesquare1`).css(`opacity`, `0`);
})


$(`#whitesquare2`).mouseover(function(){
    $(`#whitesquare2`).css(`opacity`, `0.7`);
})

$(`#whitesquare2`).mouseout(function(){
    $(`#whitesquare2`).css(`opacity`, `0`);
})


$(`#whitesquare3`).mouseover(function(){
    $(`#whitesquare3`).css(`opacity`, `0.7`);
})

$(`#whitesquare3`).mouseout(function(){
    $(`#whitesquare3`).css(`opacity`, `0`);
})


$(`#whitesquare4`).mouseover(function(){
    $(`#whitesquare4`).css(`opacity`, `0.7`);
})

$(`#whitesquare4`).mouseout(function(){
    $(`#whitesquare4`).css(`opacity`, `0`);
})


$(`#whitesquare5`).mouseover(function(){
    $(`#whitesquare5`).css(`opacity`, `0.7`);
})

$(`#whitesquare5`).mouseout(function(){
    $(`#whitesquare5`).css(`opacity`, `0`);
})



$(`#whitesquare6`).mouseover(function(){
    $(`#whitesquare6`).css(`opacity`, `0.7`);
})

$(`#whitesquare6`).mouseout(function(){
    $(`#whitesquare6`).css(`opacity`, `0`);
})


$(`#whitesquare7`).mouseover(function(){
    $(`#whitesquare7`).css(`opacity`, `0.7`);
})

$(`#whitesquare7`).mouseout(function(){
    $(`#whitesquare7`).css(`opacity`, `0`);
})


$(`#whitesquare8`).mouseover(function(){
    $(`#whitesquare8`).css(`opacity`, `0.7`);
})

$(`#whitesquare8`).mouseout(function(){
    $(`#whitesquare8`).css(`opacity`, `0`);
})

