const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5, 5, 5, 8, 10, 40]

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet]
}

console.log(valoresUnicos(meuArray))