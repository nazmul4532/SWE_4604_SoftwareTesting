function lab8(lock, stock, barrel) {

    let lockPrice = 45.00;
    let stockPrice = 30.00;
    let barrelPrice = 25.00;

    let error = false;
    let message = "";

    if (lock < 1 || lock > 70) {
        error = true;
        message += "Invalid. Locks must be between 1 and 70.\n";

    }
    if (stock < 1 || stock > 80) {
        error = true;
        message += "Invalid. Stocks must be between 1 and 80.\n";

    }
    if (barrel < 1 || barrel > 90) {
        error = true;
        message += "Invalid. Barrels must be between 1 and 90.\n";

    }

    if (error == false) {
        let total = (lock * lockPrice) + (stock * stockPrice) + (barrel * barrelPrice);
        if (total > 1000) {
            total = total * 0.9;
        }
        // message = "Pass. The total sales is " + total + " dollars.";
        // return total;
        message = "Pass"
    }
    return message;
}
    module.exports = lab8;
