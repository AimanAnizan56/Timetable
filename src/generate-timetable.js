/* Get JSON data from file */
fetch("src/timetable.json")
    .then((response) => response.json())
    .then((data) => {
        extract(data);
    });

/* Extract JSON */
function extract(data) {
    const Timetable = data.Timetable;
    var repeat = 0;
    /* Outer loop - for day */
    for (let index = 0; index < Timetable.length; index++) {
        /* Assign day:String and Subject:Object */
        const Day = Timetable[index].Day;
        const Subject = Timetable[index].Subject;

        /* Call function -- return DOM nodes*/
        var main_div = generate_day(Day);

        /* Inner Loop - for subject etc. */
        for (let index = 0; index < Subject.Name.length; index++) {
            /* Assign subject details from subject:object */
            const SubjectName = Subject.Name[index];
            const Lecturer = Subject.Lecturer[index];
            const Time = Subject.Time[index];

            /* Call function -- generate subject */
            main_div.appendChild(generate_subject(SubjectName, Lecturer, Time));
        }
        if (repeat == 0) {
            main_div.className =
                "bg-gradient-to-r from-pink-600 to-blue-600 p-2 my-3 mx-3 rounded-md shadow-inner";
            repeat = 1;
        } else if (repeat == 1) {
            main_div.className =
                "bg-gradient-to-r from-blue-600 to-purple-600 p-2 my-3 mx-3 rounded-md shadow-inner";
            repeat = 2;
        } else {
            main_div.className =
                "bg-gradient-to-r from-purple-600 to-pink-600 p-2 my-3 mx-3 rounded-md shadow-inner";
            repeat = 0;
        }

        document.getElementById("output-timetable").appendChild(main_div);
    }
}

/* Function to generate string day from JSON */
function generate_day(Day) {
    var main_div = document.createElement("div");

    /* create span element for day */
    var day = document.createElement("span");
    day.appendChild(document.createTextNode(Day));
    day.className = "font-medium px-2";

    /* Append main div with span and return nodes */
    main_div.appendChild(day);
    return main_div;
}

function generate_subject(subject, lecturer, time) {
    /* create subject code */
    var subjectElem = document.createElement("h3");
    subjectElem.appendChild(document.createTextNode(subject));
    subjectElem.className = "font-bold";

    /* create subject time */
    var timeElem = document.createElement("p");
    timeElem.appendChild(document.createTextNode(time));
    timeElem.className = "pl-4 oldstyle-nums font-medium";

    /* create lecturer name */
    var lectName = document.createElement("p");
    lectName.appendChild(document.createTextNode(lecturer));
    lectName.className = "mt-3 pr-2 text-sm font-medium text-right underline";

    /* create div */
    var innerDiv = document.createElement("div");
    innerDiv.className = "bg-white text-black p-2 my-2 rounded-md bg-opacity-50 text-xl";
    innerDiv.appendChild(subjectElem);
    innerDiv.appendChild(timeElem);
    innerDiv.appendChild(lectName);

    return innerDiv;
}
