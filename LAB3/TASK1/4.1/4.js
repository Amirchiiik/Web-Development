let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sum(obj){
    let summa = 0;
    for (key in obj) {
        summa += obj[key];
    }
    return summa;
}

alert(sum(salaries))