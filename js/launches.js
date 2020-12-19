// FETCH API FOR UPCOMING LAUNCHES

// const url = "https://api.spacexdata.com/v3/launches/upcoming";

//Fetch json API

// api url 
const api_url =
    "https://api.spacexdata.com/v3/launches/upcoming";

// Defining async function 
async function getapi(url) {

    // Storing response 
    const response = await fetch(url);

    // Storing data in form of JSON 
    var data = await response.json();
    console.log(data);

    show(data);
}
// Calling that async function 
getapi(api_url);

// Function to define innerHTML for HTML Div
function show(data) {
    let tab =
        `  `;

    // Loop to access all Arrays
    for (let r of data) {
        tab += `  <div class="lcard">

    <div class="leftarea">
        <img src="${r.links.mission_patch}" alt="image badge spacerocket">
    </div>

    <div class="rarea">
        <div class="toparea">
            <h3 class="h-1">${r.mission_name}</h3>
            <p>Flight no:   ${r.flight_number} </p>
        
        </div>

        <div class="botarea">
            <img src="svg/calendar-week-solid.svg" alt="icon calender">
            <p class="pdate">${r.launch_date_local}</p>
        </div>
        <div class="botarea">
            <img src="svg/space-shuttle-solid.svg" alt="icon space rocket">
            <p class="pdate">${r.rocket.rocket_id}</p>
        </div>
        <div class="botarea">
            <img src="svg/map-marker-alt-solid.svg" alt="icon space rocket">
            <p class="pdate">${r.launch_site.site_id} ,${r.launch_site.site_name},${r.launch_site.site_name_long} <br></p>
        </div>
    </div>
</div>
   
`;
    }
    // Setting innerHTML as tab variable 
    document.getElementById("flightno").innerHTML = tab;
}