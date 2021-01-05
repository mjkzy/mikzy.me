function dolookupfunc() {
    var usernamestr = document.querySelector(`#username-txt`).value;
    var username = usernamestr.toLowerCase();
    var uidstr1 = document.querySelector(`#uid-txt`);

    var alertContent = "Getting information for " + usernamestr + "...";
    halfmoon.initStickyAlert ({
        alertType: "alert-primary",
        content: alertContent,      // Required, main content of the alert, type: string (can contain HTML)
        title: "Searching"      // Optional, title of the alert, default: "", type: string
    });

    dolookup(username, uidstr1);
}

async function dolookup(person, uidstr) {
    var url = `https://forum.plutonium.pw/api/user/username/${person}`;
    var response = await fetch(url, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': 'https://mikzy.me'
        }
    })
    .then(function(res) {
        return res.json();
    });
    //console.log(result);
}

function isJsonWork(response) {

}