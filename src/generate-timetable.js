fetch("src/timetable.json")
    .then((response) => response.json())
    .then((data) => {
        extract(data);
    });
function extract(data) {
    // console.log(data.Day.length);
    const Timetable = data.Timetable;
    for (let index = 0; index < Timetable.length; index++) {
        const Day = Timetable[index].Day;
        const Subject = Timetable[index].Subject;

        // console.log(Day);
        var main_div = generate_day(Day);
        for (let index = 0; index < Subject.Name.length; index++) {
            const SubjectName = Subject.Name[index];
            const Lecturer = Subject.Lecturer[index];
            const Time = Subject.Time[index];

            generate_timetable(main_div, SubjectName, Lecturer, Time);
        }
    }
}

function generate_day(Day) {
    var main_div = document.createElement("div");
    var day = document.createElement("span");
    day.className = "bg-gradient-to-r from-pink-600 to-blue-600 p-2 my-3 rounded-md shadow-inner";
    day.appendChild(document.createTextNode(Day));
    main_div.appendChild(day);
    return main_div;
}

function generate_timetable(main_div, subject, lecturer, time) {
    var span_day;
    // console.log(lecturer);
}

/* 
<div
    class="bg-gradient-to-r from-pink-600 to-blue-600 p-2 my-3 rounded-md shadow-inner"
>
    <!-- Name of the day -->
    <span class="font-medium px-2">Monday</span>
    <div>
        <!-- Name of subject and time -->
        <div class="bg-white text-black p-2 my-2 rounded-md bg-opacity-50 text-xl">
            <h3 class="font-bold">ICT500</h3>
            <p class="pl-4 oldstyle-nums font-medium">10.00 am ~ 11.50 am</p>
            <p class="mt-3 pr-2 text-sm font-medium text-right underline">
                Sir Muhammad Hamiz Mohd Radzi
            </p>
        </div>
    </div>
</div>
*/
