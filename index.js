

// ---------------------------------------------------------Notes Javascript------------------------------------------------------------
let note = (title, text,date_time, important, urgent, due_date, radio1, radio2, radio3, index) => {
    if(radio1==true){
        // console.log("Inside Radio1");
        // Neither important nor urgent
        if(important==false && urgent==false){
            document.getElementById("notes").innerHTML += `
            <div class="noteCard" style = "border-radius: 5px; margin: 7px; padding: 10px; background-color: white; border: none;">
            <h3 style="color: white; background-color: #52f73c; text-align: center; padding: 5px;">Note</h3>
            <h2 style = "margin: 5px 5px 0px; font-size: 28px; font-family: 'Baloo Bhai 2', cursive;">${title}</h2>
            <p style = "font-size: 12px; font-family: 'Roboto', sans-serif; color: gray; margin-left: 5px;">Uploaded On- ${date_time}</p>
            <p class="text" style = "margin: 5px; font-family: 'Roboto', sans-serif; font-size: 16px;">${text}</p>
            <div style="display: flex;">
            <p style="color: red; font-weight: bold; margin-left: 5px; visibility: hidden;">Important</p>
            <p style="color: green; font-weight: bold; margin-left: 5px; visibility: hidden;">Urgent</p>
            </div>
            <button class="button" id="delete_note" onclick=deleteNote(${index})>Delete Note</button>
            </div>
            `
        }

        // Not important but urgent
        if(important==false && urgent==true){
            document.getElementById("notes").innerHTML += `
            <div class="noteCard" style = "border-radius: 5px; margin: 7px; padding: 10px; background-color: white; border: none;">
            <h3 style="color: white; background-color: #52f73c; text-align: center; padding: 5px;">Note</h3>
            <h2 style = "margin: 5px 5px 0px; font-size: 28px; font-family: 'Baloo Bhai 2', cursive;">${title}</h2>
            <p style = "font-size: 12px; font-family: 'Roboto', sans-serif; color: gray; margin-left: 5px;">Uploaded On- ${date_time}</p>
            <p class="text" style = "margin: 5px; font-family: 'Roboto', sans-serif; font-size: 16px;">${text}</p>
            <div style="display: flex;">
            <p style="color: red; font-weight: bold; margin-left: 5px; visibility: hidden;">Important</p>
            <p style="color: green; font-weight: bold; margin-left: 5px;">Urgent</p>
            </div>
            <button class="button" id="delete_note" onclick=deleteNote(${index})>Delete Note</button>
            </div>
            `
        }

        // Important but not urgent
        if(important==true && urgent==false){
            document.getElementById("notes").innerHTML += `
            <div class="noteCard" style = "border-radius: 5px; margin: 7px; padding: 10px; background-color: white; border: none;">
            <h3 style="color: white; background-color: #52f73c; text-align: center; padding: 5px;">Note</h3>
            <h2 style = "margin: 5px 5px 0px; font-size: 28px; font-family: 'Baloo Bhai 2', cursive;">${title}</h2>
            <p style = "font-size: 12px; font-family: 'Roboto', sans-serif; color: gray; margin-left: 5px;">Uploaded On- ${date_time}</p>
            <p class="text" style = "margin: 5px; font-family: 'Roboto', sans-serif; font-size: 16px;">${text}</p>
            <div style="display: flex;">
            <p style="color: red; font-weight: bold; margin-left: 5px;">Important</p>
            <p style="color: green; font-weight: bold; margin-left: 5px; visibility: hidden;">Urgent</p>
            </div>
            <button class="button" id="delete_note" onclick=deleteNote(${index})>Delete Note</button>
            </div>
            `
        }

        // Urgent and important
        if(important==true && urgent==true){
            document.getElementById("notes").innerHTML += `
            <div class="noteCard" style = "border-radius: 5px; margin: 7px; padding: 10px; background-color: white; border: none;">
            <h3 style="color: white; background-color: #52f73c; text-align: center; padding: 5px;">Note</h3>
            <h2 style = "margin: 5px 5px 0px; font-size: 28px; font-family: 'Baloo Bhai 2', cursive;">${title}</h2>
            <p style = "font-size: 12px; font-family: 'Roboto', sans-serif; color: gray; margin-left: 5px;">Uploaded On- ${date_time}</p>
            <p class="text" style = "margin: 5px; font-family: 'Roboto', sans-serif; font-size: 16px;">${text}</p>
            <div style="display: flex;">
            <p style="color: red; font-weight: bold; margin-left: 5px;">Important</p>
            <p style="color: green; font-weight: bold; margin-left: 5px;">Urgent</p>
            </div>
            <button class="button" id="delete_note" onclick=deleteNote(${index})>Delete Note</button>
            </div>
            `
        }
    };

    
    if(radio2==true){
        // console.log("Inside Radio2");
        // Neither important nor urgent
        if(important==false && urgent==false){
            document.getElementById("notes").innerHTML += `
            <div class="noteCard" style = "border-radius: 5px; margin: 7px; padding: 10px; background-color: white; border: none;">
            <h3 style="color: white; background-color: #ff4f00; text-align: center; padding: 5px;">Event</h3>
            <h2 style = "margin: 5px 5px 0px; font-size: 28px; font-family: 'Baloo Bhai 2', cursive;">${title}</h2>
            <p style = "font-size: 12px; font-family: 'Roboto', sans-serif; color: gray; margin-left: 5px;">Uploaded On- ${date_time}</p>
            <p style = "font-size: 15px; font-family: 'Roboto', sans-serif; color: black; margin-left: 5px;">Scheduled Date- ${due_date}</p>
            <p class="text" style = "margin: 5px; font-family: 'Roboto', sans-serif; font-size: 16px;">${text}</p>
            <div style="display: flex;">
            <p style="color: red; font-weight: bold; margin-left: 5px; visibility: hidden;">Important</p>
            <p style="color: green; font-weight: bold; margin-left: 5px; visibility: hidden;">Urgent</p>
            </div>
            <button class="button" id="delete_note" onclick=deleteNote(${index})>Delete Note</button>
            </div>
            `
        }
        // Not important but urgent
        if(important==false && urgent==true){
            document.getElementById("notes").innerHTML += `
            <div class="noteCard" style = "border-radius: 5px; margin: 7px; padding: 10px; background-color: white; border: none;">
            <h3 style="color: white; background-color: #ff4f00; text-align: center; padding: 5px;">Event</h3>
            <h2 style = "margin: 5px 5px 0px; font-size: 28px; font-family: 'Baloo Bhai 2', cursive;">${title}</h2>
            <p style = "font-size: 12px; font-family: 'Roboto', sans-serif; color: gray; margin-left: 5px;">Uploaded On- ${date_time}</p>
            <p style = "font-size: 15px; font-family: 'Roboto', sans-serif; color: black; margin-left: 5px;">Scheduled Date- ${due_date}</p>
            <p class="text" style = "margin: 5px; font-family: 'Roboto', sans-serif; font-size: 16px;">${text}</p>
            <div style="display: flex;">
            <p style="color: red; font-weight: bold; margin-left: 5px; visibility: hidden;">Important</p>
            <p style="color: green; font-weight: bold; margin-left: 5px;">Urgent</p>
            </div>
            <button class="button" id="delete_note" onclick=deleteNote(${index})>Delete Note</button>
            </div>
            `
        }

        // Important but not urgent
        if(important==true && urgent==false){
            document.getElementById("notes").innerHTML += `
            <div class="noteCard" style = "border-radius: 5px; margin: 7px; padding: 10px; background-color: white; border: none;">
            <h3 style="color: white; background-color: #ff4f00; text-align: center; padding: 5px;">Event</h3>
            <h2 style = "margin: 5px 5px 0px; font-size: 28px; font-family: 'Baloo Bhai 2', cursive;">${title}</h2>
            <p style = "font-size: 12px; font-family: 'Roboto', sans-serif; color: gray; margin-left: 5px;">Uploaded On- ${date_time}</p>
            <p style = "font-size: 15px; font-family: 'Roboto', sans-serif; color: black; margin-left: 5px;">Scheduled Date- ${due_date}</p>
            <p class="text" style = "margin: 5px; font-family: 'Roboto', sans-serif; font-size: 16px;">${text}</p>
            <div style="display: flex;">
            <p style="color: red; font-weight: bold; margin-left: 5px;">Important</p>
            <p style="color: green; font-weight: bold; margin-left: 5px; visibility: hidden;">Urgent</p>
            </div>
            <button class="button" id="delete_note" onclick=deleteNote(${index})>Delete Note</button>
            </div>
            `
        }

        // Urgent and important
        if(important==true && urgent==true){
            document.getElementById("notes").innerHTML += `
            <div class="noteCard" style = "border-radius: 5px; margin: 7px; padding: 10px; background-color: white; border: none;">
            <h3 style="color: white; background-color: #ff4f00; text-align: center; padding: 5px;">Event</h3>
            <h2 style = "margin: 5px 5px 0px; font-size: 28px; font-family: 'Baloo Bhai 2', cursive;">${title}</h2>
            <p style = "font-size: 12px; font-family: 'Roboto', sans-serif; color: gray; margin-left: 5px;">Uploaded On- ${date_time}</p>
            <p style = "font-size: 15px; font-family: 'Roboto', sans-serif; color: black; margin-left: 5px;">Scheduled Date- ${due_date}</p>
            <p class="text" style = "margin: 5px; font-family: 'Roboto', sans-serif; font-size: 16px;">${text}</p>
            <div style="display: flex;">
            <p style="color: red; font-weight: bold; margin-left: 5px;">Important</p>
            <p style="color: green; font-weight: bold; margin-left: 5px;">Urgent</p>
            </div>
            <button class="button" id="delete_note" onclick=deleteNote(${index})>Delete Note</button>
            </div>
            `
        }
    };
    // console.log("Hum chutiya hain");
    if(radio3==true){
        // console.log("Inside Radio3");
        // Neither important nor urgent
        if(important==false && urgent==false){
            document.getElementById("notes").innerHTML += `
            <div class="noteCard" style = "border-radius: 5px; margin: 7px; padding: 10px; background-color: white; border: none;">
            <h3 style="color: white; background-color: #ffef00; text-align: center; padding: 5px;">Meeting</h3>
            <h2 style = "margin: 5px 5px 0px; font-size: 28px; font-family: 'Baloo Bhai 2', cursive;">${title}</h2>
            <p style = "font-size: 12px; font-family: 'Roboto', sans-serif; color: gray; margin-left: 5px;">Uploaded On- ${date_time}</p>
            <p style = "font-size: 15px; font-family: 'Roboto', sans-serif; color: black; margin-left: 5px;">Scheduled Date- ${due_date}</p>
            <p class="text" style = "margin: 5px; font-family: 'Roboto', sans-serif; font-size: 16px;">${text}</p>
            <div style="display: flex;">
            <p style="color: red; font-weight: bold; margin-left: 5px; visibility: hidden;">Important</p>
            <p style="color: green; font-weight: bold; margin-left: 5px; visibility: hidden;">Urgent</p>
            </div>
            <button class="button" id="delete_note" onclick=deleteNote(${index})>Delete Note</button>
            </div>
            `
        }

        // Not important but urgent
        if(important==false && urgent==true){
            document.getElementById("notes").innerHTML += `
            <div class="noteCard" style = "border-radius: 5px; margin: 7px; padding: 10px; background-color: white; border: none;">
            <h3 style="color: white; background-color: #ffef00; text-align: center; padding: 5px;">Meeting</h3>
            <h2 style = "margin: 5px 5px 0px; font-size: 28px; font-family: 'Baloo Bhai 2', cursive;">${title}</h2>
            <p style = "font-size: 12px; font-family: 'Roboto', sans-serif; color: gray; margin-left: 5px;">Uploaded On- ${date_time}</p>
            <p style = "font-size: 15px; font-family: 'Roboto', sans-serif; color: black; margin-left: 5px;">Scheduled Date- ${due_date}</p>
            <p class="text" style = "margin: 5px; font-family: 'Roboto', sans-serif; font-size: 16px;">${text}</p>
            <div style="display: flex;">
            <p style="color: red; font-weight: bold; margin-left: 5px; visibility: hidden;">Important</p>
            <p style="color: green; font-weight: bold; margin-left: 5px;">Urgent</p>
            </div>
            <button class="button" id="delete_note" onclick=deleteNote(${index})>Delete Note</button>
            </div>
            `
        }

        // Important but not urgent
        if(important==true && urgent==false){
            document.getElementById("notes").innerHTML += `
            <div class="noteCard" style = "border-radius: 5px; margin: 7px; padding: 10px; background-color: white; border: none;">
            <h3 style="color: white; background-color: #ffef00; text-align: center; padding: 5px;">Meeting</h3>
            <h2 style = "margin: 5px 5px 0px; font-size: 28px; font-family: 'Baloo Bhai 2', cursive;">${title}</h2>
            <p style = "font-size: 12px; font-family: 'Roboto', sans-serif; color: gray; margin-left: 5px;">Uploaded On- ${date_time}</p>
            <p style = "font-size: 15px; font-family: 'Roboto', sans-serif; color: black; margin-left: 5px;">Scheduled Date- ${due_date}</p>
            <p class="text" style = "margin: 5px; font-family: 'Roboto', sans-serif; font-size: 16px;">${text}</p>
            <div style="display: flex;">
            <p style="color: red; font-weight: bold; margin-left: 5px;">Important</p>
            <p style="color: green; font-weight: bold; margin-left: 5px; visibility: hidden;">Urgent</p>
            </div>
            <button class="button" id="delete_note" onclick=deleteNote(${index})>Delete Note</button>
            </div>
            `
        }

        // Urgent and important
        if(important==true && urgent==true){
            document.getElementById("notes").innerHTML += `
            <div class="noteCard" style = "border-radius: 5px; margin: 7px; padding: 10px; background-color: white; border: none;">
            <h3 style="color: white; background-color: #ffef00; text-align: center; padding: 5px;">Meeting</h3>
            <h2 style = "margin: 5px 5px 0px; font-size: 28px; font-family: 'Baloo Bhai 2', cursive;">${title}</h2>
            <p style = "font-size: 12px; font-family: 'Roboto', sans-serif; color: gray; margin-left: 5px;">Uploaded On- ${date_time}</p>
            <p style = "font-size: 15px; font-family: 'Roboto', sans-serif; color: black; margin-left: 5px;">Scheduled Date- ${due_date}</p>
            <p class="text" style = "margin: 5px; font-family: 'Roboto', sans-serif; font-size: 16px;">${text}</p>
            <div style="display: flex;">
            <p style="color: red; font-weight: bold; margin-left: 5px;">Important</p>
            <p style="color: green; font-weight: bold; margin-left: 5px;">Urgent</p>
            </div>
            <button class="button" id="delete_note" onclick=deleteNote(${index})>Delete Note</button>
            </div>
            `
        }
    };
}
    
