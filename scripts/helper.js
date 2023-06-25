export const createElement = (tagName, attribute) => {
    const elem = document.createElement(tagName);
    Object.assign(elem, attribute);
    return elem;
}

export const pluralizeYears = (age) => {
    let years = age % 100;

    if (years >= 11 && years <= 19) {
        return 'лет'
    } else {
        let lastDigit = years % 10;
        if (lastDigit === 1) {
            return 'год';
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            return 'года'
        } else {
            return 'лет'
        }
    }
};

export const handleImageFileSelection = (input, image) => {

}

export const createSelectDate = (SelectDay, SelectMonth, SelectYear, birthdate) => {
    for (let day = 0; day <= 31; day++) {
        const option = document.createElement('option');
        option.value = day ? day : ''
        option.text = day ? day : ''
        SelectDay.append(option)
    }

    const months = [
        '', 'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
    ]

    for (let i = 0; i < months.length; i++) {
        const option = document.createElement('option');
        option.value = i
        option.text = months[i]
        SelectMonth.append(option)
    }

    const currentYear = new Date().getFullYear();

    const optionYear = document.createElement('option');
    optionYear.value = ''
    optionYear.text = ''
    SelectYear.append(optionYear)

    for (let year = currentYear; year >= currentYear - 100; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.text = year;
        SelectYear.append(option)
    }

    if (birthdate) {
        const [day, month, year] = birthdate.split('/');
        SelectDay.value = day;
        SelectMonth.value = month;
        SelectYear.value = year;
    }

    [SelectDay, SelectMonth, SelectYear].forEach(dateSelect => {
        dateSelect.addEventListener('change', ({currentTarget}) => {
            currentTarget.blur();
        })
    })
};
