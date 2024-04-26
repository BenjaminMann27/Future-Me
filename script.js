document.addEventListener('DOMContentLoaded', function () {
    const changeColorBtn = document.getElementById('changeColorBtn');
    const heroSection = document.querySelector('.hero');

    changeColorBtn.addEventListener('click', function () {
        const randomColor = generateRandomColor();
        heroSection.style.backgroundColor = randomColor;
    });

    function generateRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
