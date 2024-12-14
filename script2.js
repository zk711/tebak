let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submit').addEventListener('click', function() {
    const userGuess = Number(document.getElementById('guess').value);
    attempts++;

    if (userGuess === randomNumber) {
        document.getElementById('result').textContent = `Selamat! Anda menebak angka ${randomNumber} dengan ${attempts} percobaan.`;
        document.getElementById('restart').style.display = 'block';
        document.getElementById('submit').disabled = true;
    } else if (userGuess < randomNumber) {
        document.getElementById('result').textContent = 'Tebakan Anda terlalu rendah. Coba lagi!';
    } else {
        document.getElementById('result').textContent = 'Tebakan Anda terlalu tinggi. Coba lagi!';
    }
});

document.getElementById('restart').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('result').textContent = '';
    document.getElementById('guess').value = '';
    document.getElementById('submit').disabled = false;
    this.style.display = 'none';
});