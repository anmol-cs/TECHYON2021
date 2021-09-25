const eventName = document.getElementById('event-name');
const category = document.getElementById('category');
const date = document.getElementById('date');
const time = document.getElementById('time');
const instructions = document.getElementById('instructions');
const coordinator1 = document.getElementById('coordinator-1');
const coordinator2 = document.getElementById('coordinator-2');
const coordinator1Phone = document.getElementById('coordinator-1-phone');
const coordinator2Phone = document.getElementById('coordinator-2-phone');



function getQueryString() {
    var result = {}, queryString = location.search.slice(1),
        re = /([^&=]+)=([^&]*)/g, m;
    while (m = re.exec(queryString)) {
        result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return result;
}


$.getJSON("../data/eventsData.json", function (data) {
    var param = getQueryString()["event"];
    console.log(param);

    if (data[param] != undefined) {
        console.log(data[param]["event-name"]);

        eventName.innerText = data[param]["event-name"];
        category.innerText = data[param]["department"];
        date.innerText = data[param]["date"];
        time.innerText = data[param]["time"];

        let ruleText = "";

        // data[param]["rules"].forEach((rule) => {
        //     ruleText = ruleText.concat(`<p> ${rule} </p>`)
        //     instructions.innerHTML = ruleText;
        // })

        for (var name in data[param]["rules"]) {
            console.log(name, data[param]["rules"][name]);
            // data[param]["rules"][name].forEach((element) => )
            ruleText = ruleText.concat(`<h3"> ${name} </h3> <p> ${data[param]["rules"][name].forEach(el => {
                return (`<ul> ${el}</ul>`)
            })}</p>`);
            instructions.innerHTML = ruleText;
        }

        coordinator1.innerText = data[param]["event-coordinators"][0].name;
        coordinator2.innerText = data[param]["event-coordinators"][1].name;
        coordinator1Phone.href = "https://wa.me/91" + data[param]["event-coordinators"][0]["phone-number"];
        coordinator2Phone.href = "https://wa.me/91" + data[param]["event-coordinators"][1]["phone-number"];

    }

    else {
        console.log("undefined");
    }

});
