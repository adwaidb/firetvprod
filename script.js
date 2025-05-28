document.addEventListener("DOMContentLoaded", () => {
    const isManager = true; // Placeholder: toggle to switch view

    if (isManager) {
        document.getElementById("manager-section").classList.remove("hidden");
    } else {
        document.getElementById("employee-section").classList.remove("hidden");
    }

    // Sample: You can replace this with Excel/SharePoint data load
    const employeeData = {
        name: "John Doe",
        date: "2025-05-23",
        overallWorkingMin: 476.79,
        actualTargetMin: 470,
        prodPercent: "101.44%",
    };

    const managerData = [
        { user: "John Doe", overall: 476.79, prod: "101.44%" },
        { user: "Jane Smith", overall: 506.7, prod: "105.56%" },
    ];

    document.getElementById("employee-data").innerHTML = `
        <p><strong>Name:</strong> ${employeeData.name}</p>
        <p><strong>Date:</strong> ${employeeData.date}</p>
        <p><strong>Overall Working Min:</strong> ${employeeData.overallWorkingMin}</p>
        <p><strong>Actual Target Min:</strong> ${employeeData.actualTargetMin}</p>
        <p><strong>Prod %:</strong> ${employeeData.prodPercent}</p>
    `;

    const managerHTML = managerData.map(item => `
        <p><strong>${item.user}</strong>: ${item.overall} min | Prod: ${item.prod}</p>
    `).join("");

    document.getElementById("manager-data").innerHTML = managerHTML;
});
