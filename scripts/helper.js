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

export const handleImageFileSelection = (inputFile, image, inputHidden) => {
    const handleFileInputChange = e => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                image.src = reader.result;
                if (inputHidden) {
                    inputHidden.value = reader.result
                }
            });

            reader.readAsDataURL(file);
        }
    }

    inputFile.addEventListener('change', handleFileInputChange)
}

export const createSelectDate = (SelectDay, SelectMonth, SelectYear, birthdate) => {
    for (let day = 0; day <= 31; day++) {
        const option = document.createElement('option');
        option.value = day ? day : '';
        option.text = day ? day : '';
        SelectDay.append(option)
    }

    const months = [
        '', 'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
    ]

    for (let i = 0; i < months.length; i++) {
        const option = createElement('option');
        option.value = i;
        option.text = months[i];
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
        option.text = year
        SelectYear.append(option)
    }

    if (birthdate) {
        const [month, day, year] = birthdate.split('/');
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

export const createOptionCurrency = (select, currency) => {
    const currencies = ['RUB', 'USD', 'EUR', 'GBP'];

    for (let i = 0; i < currencies.length; i++) {
        const option = createElement('option');
        option.value = currencies[i];
        option.text = currencies[i]
        select.append(option)
    }

    select.value = currency ?? currencies[0];
};
