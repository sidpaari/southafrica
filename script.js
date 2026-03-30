document.getElementById('changeText').addEventListener('click', function() {
    const facts = [
        "South Africa has three capital cities: Pretoria (executive), Cape Town (legislative), and Bloemfontein (judicial).",
        "The country is home to the Big Five animals: lion, elephant, buffalo, leopard, and rhinoceros.",
        "Nelson Mandela was South Africa's first Black president, serving from 1994 to 1999."
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('fact').textContent = randomFact;
});