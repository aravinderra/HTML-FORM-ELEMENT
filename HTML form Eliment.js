let formData = {
    name: "",
    email: "",
    status: "Active",
    gender: "Male"
}

function submitFormData(formData) {
    let options = {
        method: "POST",
        headers: {
            "content-type": "apploication/json",
            Accept: "Application/json",
            Authorization: "Bearer 3107310734ac8937c992584661baf19ab3dce3a951a557c929d622d66e48466b"
        },
        body: JSON.stringify(formData)
    }
    let url = "https://gorest.co.in/public-api/users"

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
        });
}
let workingStatusEl = document.getElementById("status");
workingStatusEl.addEventListener("change", function(event) {
    formData.status = event.target.value;
});
let genderMaleEl = document.getElementById("genderMale");
genderMaleEl.addEventListener("checked", function(event) {
    formData.gender = event.target.value;
});

let genderFemaleEl = document.getElementById("genderFemale");
genderFemaleEl.addEventListener("checked", function(event) {
    formData.gender = event.target.value;
});





let myFormEl = document.getElementById("myForm");

let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let nameErrorMsgEl = document.getElementById("nameErrorMsg");
let mailErrorMsgEl = document.getElementById("mailErrorMsg");

nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrorMsgEl.textContent = "Required*"
    } else {
        nameErrorMsgEl.textContent = "";
    }
    formData.name = event.target.value;
})

emailEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        mailErrorMsgEl.textContent = "Required*"
    } else {
        mailErrorMsgEl.textContent = "";
    }
    formData.email = event.target.value;
})

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    //form validations
    submitFormData(formData);
});