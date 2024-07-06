// Button color change
document.getElementById('colorButton').addEventListener('click', function() {
    this.style.backgroundColor = this.style.backgroundColor === 'blue' ? 'green' : 'blue';
});

// Greeting message based on time
function showGreeting() {
    const currentHour = new Date().getHours();
    let greeting;
    if (currentHour < 12) {
        greeting = 'Good Morning!';
    } else if (currentHour < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }
    alert(greeting);
}

// Basic calculator
function calculateSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sum = num1 + num2;
    document.getElementById('result').textContent = `The result is: ${sum}`;
}
