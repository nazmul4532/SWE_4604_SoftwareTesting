package org.example;

public class math {
    public int add (int a, int b) {
        return a + b;
    }
    public int sub (int a, int b){
        return a - b;
    }
    public int mul (int a, int b) {
        return a * b;
    }
    public int div (int a, int b) {
        return a / b;
    }

    public boolean isPrime(long n) {
        if (n < 2 || n > 1000000000000L) {
            throw new IllegalArgumentException("Input out of Range");
        }
        for (long i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

}
