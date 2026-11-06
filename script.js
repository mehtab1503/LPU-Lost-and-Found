
let reports = [];

const form = document.getElementById("reportForm");
const itemList = document.getElementById("itemList");
const filter = document.getElementById("filter");

form.addEventListener("submit", function(event) {
event.preventDefault();

const item = {
name: document.getElementById("itemName").value,
category: document.getElementById("category").value,
type: document.getElementById("reportType").value,
location: document.getElementById("location").value,
date: document.getElementById("date").value,
description: document.getElementById("description").value,
contact: document.getElementById("contact").value
};

reports.push(item);

form.reset();
displayReports();
alert("Report submitted successfully!");
});

function displayReports() {
itemList.innerHTML = "";

const selectedFilter = filter.value;

const filteredReports = reports.filter(function(item) {
return selectedFilter === "All" || item.type === selectedFilter;
});

if (filteredReports.length === 0) {
itemList.innerHTML = "<p>No reports found.</p>";
return;
}

filteredReports.forEach(function(item) {
const card = document.createElement("div");

card.style.border = "1px solid #ccc";
card.style.padding = "15px";
card.style.marginTop = "12px";
card.style.borderRadius = "5px";

card.innerHTML = `
<h3>${item.name}</h3>
<p><b>Type:</b> ${item.type}</p>
<p><b>Category:</b> ${item.category}</p>
<p><b>Location:</b> ${item.location}</p>
<p><b>Date:</b> ${item.date}</p>
<p><b>Description:</b> ${item.description}</p>
<p><b>Contact:</b> ${item.contact}</p>
`;

itemList.appendChild(card);
});
}

filter.addEventListener("change", displayReports);
