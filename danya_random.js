const button = document.querySelector('.unit__button');
const image = document.querySelector('.unit__photo');

const getImg = () => {
    const randomNum = Math.floor(Math.random() * 10000) + 1;
    const innerRandom = Math.floor(Math.random() * 2) + 1;

    if (randomNum === 1) {
        return innerRandom === 1 
            ? '/img/Danya_Unit_3_2.jpg'
            : '/img/Danya_Unit_3.jpg';
    }

    if (randomNum >= 2 && randomNum <= 10) {
        return innerRandom === 1 
            ? '/img/Danya_Unit_4_3.jpg'
            : '/img/Danya_Unit_4.jpg';
    }

    if (randomNum >= 11 && randomNum <= 100) {
        return innerRandom === 1 
        ? '/img/Danya_Unit_4_1.jpg'
        : '/img/Danya_Unit_4_2.jpg';
    }
    
    if (randomNum >= 101 && randomNum <= 200) {
        return innerRandom === 1 
        ? '/img/Danya_Unit_2.jpg'
        : '/img/Danya_Unit_2_2.jpg';
    }
    
    if (randomNum >= 201 && randomNum <= 500) {
        return innerRandom === 1 
        ? '/img/Danya_Unit_2.jpg'
        : '/img/Danya_Unit_2_2.jpg';
    }

    if (randomNum >= 501 && randomNum <= 2000) {
        return innerRandom === 1 
        ? '/img/Danya_Unit_2_1.jpg'
        : '/img/Danya_Unit_2_3.jpg';
    }

    if (randomNum >= 2001 && randomNum <= 5000) {
        return innerRandom === 1 
        ? '/img/Danya_Unit_1.jpg'
        : '/img/Danya_Unit_1_2.jpg';
    }

    return innerRandom === 1 
    ? '/img/Danya_Unit_1_1.jpg'
    : '/img/Danya_Unit_1_3.jpg';
}

button.addEventListener('click', () => {
    const source = getImg();
    image.src = source;
})