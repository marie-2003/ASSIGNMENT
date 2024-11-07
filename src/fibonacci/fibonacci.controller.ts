import { Controller, Get, Param } from '@nestjs/common';

@Controller('fibonacci')
export class FibonacciController {
    @Get(':n') 
    getFibonacciSequence(@Param('n') numberParam: string): { sequence: string } { 
        const number = parseInt(numberParam, 10);  // Renamed 'n' to 'number'
        const fibonacciSequence = this.generateFibonacciSequence(number); // Renamed 'sequence' and method
        return { sequence: fibonacciSequence.join(', ') }; 
    }

    private generateFibonacciSequence(count: number): number[] { // Renamed 'calculateFibonacci' to 'generateFibonacciSequence'
        if (count <= 0) return [];
        if (count === 1) return [0];
        if (count === 2) return [0, 1];

        const fibonacciArray = [0, 1]; // Renamed 'fib' to 'fibonacciArray'
        for (let i = 2; i < count; i++) {
            fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
        }
        return fibonacciArray;
    }
}