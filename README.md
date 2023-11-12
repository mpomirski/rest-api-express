# rest-api-express
REST API allowing CRUD functionalities, using mongoDB

Database schema:

    "name": {
        required: true,
        unique: true,
        type: String,
    },
    "price": {
        amount: {
            type: Number,
            required: true
        },
        currency: {
            type: String,
            required: true
        }
    },
    "description": {
        required: true,
        type: String
    },
    "quantity": {
        required: true,
        type: Number
    },
    "unit": {
        required: true,
        type: String
    },
# Endpoints:
- GET /products - Returns a json array of all products
- GET /products/id - Returns a product with specified id
- GET /products?sort_by=\<field_name\>.\<asc|desc\>
- GET /products?\<mongodb query in the form of key-value pairs\>
- POST /products - Adds a product passed in the body of the request to the database (product name must be unique)
- PUT /products/id - Modifies a product with specified id
- DELETE /products/id - Deleted a product with specified id
- GET /products/summary - Returns a json array with a summary of all the products(name, total price = quantity * price, quantity)

# Examples:


