interface IMarks {
    readonly id: number,
    brandName: string,
    country: string
}

interface IData {
    [key: string]: {
        group: string,
        children: IMarks[]
    }
}

let selector: HTMLElement = document.getElementById('sel1')!
let catalog: HTMLElement = document.getElementById('catalog')!

let marks: IMarks[] = [
    {
        id: 1, brandName: 'Audi', country: 'EU',
    },
    {
        id: 2, brandName: 'Bmw', country: 'CH',
    },
    {
        id: 3, brandName: 'Chery', country: 'DE'
    },
    {
        id: 4, brandName: 'Chevrolet', country: 'CO'
    },
    {
        id: 5, brandName: 'Chrysler', country: 'CO'
    },
    {
        id: 6, brandName: 'Citroen', country: 'DE'
    },
    {
        id: 7, brandName: 'Daewoo', country: 'EU'
    },
    {
        id: 8, brandName: 'Dodge', country: 'DE'
    },
    {
        id: 9, brandName: 'Extreme moto', country: 'DE'
    },
    {
        id: 10, brandName: 'Fiat', country: 'DE'
    },
    {
        id: 11, brandName: 'Ford', country: 'EU'
    },
    {
        id: 12, brandName: 'Geely', country: 'CH'
    },
    {
        id: 13, brandName: 'Great Wall', country: 'DE'
    },
    {
        id: 14, brandName: 'Haval', country: 'DE'
    },
    {
        id: 15, brandName: 'Hino', country: 'EU'
    },
    {
        id: 16, brandName: 'Honda', country: 'DE'
    },
    {
        id: 17, brandName: 'Hyundai', country: 'EU'
    },
    {
        id: 18, brandName: 'Infiniti', country: 'CH'
    },
    {
        id: 19, brandName: 'Jaguar', country: 'CO'
    },
    {
        id: 20, brandName: 'Kia', country: 'CH'
    },
    {
        id: 21, brandName: 'Land Rover', country: 'DE'
    },
    {
        id: 22, brandName: 'Lexus', country: 'JAP'
    },
    {
        id: 23, brandName: 'Mazda', country: 'DE'
    },
    {
        id: 24, brandName: 'Mercedes-Benz', country: 'DE'
    },
    {
        id: 25, brandName: 'Mitsubishi', country: 'DE'
    },
    {
        id: 26, brandName: 'Nissan', country: 'JAP'
    },
    {
        id: 27, brandName: 'Opel', country: 'DE'
    },
    {
        id: 28, brandName: 'Peugeot', country: 'DE'
    },
    {
        id: 29, brandName: 'Porsche', country: 'JAP'
    },
    {
        id: 30, brandName: 'Renault', country: 'DE'
    }

]

const getFilteredMarks = (marks: IMarks[], e: Event): IMarks[] => {
    const target = <HTMLSelectElement>e.target
    switch (target.value) {
        case 'all':
            return marks;

        case 'DE':
            return marks = marks.filter(item => item.country === target.value);

        case 'JAP':
            return marks = marks.filter(item => item.country === target.value);

        case 'CH':
            return marks = marks.filter(item => item.country === target.value);

        case 'UA':
            return marks = marks.filter(item => item.country === target.value);

        default:
            return marks
    }
}

const getBrandsGrouped = (data: IMarks[]): IData[] => {
    let dataGroped = data.reduce((r, e) => {
        let group = e.brandName[0]
        if (!r[group]) r[group] = {group, children: [e]}
        else r[group].children.push(e)
        return r
    }, [])
    return dataGroped
}

const renderContent = (marks: IMarks[], e?:Event): void => {
    let filteredMarks;

    if (catalog){
        catalog.innerHTML = ''
    }

    e ? filteredMarks = getFilteredMarks(marks, e) : filteredMarks = marks

    let data = getBrandsGrouped(filteredMarks);

    for (let key in data) {
        let div = document.createElement('div')
        div.innerHTML += `<b>${data[key].group}</b>`

        for (let j in data[key].children) {
            div.innerHTML += `<div class="row d-flex flex-column"><a href="#">${data[key].children[j].brandName}</a></div>`;
        }

        if (catalog) {
            catalog.innerHTML += div.innerHTML
        }
    }
}


selector.addEventListener('change', (e: Event): void => {
    renderContent(marks, e)
})

renderContent(marks)