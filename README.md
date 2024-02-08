# rest-api-express
REST API allowing CRUD functionalities, using mongoDB  
CHANGED ENTRYPOINT: https://mpomirski.pl/app/1/products  
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
![obraz](https://github.com/mpomirski/rest-api-express/assets/43695467/55e33f76-f511-43ab-980f-f12ef0427527)
![obraz](https://github.com/mpomirski/rest-api-express/assets/43695467/729146a9-2886-4f7e-a396-07d644607478)
![obraz](https://github.com/mpomirski/rest-api-express/assets/43695467/1a9b6519-1219-472d-b7d6-5f640272b2de)
![obraz](https://github.com/mpomirski/rest-api-express/assets/43695467/638f9e00-0ad1-4ed4-89b1-3db96d36bf9f)
![obraz](https://github.com/mpomirski/rest-api-express/assets/43695467/e4b63e97-5c25-48e4-a24f-889978395b97)
![obraz](https://github.com/mpomirski/rest-api-express/assets/43695467/aab2252b-955d-444e-89a8-ac549020f0a8)
![obraz](https://github.com/mpomirski/rest-api-express/assets/43695467/d77907be-9b87-48ac-adb7-be67b556c9ef)
![obraz](https://github.com/mpomirski/rest-api-express/assets/43695467/9a128d8c-f80d-424f-b0b8-4cece8d90b5b)


