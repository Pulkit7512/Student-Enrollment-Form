const form = document.querySelector('form');
const myname = document.querySelector('#name');
const email = document.querySelector('#email');
const imageLink = document.querySelector('#image');
const website = document.querySelector('#website');
const tbody = document.querySelector('tbody');
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const tempName = myname.value;
    const tempEmail = email.value;
    const tempWebsite = website.value;
    const gender = document.querySelector("input[name = 'gender']:checked").value;
    console.log(gender);
    var skills = '';
    var checks = document.querySelectorAll('.skills');
    for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked == true) {
            skills += checks[i].value + ", ";
        }
    }
    skills = skills.substring(0, skills.length - 2);
    const input = `<div><b>${tempName}</b></div><div>${gender}</div><div>${tempEmail}</div><div>${tempWebsite}</div><div>${skills}</div>`;
    const newDes = document.createElement("TD");
    const newImg = document.createElement("TD");
    newDes.innerHTML = input;
    newImg.innerHTML = `<a href = "${imageLink.value}" target = "_blank"><img src = "${imageLink.value}" alt = "${myname.value}'s photo" width = "100px" ></a>`;
    const newTR = document.createElement("TR");
    newTR.classList.add("hidden");
    newTR.append(newDes);
    newTR.append(newImg);
    tbody.append(newTR);
    setTimeout(()=>{
        document.querySelector('tr.hidden:last-of-type').classList.remove('hidden');
    }, 100);
})