import readline from 'readline';
import { pathToFileURL } from 'url';

export function calculateDiscount(total) {
    if (total >= 100) {
        return total * 0.10;
    }
    return 0;
}

export function calculateTotalWithDiscount(total, discount) {
    return total - discount;
}

var total = 0;

function initializeService() {
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    function readPrice() {
        rl.question('Insert the price of product or 0 for close: ', (input) => {
            const price = parseFloat(input);

            if (price > 0 ) {
                total += price;
                readPrice();
            } else {
                const discount = calculateDiscount(total);
                const totalWithDiscount = calculateTotalWithDiscount(total, discount);

            console.log(`\nTotal acumulate: $ ${total.toFixed(2)}`);
            console.log(`\nDiscount applied: $ ${discount.toFixed(2)}`);
            console.log(`\nTotal payable: $ ${totalWithDiscount.toFixed(2)}`);

            rl.close();
            }
        });
    }

    readPrice();
}