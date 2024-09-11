const array = [12, 23, -3, 456, 0.5];
let maiornumero = array[0];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element > maiornumero) {
        maiornumero = array[i];
    }
}

console.log(maiornumero);
