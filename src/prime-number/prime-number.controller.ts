import { Controller, Get, Param } from '@nestjs/common';

@Controller('prime-number')
export class PrimeNumberController {

    // Check if a number is prime
    @Get('prime/:number')
    checkIfPrime(@Param('number') numberAsString: string): { isPrime: boolean } {
        const number = parseInt(numberAsString, 10);
        return { isPrime: this.isPrimeNumber(number) };
    }

    private isPrimeNumber(candidate: number): boolean {
        if (candidate <= 1) return false;
        for (let divisor = 2; divisor <= Math.sqrt(candidate); divisor++) {
            if (candidate % divisor === 0) return false;
        }
        return true;
    }
}
