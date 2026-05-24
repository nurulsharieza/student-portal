function login(event){

    event.preventDefault();

    let memberID =
    document.getElementById("memberID").value;

    let password =
    document.getElementById("password").value;

    if(memberID === "AIMS001" &&
       password === "aims2026"){

        window.location.href =
        "dashboard.html";

    }else{

        document.getElementById("error-message")
        .classList.remove("d-none");

    }

}