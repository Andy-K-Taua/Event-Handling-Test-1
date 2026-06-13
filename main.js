// Wait for DOM to be ready

document.addEventListener('DOMContentLoaded', () => {
    const cubeOne = document.getElementById('cubeOne');
    const cubeTwo = document.getElementById('cubeTwo');
    const leftButton = document.getElementById('leftButton');
    const rightButton = document.getElementById('rightButton');

    // Use proper event listeners instead of inline onclick
    leftButton.addEventListener('click', () => {
        cubeTwo.textContent = 'Red';
        cubeTwo.classList.add('active');
        setTimeout(() => cubeTwo.classList.remove('active'), 300);
    });

    rightButton.addEventListener('click', () => {
        cubeOne.textContent = 'Blue';
        cubeOne.classList.add('active');
        setTimeout(() => cubeOne.classList.remove('active'), 300);
    });
});