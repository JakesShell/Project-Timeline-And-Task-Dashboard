const projectSummary = [
    { title: "Project Name", value: "Website Redesign Project" },
    { title: "Organization", value: "VanRooyen, Ltd." },
    { title: "Project Start Date", value: "October 19, 2024" },
    { title: "Display Week", value: "Week 1" }
];

const phases = [
    {
        title: "Initiation Phase",
        text: "Define goals, conduct studies, establish communication, develop the project charter, and set up the project team."
    },
    {
        title: "Planning And Design Phase",
        text: "Create the project schedule, identify deliverables, develop the budget, define scope, and identify risks."
    },
    {
        title: "Execution Phase",
        text: "Execute the plan, monitor progress, manage resources, and provide regular updates."
    },
    {
        title: "Testing And Validation Phase",
        text: "Test deliverables and validate outcomes against project objectives."
    },
    {
        title: "Evaluation Phase",
        text: "Track expenses, evaluate progress, address risks, and gather stakeholder feedback."
    }
];

const tasks = [
    { task: "Define Goals", owner: "Gokce Aslan", phase: "Initiation", progress: 50, start: "10/19/24", end: "10/22/24" },
    { task: "Conduct Studies", owner: "Hayden Cook", phase: "Initiation", progress: 60, start: "10/22/24", end: "10/24/24" },
    { task: "Establish Comms", owner: "Jens Martensson", phase: "Initiation", progress: 50, start: "10/24/24", end: "10/28/24" },
    { task: "Develop Charter", owner: "Nuria Acevedo", phase: "Initiation", progress: 25, start: "10/28/24", end: "11/02/24" },
    { task: "Set Up Team", owner: "Olivia Wilson", phase: "Initiation", progress: 0, start: "10/23/24", end: "10/25/24" },
    { task: "Create Schedule", owner: "Gokce Aslan", phase: "Planning And Design", progress: 50, start: "10/24/24", end: "10/28/24" },
    { task: "Identify Deliverables", owner: "Hayden Cook", phase: "Planning And Design", progress: 50, start: "10/26/24", end: "10/31/24" },
    { task: "Develop Budget", owner: "Jens Martensson", phase: "Planning And Design", progress: 0, start: "10/31/24", end: "11/03/24" },
    { task: "Define Scope", owner: "Nuria Acevedo", phase: "Planning And Design", progress: 0, start: "10/31/24", end: "11/02/24" },
    { task: "Identify Risks", owner: "Olivia Wilson", phase: "Planning And Design", progress: 0, start: "10/31/24", end: "11/03/24" },
    { task: "Execute Tasks", owner: "Gokce Aslan", phase: "Execution", progress: 50, start: "11/03/24", end: "11/08/24" },
    { task: "Monitor Progress", owner: "Hayden Cook", phase: "Execution", progress: 60, start: "11/09/24", end: "11/13/24" },
    { task: "Manage Resources", owner: "Jens Martensson", phase: "Execution", progress: 50, start: "11/14/24", end: "11/19/24" },
    { task: "Provide Updates", owner: "Nuria Acevedo", phase: "Execution", progress: 25, start: "11/20/24", end: "11/24/24" },
    { task: "Testing And Validation", owner: "Olivia Wilson", phase: "Testing And Validation", progress: 25, start: "11/14/24", end: "11/18/24" },
    { task: "Track Expenses", owner: "Hayden Cook", phase: "Evaluation", progress: 25, start: "11/08/24", end: "11/12/24" },
    { task: "Evaluate Progress", owner: "Jens Martensson", phase: "Evaluation", progress: 50, start: "11/13/24", end: "11/16/24" },
    { task: "Address Risks", owner: "Nuria Acevedo", phase: "Evaluation", progress: 60, start: "11/10/24", end: "11/13/24" },
    { task: "Gather Feedback", owner: "Olivia Wilson", phase: "Evaluation", progress: 50, start: "11/12/24", end: "11/17/24" }
];

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function buildSummary() {
    const summaryGrid = document.getElementById("summaryGrid");
    summaryGrid.innerHTML = projectSummary.map(item => `
        <article class="card">
            <h3>${item.title}</h3>
            <p>${item.value}</p>
        </article>
    `).join("");
}

function buildPhases() {
    const phaseGrid = document.getElementById("phaseGrid");
    phaseGrid.innerHTML = phases.map(item => `
        <article class="phase-card">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        </article>
    `).join("");
}

function buildTasks() {
    const taskTableBody = document.getElementById("taskTableBody");
    taskTableBody.innerHTML = tasks.map(task => `
        <tr>
            <td>${task.task}</td>
            <td>${task.owner}</td>
            <td>${task.phase}</td>
            <td class="progress-cell">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${task.progress}%"></div>
                </div>
                <div class="progress-label">${task.progress}%</div>
            </td>
            <td>${task.start}</td>
            <td>${task.end}</td>
        </tr>
    `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    buildSummary();
    buildPhases();
    buildTasks();
});
