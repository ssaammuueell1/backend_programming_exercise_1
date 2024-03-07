function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 1;
    }
    return true;
}


for (let num = 1; num <= 1000; num++) {
    if (isPrime(num)) {
        console.log(num);
    }
}