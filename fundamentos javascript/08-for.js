for (let i = 0;i < 10; i++) {
    console.log(i) 
}

console.warn("continue")
for (let i = 0;i < 10; i++) {
    if (i==5) {
        continue //funciona para saltar iteracion
    }
    console.log(i) 
}


console.warn("break")
for (let i = 0;i < 10; i++) {
    if (i==5) {
        break;
    }
    console.log(i) 
}


