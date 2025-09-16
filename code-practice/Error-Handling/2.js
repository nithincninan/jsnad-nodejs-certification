
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}


class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    validate() {
        if (!this.name || !this.email) {
            throw new ValidationError("Name and email are required.");
        }
    }
}

const customer = new Customer("John Doe", "john@example.com");

try {
    customer.validate();
    console.log("Customer is valid.");
} catch (error) {
    if (error instanceof ValidationError) {
        console.error("Validation error:", error.message);
    } else {
        console.error("Unexpected error:", error);
    }
}

const customer2 = new Customer("John Doe", "");

try {
    customer2.validate();
    console.log("Customer 2 is valid.");
} catch (error) {
    if (error instanceof ValidationError) {
        console.error("Validation error:", error.message);
    } else {
        console.error("Unexpected error:", error);
    }
}