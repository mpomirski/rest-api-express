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
- POST /products - Adds a product passed in the body of the request to the database (product name must be unique)
- PUT /products/id - Modifies a product with specified id
- DELETE /products/id - Deleted a product with specified id
- GET /products/summary - Returns a json array with a summary of all the products(name, total price = quantity * price, quantity)

# Examples:
![obraz](https://github.com/mpomirski/rest-api-express/assets/43695467/4b0a018c-86af-4b2e-b64f-c1b5cf1be363)
![obraz](https://github.com/mpomirski/rest-api-express/assets/43695467/9642ffa4-a126-4e6e-bb76-21dd041dfe15)
![obraz](https://github.com/mpomirski/rest-api-express/assets/43695467/dd13526e-adcf-4c1d-bdb5-086a725fe6f2)
![obraz](https://github.com/mpomirski/rest-api-express/assets/43695467/05f2ca1b-36f6-4788-915b-e3f044c1d15a)
![obraz](https://github.com/mpomirski/rest-api-express/assets/43695467/04c53354-98d9-4cca-9404-f43ffaf76db9)
![obraz](https://github.com/mpomirski/rest-api-express/assets/43695467/f96851b8-8f0d-43c3-88fd-9c12c0d1ce2c)


