const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var total = 0;
function readPrice() {
    rl.question('Insert the price of product or 0 for close: ', (input) => {
        const price = parseFloat(input);

        if (price > 0 ) {
            total += price;
            readPrice();
        } else {
            let discount = 0;

            if (total >= 100) {
                discount = total * 0.15;
            }

            const totalWithDiscount = total - discount;

            console.log(`\nTotal acumulate: $ ${total.toFixed(2)}`);
            console.log(`\nDiscount applied: $ ${discount.toFixed(2)}`);
            console.log(`\nTotal payable: $ ${totalWithDiscount.toFixed(2)}`);

            rl.close();
        }
    });
}

readPrice();