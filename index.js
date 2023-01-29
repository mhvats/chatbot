// alert("hello");

var body = document.querySelector(".body");
var input = document.querySelector("input");
var send = document.querySelector(".btn");
send.addEventListener("click", function () {
    if (input.value == "hello" || input.value == "Hello") {
        var senderDiv = document.createElement("div");
        var senderText = document.createElement("p");
        senderDiv.classList.add("sender");
        body.append(senderDiv);
        senderDiv.append(senderText);
        senderText.innerHTML = input.value;
        input.value = "";
        var div = document.createElement("div");
        var text = document.createElement("p");
        div.classList.add("receiver");
        body.append(div);
        div.append(text);
        text.innerHTML = "Hello This is Chat-Bot created By <strong><em>Mehul Srivastava</em></strong> and he is happy to see you.....<br>Type <u>Continue</u> to proceed further..."
    }
    else if (input.value == "continue" || input.value == "Continue") {
        var senderDiv = document.createElement("div");
        var senderText = document.createElement("p");
        senderDiv.classList.add("sender");
        body.append(senderDiv);
        senderDiv.append(senderText);
        senderText.innerHTML = input.value;
        input.value = "";
        var div = document.createElement("div");
        var text = document.createElement("p");
        div.classList.add("receiver");
        body.append(div);
        div.append(text);
        text.innerHTML = "Thanks for showing your intrest into us...:-)"
        var div = document.createElement("div");
        var text = document.createElement("p");
        div.classList.add("receiver");
        body.append(div);
        div.append(text);
        text.innerHTML = "Choose Your Fantasy<br>1.Blowjob<br>2.Handjob<br>3.Smooch<br>4.Missonary"
    }
    else if(input.value == 1 ){
    var senderDiv = document.createElement("div");
        var senderText = document.createElement("p");
        senderDiv.classList.add("sender");
        body.append(senderDiv);
        senderDiv.append(senderText);
        senderText.innerHTML = input.value;
        input.value = "";
        var div = document.createElement("div");
        var text = document.createElement("p");
        div.classList.add("receiver");
        body.append(div);
        div.append(text);
        text.innerHTML = "Madharchod padh le...warna baap muh me de dega BSDK";
    }
    else if(input.value == 2 ){
    var senderDiv = document.createElement("div");
        var senderText = document.createElement("p");
        senderDiv.classList.add("sender");
        body.append(senderDiv);
        senderDiv.append(senderText);
        senderText.innerHTML = input.value;
        input.value = "";
        var div = document.createElement("div");
        var text = document.createElement("p");
        div.classList.add("receiver");
        body.append(div);
        div.append(text);
        text.innerHTML = "Shakal dekha hai Bhenchod muh dekh ke hi koi lund na chuye tera";
    }
    else if(input.value == 3 ){
    var senderDiv = document.createElement("div");
        var senderText = document.createElement("p");
        senderDiv.classList.add("sender");
        body.append(senderDiv);
        senderDiv.append(senderText);
        senderText.innerHTML = input.value;
        input.value = "";
        var div = document.createElement("div");
        var text = document.createElement("p");
        div.classList.add("receiver");
        body.append(div);
        div.append(text);
        text.innerHTML = "beta ballon aur chuchi ek nai hota";
    }
    else if(input.value == 4 ){
    var senderDiv = document.createElement("div");
        var senderText = document.createElement("p");
        senderDiv.classList.add("sender");
        body.append(senderDiv);
        senderDiv.append(senderText);
        senderText.innerHTML = input.value;
        input.value = "";
        var div = document.createElement("div");
        var text = document.createElement("p");
        div.classList.add("receiver");
        body.append(div);
        div.append(text);
        text.innerHTML = "Takiya pakad ke hila le, muthal sala";
    }
    else {
        var senderDiv = document.createElement("div");
        var senderText = document.createElement("p");
        senderDiv.classList.add("sender");
        body.append(senderDiv);
        senderDiv.append(senderText);
        senderText.innerHTML = input.value;
        input.value = "";
        var div = document.createElement("div");
        var text = document.createElement("p");
        div.classList.add("receiver");
        body.append(div);
        div.append(text);
        text.innerHTML = "Sorry you are lefting us:-("
    }
})
