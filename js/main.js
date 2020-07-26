var whitesquares = [`whitesquare1`, `whitesquare2`, `whitesquare3`, `whitesquare4`, `whitesquare5`, `whitesquare6`, `whitesquare7`, `whitesquare8`,]
var whatwedoes = [`design`, `development`, `product`]



function formsubmit() {
    var name = document.getElementById(`name`).value;
    var email = document.getElementById(`email`).value;
    var feedback = document.getElementById(`feedback`).value;




    if (name === ``) {
        alert(`*Name field is required`)
    }

    if (email === ``) {
        alert(`*Your email address is required`)
    }

    if (feedback === ``) {
        alert(`*please enter something`)
    }

    if (name != `` && email != `` && feedback != ``) {


        var filledname = name;
        var filledemail = email;
        var filledfeedback = feedback;



        alert(` ${name}, we have received your message, thank you for reaching out.`)
    }

}


whatwedoes.forEach(function (whatwedo) {
    $(`.${whatwedo}`).click(function () {
        $(`.${whatwedo} img`).slideToggle();
        $(`#${whatwedo}`).slideToggle();
    })
})


whitesquares.forEach(function (whitesquare) {

    $(`#${whitesquare}`).mouseover(function () {
        $(`#${whitesquare}`).css(`opacity`, `0.7`);
    })

    $(`#${whitesquare}`).mouseout(function () {
        $(`#${whitesquare}`).css(`opacity`, `0`);
    })
})
