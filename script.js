function calculatePlastic() {
    // Plastic weights in grams
    const weights = {
        bottles: 20,
        bags: 5,
        wrappers: 10,
        straws: 2,
        cups: 12,
        boxes: 30
    };

    // Get user input
    const bottles = parseInt(document.getElementById("bottles").value) || 0;
    const bags = parseInt(document.getElementById("bags").value) || 0;
    const wrappers = parseInt(document.getElementById("wrappers").value) || 0;
    const straws = parseInt(document.getElementById("straws").value) || 0;
    const cups = parseInt(document.getElementById("cups").value) || 0;
    const boxes = parseInt(document.getElementById("boxes").value) || 0;

    // Calculate total weight
    const totalWeight =
        bottles * weights.bottles +
        bags * weights.bags +
        wrappers * weights.wrappers +
        straws * weights.straws +
        cups * weights.cups +
        boxes * weights.boxes;

    // Display results
    const totalKg = (totalWeight / 1000).toFixed(2);
    const oceanWaste = (totalKg * 0.1).toFixed(2);

    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `
            <h3>Daily Plastic Pollution Report</h3>
            <p>Total Plastic Waste Generated: ${totalWeight} grams</p>
            <p>Equivalent to: ${totalKg} kilograms</p>
            <p>Potential Ocean Pollution: ${oceanWaste} kilograms</p>
            <p><strong>Tip:</strong> Reduce your use of single-use plastics to minimize your impact!</p>
        `;

    // Show the solution section
    const solutionDiv = document.getElementById("solution");
    solutionDiv.style.display = "block";
}