/*
    Display all Notes
*/

const displayAllNotes = () => {
    let allNotes = JSON.parse(localStorage.getItem("notes"));
    if (allNotes == null) {
        document.getElementById("emptyNotes").style.display = "block";
    } else {
        document.getElementById("emptyNotes").style.display = "none";
        for (let index = 0; index < allNotes.length; index++) {
            let element = JSON.parse(allNotes[index]);
            note(element.noteTitle, element.noteText, element.date, element.important, element.urgent, element.due_date, element.radio1, element.radio2, element.radio3, index);
        }
    }
}


/*
Add a Note
*/
const addNote = () => {
    let noteTitle = document.getElementById("noteTitle").value.trim();
    let noteText = document.getElementById("noteText").value.trim();
    let important = document.getElementById("note-imp").checked;
    let urgent = document.getElementById("note-urgent").checked;
    let date_time = document.getElementById("date_time").value;
    let radio1 = document.getElementById("note1").checked;
    let radio2 = document.getElementById("event1").checked;
    let radio3 = document.getElementById("meet1").checked;

    var strTime = new Date().toLocaleDateString()+" "+ new Date().toLocaleTimeString();


    let allNotes = localStorage.getItem("notes");

    // Validators
    if (noteTitle == null ||
        noteTitle == undefined ||
        noteTitle.length == 0 ||
        noteText == null ||
        noteTitle == undefined ||
        noteText.length == 0
    ) {
        alert("Note's Title or Text may not be empty");
        return;
    }

    document.getElementById("noteTitle").value = "";
    document.getElementById("noteText").value = "";
    $('#note-imp').prop('checked',false);
    $('#note-urgent').prop('checked',false);
    $('#note1').prop('checked',false);
    $('#event1').prop('checked',false);
    $('#meet1').prop('checked',false);


    if (allNotes == null || allNotes == undefined) {
        let noteData = {
            noteTitle: noteTitle,
            noteText: noteText,
            date: strTime,
            important: important,
            urgent: urgent,
            due_date: date_time,
            radio1: radio1,
            radio2: radio2,
            radio3: radio3
        }
        let notesArray = [];
        notesArray.push(JSON.stringify(noteData));
        localStorage.setItem("notes", JSON.stringify(notesArray));
    }

    else {
        let noteData = {
            noteTitle: noteTitle,
            noteText: noteText,
            date: strTime,
            important: important,
            urgent: urgent,
            due_date: date_time,
            radio1: radio1,
            radio2: radio2,
            radio3: radio3
        }
        let notesArray = JSON.parse(localStorage.getItem("notes"));
        notesArray.push(JSON.stringify(noteData));
        localStorage.setItem("notes", JSON.stringify(notesArray));
    }

    document.getElementById("notes").innerHTML = "";
    displayAllNotes();
}



