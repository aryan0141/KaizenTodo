

/*
DOM for a single Note
*/
// ---------------------------------------------------------Notes Javascript------------------------------------------------------------
let note = (title, text,date_time, important, urgent, index) => {
    // Neither important nor urgent
    if(important==false && urgent==false){
        document.getElementById("notes").innerHTML += `
        <div class="noteCard" style = "border-radius: 5px; margin: 7px; padding: 10px; background-color: white; border: none;">
        <h2 style = "margin: 5px 5px 0px; font-size: 28px; font-family: 'Baloo Bhai 2', cursive;">${title}</h2>
        <p style = "font-size: 12px; font-family: 'Roboto', sans-serif; color: gray; margin-left: 5px;">Uploaded On- ${date_time}</p>
        <p class="text" style = "margin: 5px; font-family: 'Roboto', sans-serif; font-size: 16px;">${text}</p>
        <button class="button" id="delete_note" onclick=deleteNote(${index})>Delete Note</button>
        </div>
        `
    }

    // Not important but urgent
    if(important==false && urgent==true){
        document.getElementById("notes").innerHTML += `
        <div class="noteCard" style = "border-radius: 5px; margin: 7px; padding: 10px; background-color: white; border: none;">
        <h2 style = "margin: 5px 5px 0px; font-size: 28px; font-family: 'Baloo Bhai 2', cursive;">${title}</h2>
        <p style = "font-size: 12px; font-family: 'Roboto', sans-serif; color: gray; margin-left: 5px;">Uploaded On- ${date_time}</p>
        <p class="text" style = "margin: 5px; font-family: 'Roboto', sans-serif; font-size: 16px;">${text}</p>
        <p style="color: green; font-weight: bold; margin-left: 5px;">Urgent</p>
        <button class="button" id="delete_note" onclick=deleteNote(${index})>Delete Note</button>
        </div>
        `
    }

    // Important but not urgent
    if(important==true && urgent==false){
        document.getElementById("notes").innerHTML += `
        <div class="noteCard" style = "border-radius: 5px; margin: 7px; padding: 10px; background-color: white; border: none;">
        <h2 style = "margin: 5px 5px 0px; font-size: 28px; font-family: 'Baloo Bhai 2', cursive;">${title}</h2>
        <p style = "font-size: 12px; font-family: 'Roboto', sans-serif; color: gray; margin-left: 5px;">Uploaded On- ${date_time}</p>
        <p class="text" style = "margin: 5px; font-family: 'Roboto', sans-serif; font-size: 16px;">${text}</p>
        <p style="color: red; font-weight: bold; margin-left: 5px;">Important</p>
        <button class="button" id="delete_note" onclick=deleteNote(${index})>Delete Note</button>
        </div>
        `
    }

    // Urgent and important
    if(important==true && urgent==true){
        document.getElementById("notes").innerHTML += `
        <div class="noteCard" style = "border-radius: 5px; margin: 7px; padding: 10px; background-color: white; border: none;">
        <h2 style = "margin: 5px 5px 0px; font-size: 28px; font-family: 'Baloo Bhai 2', cursive;">${title}</h2>
        <p style = "font-size: 12px; font-family: 'Roboto', sans-serif; color: gray; margin-left: 5px;">Uploaded On- ${date_time}</p>
        <p class="text" style = "margin: 5px; font-family: 'Roboto', sans-serif; font-size: 16px;">${text}</p>
        <p style="color: red; font-weight: bold; margin-left: 5px;">Important</p>
        <p style="color: green; font-weight: bold; margin-left: 5px;">Urgent</p>
        <button class="button" id="delete_note" onclick=deleteNote(${index})>Delete Note</button>
        </div>
        `
    }

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
            note(element.noteTitle, element.noteText, element.date, element.important, element.urgent, index);
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
    console.log(important);
    console.log(urgent);
    let myDate = new Date();

    var month=new Array();
    month[0]="Jan";
    month[1]="Feb";
    month[2]="Mar";
    month[3]="Apr";
    month[4]="May";
    month[5]="Jun";
    month[6]="Jul";
    month[7]="Aug";
    month[8]="Sep";
    month[9]="Oct";
    month[10]="Nov";
    month[11]="Dec";
    var hours = myDate.getHours();
    var minutes = myDate.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = myDate.getDate()+" "+month[myDate.getMonth()]+" "+myDate.getFullYear()+" "+hours + ':' + minutes + ampm;


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


    if (allNotes == null || allNotes == undefined) {
        let noteData = {
            noteTitle: noteTitle,
            noteText: noteText,
            date: strTime,
            important: important,
            urgent: urgent 
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
            urgent: urgent
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


// -----------------------------------------------------------------Events Javascript------------------------------------------------------


const events = (title, text, date_time, due_date, important, urgent, index) => {
        if(important==false && urgent==false){
            document.getElementById("events").innerHTML += `
            <div class="eventsCard" style = "border-radius: 5px; margin: 7px; padding: 10px; background-color: white; border: none;">
            <h2 style = "margin: 5px 5px 0px; font-size: 28px; font-family: 'Baloo Bhai 2', cursive;">${title}</h2>
            <p style = "font-size: 12px; font-family: 'Roboto', sans-serif; color: gray; margin-left: 5px;">Uploaded On- ${date_time}</p>
            <p style = "font-size: 15px; color: gray; margin: 5px;" ><b>Scheduled Date-</b> ${due_date}</p>
            <p class="event-text" style = "margin: 5px; font-family: 'Roboto', sans-serif; font-size: 16px;">${text}</p>
            <button class="button" id="delete_note" onclick=deleteEvent(${index})>Delete Event</button>
            </div>
            `
        }
    
        // Not important but urgent
        if(important==false && urgent==true){
            document.getElementById("events").innerHTML += `
            <div class="eventsCard" style = "border-radius: 5px; margin: 7px; padding: 10px; background-color: white; border: none;">
            <h2 style = "margin: 5px 5px 0px; font-size: 28px; font-family: 'Baloo Bhai 2', cursive;">${title}</h2>
            <p style = "font-size: 12px; font-family: 'Roboto', sans-serif; color: gray; margin-left: 5px;">Uploaded On- ${date_time}</p>
            <p style = "font-size: 15px; color: gray; margin: 5px;" ><b>Scheduled Date-</b> ${due_date}</p>
            <p class="event-text" style = "margin: 5px; font-family: 'Roboto', sans-serif; font-size: 16px;">${text}</p>
            <p style="color: green; font-weight: bold; margin-left: 5px;">Urgent</p>
            <button class="button" id="delete_note" onclick=deleteEvent(${index})>Delete Event</button>
            </div>
            `
        }
    
        // Important but not urgent
        if(important==true && urgent==false){
            document.getElementById("events").innerHTML += `
            <div class="eventsCard" style = "border-radius: 5px; margin: 7px; padding: 10px; background-color: white; border: none;">
            <h2 style = "margin: 5px 5px 0px; font-size: 28px; font-family: 'Baloo Bhai 2', cursive;">${title}</h2>
            <p style = "font-size: 12px; font-family: 'Roboto', sans-serif; color: gray; margin-left: 5px;">Uploaded On- ${date_time}</p>
            <p style = "font-size: 15px; color: gray; margin: 5px;" ><b>Scheduled Date-</b> ${due_date}</p>
            <p class="event-text" style = "margin: 5px; font-family: 'Roboto', sans-serif; font-size: 16px;">${text}</p>
            <p style="color: red; font-weight: bold; margin-left: 5px;">Important</p>
            <button class="button" id="delete_note" onclick=deleteEvent(${index})>Delete Event</button>
            </div>
            `
        }
    
        // Urgent and important
        if(important==true && urgent==true){
            document.getElementById("events").innerHTML += `
            <div class="eventsCard" style = "border-radius: 5px; margin: 7px; padding: 10px; background-color: white; border: none;">
            <h2 style = "margin: 5px 5px 0px; font-size: 28px; font-family: 'Baloo Bhai 2', cursive;">${title}</h2>
            <p style = "font-size: 12px; font-family: 'Roboto', sans-serif; color: gray; margin-left: 5px;">Uploaded On- ${date_time}</p>
            <p style = "font-size: 15px; color: gray; margin: 5px;" ><b>Scheduled Date-</b> ${due_date}</p>
            <p class="event-text" style = "margin: 5px; font-family: 'Roboto', sans-serif; font-size: 16px;">${text}</p>
            <p style="color: red; font-weight: bold; margin-left: 5px;">Important</p>
            <p style="color: green; font-weight: bold; margin-left: 5px;">Urgent</p>
            <button class="button" id="delete_note" onclick=deleteEvent(${index})>Delete Event</button>
            </div>
            `
        }



    }

/*
    Display all Events
*/
const displayAllEvents = () => {
    let allEvents = JSON.parse(localStorage.getItem("events"));
    if (allEvents == null) {
        document.getElementById("emptyEvents").style.display = "block";
    } else {
        document.getElementById("emptyEvents").style.display = "none";
        for (let index = 0; index < allEvents.length; index++) {
            let element = JSON.parse(allEvents[index]);
            events(element.eventTitle, element.eventText, element.date, element.due_date, element.event_imp, element.event_urgent, index);
        }
    }
}


/*
Add a Event
*/

const addEvent = () => {
    let eventTitle = document.getElementById("eventTitle").value.trim();
    let eventText = document.getElementById("eventText").value.trim();
    
    let event_imp = document.getElementById("event-imp").checked;
    let event_urgent = document.getElementById("event-urgent").checked;
    
    // console.log(urgent);
    let myDate = new Date();

    var month=new Array();
    month[0]="Jan";
    month[1]="Feb";
    month[2]="Mar";
    month[3]="Apr";
    month[4]="May";
    month[5]="Jun";
    month[6]="Jul";
    month[7]="Aug";
    month[8]="Sep";
    month[9]="Oct";
    month[10]="Nov";
    month[11]="Dec";

    var hours = myDate.getHours();
    var minutes = myDate.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = myDate.getDate()+" "+month[myDate.getMonth()]+" "+myDate.getFullYear()+" "+hours + ':' + minutes + ampm;

    var event_date_time = document.getElementById("event_date_time").value.trim();
    // console.log(event_date_time);
    // var due_date =  event_date_time.splice(8,2) +" "+ month[event_date_time.splice(5,2)] +" "+ event_date_time.splice(0,4);
    // console.log(due_date);

    let allEvents = localStorage.getItem("events");

    // Validators
    if (eventTitle == null ||
        eventTitle == undefined ||
        eventTitle.length == 0 ||
        eventText == null ||
        eventText == undefined ||
        eventText.length == 0
    ) {
        alert("Note's Title or Text may not be empty");
        return;
    }

    document.getElementById("eventTitle").value = "";
    document.getElementById("eventText").value = "";
    $('#event-imp').prop('checked',false);
    $('#event-urgent').prop('checked',false);
    $('#event_date_time').prop(false);

    if (allEvents == null || allEvents == undefined) {
        let eventData = {
            eventTitle: eventTitle,
            eventText: eventText,
            date: strTime,
            event_imp: event_imp,
            event_urgent: event_urgent,
            due_date: event_date_time
        }
        let eventsArray = [];
        eventsArray.push(JSON.stringify(eventData));
        localStorage.setItem("events", JSON.stringify(eventsArray));
    }

    else {
        let eventData = {
            eventTitle: eventTitle,
            eventText: eventText,
            date: strTime,
            event_imp: event_imp,
            event_urgent: event_urgent,
            due_date: event_date_time 
        }
        let eventsArray = JSON.parse(localStorage.getItem("events"));
        eventsArray.push(JSON.stringify(eventData));
        localStorage.setItem("events", JSON.stringify(eventsArray));
    }

    document.getElementById("events").innerHTML = "";
    displayAllEvents();
}



/*
    Delete a Note
*/

const deleteEvent = (index) => {
    let allEvents = JSON.parse(localStorage.getItem("events"));
    allEvents.splice(index, 1);
    if (allEvents != null && allEvents != undefined && allEvents.length != 0) {
        localStorage.setItem("events", JSON.stringify(allEvents));
    }
    else {
        localStorage.removeItem("events");
    }

    document.getElementById("events").innerHTML = "";
    displayAllEvents();
}

/*
    Search a Event
*/

document.getElementById("events_search").addEventListener("input", () => {

    let inputVal = document.getElementById("events_search").value.toLowerCase();
    let allcards = document.getElementsByClassName("eventsCard");

    Array.from(allcards).forEach(element => {
        const cardTitle = element.getElementsByTagName("h2")[0].innerText.toLowerCase();
        const cardContent = element.getElementsByClassName("event-text")[0].innerText.toLowerCase();
        if (cardContent.includes(inputVal) || cardTitle.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    });

})

document.getElementById("addEvent").addEventListener("click", addEvent);
window.onload = displayAllEvents();


// --------------------------------------------------------Meetings Javascript----------------------------------------------------------


const meet = (title, text,date_time, due_date, important, urgent, index) => {
    // Neither important nor urgent
    if(important==false && urgent==false){
        document.getElementById("meets").innerHTML += `
        <div class="meetCard" style = "border-radius: 5px; margin: 7px; padding: 10px; background-color: white; border: none;">
        <h2 style = "margin: 5px 5px 0px; font-size: 28px; font-family: 'Baloo Bhai 2', cursive;">${title}</h2>
        <p style = "font-size: 12px; font-family: 'Roboto', sans-serif; color: gray; margin-left: 5px;">Uploaded On- ${date_time}</p>
        <p style = "font-size: 15px; color: gray; margin: 5px;" ><b>Scheduled Date-</b> ${due_date}</p>
        <p class="meet-text" style = "margin: 5px; font-family: 'Roboto', sans-serif; font-size: 16px;">${text}</p>
        <button class="button" id="delete_note" onclick=deleteMeet(${index})>Delete Meet</button>
        </div>
        `
    }

    // Not important but urgent
    if(important==false && urgent==true){
        document.getElementById("meets").innerHTML += `
        <div class="meetCard" style = "border-radius: 5px; margin: 7px; padding: 10px; background-color: white; border: none;">
        <h2 style = "margin: 5px 5px 0px; font-size: 28px; font-family: 'Baloo Bhai 2', cursive;">${title}</h2>
        <p style = "font-size: 12px; font-family: 'Roboto', sans-serif; color: gray; margin-left: 5px;">Uploaded On- ${date_time}</p>
        <p style = "font-size: 15px; color: gray; margin: 5px;" ><b>Scheduled Date-</b> ${due_date}</p>
        <p class="meet-text" style = "margin: 5px; font-family: 'Roboto', sans-serif; font-size: 16px;">${text}</p>
        <p style="color: green; font-weight: bold; margin-left: 5px;">Urgent</p>
        <button class="button" id="delete_note" onclick=deleteMeet(${index})>Delete Meet</button>
        </div>
        `
    }

    // Important but not urgent
    if(important==true && urgent==false){
        document.getElementById("meets").innerHTML += `
        <div class="meetCard" style = "border-radius: 5px; margin: 7px; padding: 10px; background-color: white; border: none;">
        <h2 style = "margin: 5px 5px 0px; font-size: 28px; font-family: 'Baloo Bhai 2', cursive;">${title}</h2>
        <p style = "font-size: 12px; font-family: 'Roboto', sans-serif; color: gray; margin-left: 5px;">Uploaded On- ${date_time}</p>
        <p style = "font-size: 15px; color: gray; margin: 5px;" ><b>Scheduled Date-</b> ${due_date}</p>
        <p class="meet-text" style = "margin: 5px; font-family: 'Roboto', sans-serif; font-size: 16px;">${text}</p>
        <p style="color: red; font-weight: bold; margin-left: 5px;">Important</p>
        <button class="button" id="delete_note" onclick=deleteMeet(${index})>Delete Meet</button>
        </div>
        `
    }

    // Urgent and important
    if(important==true && urgent==true){
        document.getElementById("meets").innerHTML += `
        <div class="meetCard" style = "border-radius: 5px; margin: 7px; padding: 10px; background-color: white; border: none;">
        <h2 style = "margin: 5px 5px 0px; font-size: 28px; font-family: 'Baloo Bhai 2', cursive;">${title}</h2>
        <p style = "font-size: 12px; font-family: 'Roboto', sans-serif; color: gray; margin-left: 5px;">Uploaded On- ${date_time}</p>
        <p style = "font-size: 15px; color: gray; margin: 5px;" ><b>Scheduled Date-</b> ${due_date}</p>
        <p class="meet-text" style = "margin: 5px; font-family: 'Roboto', sans-serif; font-size: 16px;">${text}</p>
        <p style="color: red; font-weight: bold; margin-left: 5px;">Important</p>
        <p style="color: green; font-weight: bold; margin-left: 5px;">Urgent</p>
        <button class="button" id="delete_note" onclick=deleteMeet(${index})>Delete Meet</button>
        </div>
        `
    }
}
    
/*
    Display all Meets
*/

const displayAllMeets = () => {
    let allMeets = JSON.parse(localStorage.getItem("meets"));
    if (allMeets == null) {
        document.getElementById("emptyMeets").style.display = "block";
    } else {
        document.getElementById("emptyMeets").style.display = "none";
        for (let index = 0; index < allMeets.length; index++) {
            let element = JSON.parse(allMeets[index]);
            meet(element.meetTitle, element.meetText, element.date, element.due_date, element.meet_imp, element.meet_urgent, index);
        }
    }
}


/*
Add a Meet
*/

const addMeet = () => {
    let meetTitle = document.getElementById("meetTitle").value.trim();
    let meetText = document.getElementById("meetText").value.trim();
    let meet_imp = document.getElementById("meet-imp").checked;
    let meet_urgent = document.getElementById("meet-urgent").checked;
    // console.log(important);
    // console.log(urgent);
    let myDate = new Date();

    var month=new Array();
    month[0]="Jan";
    month[1]="Feb";
    month[2]="Mar";
    month[3]="Apr";
    month[4]="May";
    month[5]="Jun";
    month[6]="Jul";
    month[7]="Aug";
    month[8]="Sep";
    month[9]="Oct";
    month[10]="Nov";
    month[11]="Dec";

    var hours = myDate.getHours();
    var minutes = myDate.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = myDate.getDate()+" "+month[myDate.getMonth()]+" "+myDate.getFullYear()+" "+hours + ':' + minutes + ampm;

    var meet_date_time = document.getElementById("meet_date_time").value.trim();
    let allMeets = localStorage.getItem("meets");

    // Validators
    if (meetTitle == null ||
        meetTitle == undefined ||
        meetTitle.length == 0 ||
        meetText == null ||
        meetTitle == undefined ||
        meetText.length == 0
    ) {
        alert("Meeting's Title or Text may not be empty");
        return;
    }

    document.getElementById("meetTitle").value = "";
    document.getElementById("meetText").value = "";
    $('#meet-imp').prop('checked',false);
    $('#meet-urgent').prop('checked',false);


    if (allMeets == null || allMeets == undefined) {
        let meetData = {
            meetTitle: meetTitle,
            meetText: meetText,
            date: strTime,
            meet_imp: meet_imp,
            meet_urgent: meet_urgent,
            due_date: meet_date_time 
        }
        let meetsArray = [];
        meetsArray.push(JSON.stringify(meetData));
        localStorage.setItem("meets", JSON.stringify(meetsArray));
    }

    else {
        let meetData = {
            meetTitle: meetTitle,
            meetText: meetText,
            date: strTime,
            meet_imp: meet_imp,
            meet_urgent: meet_urgent,
            due_date: meet_date_time
        }
        let meetsArray = JSON.parse(localStorage.getItem("meets"));
        meetsArray.push(JSON.stringify(meetData));
        localStorage.setItem("meets", JSON.stringify(meetsArray));
    }

    document.getElementById("meets").innerHTML = "";
    displayAllMeets();
}



/*
    Delete a Meet
*/

const deleteMeet = (index) => {
    let allMeets = JSON.parse(localStorage.getItem("meets"));
    allMeets.splice(index, 1);
    if (allMeets != null && allMeets != undefined && allMeets.length != 0) {
        localStorage.setItem("meets", JSON.stringify(allMeets));
    }
    else {
        localStorage.removeItem("meets");
    }

    document.getElementById("meets").innerHTML = "";
    displayAllMeets();
}

/*
    Search a Meet
*/

document.getElementById("meets_search").addEventListener("input", () => {

    let inputVal = document.getElementById("meets_search").value.toLowerCase();
    let allcards = document.getElementsByClassName("meetCard");

    Array.from(allcards).forEach(element => {
        const cardTitle = element.getElementsByTagName("h2")[0].innerText.toLowerCase();
        const cardContent = element.getElementsByClassName("meet-text")[0].innerText.toLowerCase();
        if (cardContent.includes(inputVal) || cardTitle.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    });

})

document.getElementById("addMeet").addEventListener("click", addMeet);
window.onload = displayAllMeets();