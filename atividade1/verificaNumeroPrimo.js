function isPrime(num) {
    if(typeof num != 'number') {
        return false;
    }

    for(i = 2; i <= num/2; i++) {
        if(num % i == 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(337));