/*
    Delete a Note
*/

const deleteNote = (index) => {
    let allNotes = JSON.parse(localStorage.getItem("notes"));
    allNotes.splice(index, 1);
    if (allNotes != null && allNotes != undefined && allNotes.length != 0) {
        localStorage.setItem("notes", JSON.stringify(allNotes));
    }
    else {
        localStorage.removeItem("notes");
    }

    document.getElementById("notes").innerHTML = "";
    displayAllNotes();
}

/*
    Search a Note
*/

document.getElementById("notes_search").addEventListener("input", () => {

    let inputVal = document.getElementById("notes_search").value.toLowerCase();
    let allcards = document.getElementsByClassName("noteCard");

    Array.from(allcards).forEach(element => {
        const cardTitle = element.getElementsByTagName("h2")[0].innerText.toLowerCase();
        const cardContent = element.getElementsByClassName("text")[0].innerText.toLowerCase();
        if (cardContent.includes(inputVal) || cardTitle.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    });

})

document.getElementById("addNote").addEventListener("click", addNote);
window.onload = displayAllNotes();

function displayDueDate() {
    $('#due_date').css("visibility", "visible");
};
function removeDueDate() {
    $('#due_date').css("visibility", "hidden");
};


function onClickMenu() {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");

    document.getElementById("menu-bg").classList.toggle("change-bg");
}
