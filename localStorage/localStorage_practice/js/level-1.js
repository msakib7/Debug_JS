let count = 0;
const saveData = () => {
    const name = document.getElementById('userName').value;
    const institute = document.getElementById('userInstitute').value;
    const department = document.getElementById('userDepartment').value;
    const intake = document.getElementById('userIntake').value;
    const section = document.getElementById('userSection').value;
    const roll = document.getElementById('userRoll').value;
    const email = document.getElementById('userEmail').value;
    if( !name || !institute || !department || !intake || !section || !roll || !email) {
        saveData();
    }

    displayUsers(name, institute, department, intake, section, roll, email);
    addEntry(name, institute, department, intake, section, roll, email);
    // console.log(department);

    document.getElementById('userName').value = '';
    document.getElementById('userInstitute').value = '';
    document.getElementById('userDepartment').value = '';
    document.getElementById('userSection').value = '';
    document.getElementById('userRoll').value = '';
    document.getElementById('userEmail').value = '';
    document.getElementById('userIntake').value = '';

}
const displayUsers = (name, institute, department, intake, section, roll, email) =>{
   const userListSection = document.getElementById('user-list');
   const userDiv = document.createElement('li');
   userDiv.innerHTML = `
   <h4>Name: ${name}</h4>
   <p class="fs-4"><span >Institute:</span> ${institute} | <span class="fs-4">Department:</span> ${department}</p>
   <p class="fs-4"><span >Email:</span> ${email}</p>
   ` 
   userListSection.appendChild(userDiv);
}

function addEntry(name, institute, department, intake, section, roll, email) {
    // Parse any JSON previously stored in allEntries
    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if(existingEntries == null) existingEntries = [];
    // var entryTitle = document.getElementById("entryTitle").value;
    // var entryText = document.getElementById("entryText").value;
    var entry = {
        "name": name,
        "institute": institute,
        "department": department,
        "intake": intake,
        "roll": roll,
        "email": email
    };
    localStorage.setItem("entry", JSON.stringify(entry));
    // Save allEntries back to local storage
    existingEntries.push(entry);
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
};

const displayFromLocalStorage = () => {
    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    console.log(existingEntries);
    for( var user of existingEntries) {
        displayUsers( user.name, user.institute, user.department, user.intake, user.section, user.roll, user.email);
    }
}
displayFromLocalStorage();