import { Controller, Get, Param } from '@nestjs/common';

@Controller('factorial-calculator')
export class FactorialCalculatorController {

    @Get('factorial/:num')
    calcFactorial(@Param('num') num: string): { factorial: number } {
        const n = parseInt(num, 10);
        return { factorial: this.computeFactorial(n) };
    }

    private computeFactorial(n: number): number {
        if (n < 0) return 0; // Factorial is not defined for negative numbers
        if (n === 0 || n === 1) return 1;
        return n * this.computeFactorial(n - 1);
    }
}
