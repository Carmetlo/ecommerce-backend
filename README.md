# ecommerce-backend

## Description

This is an example of the backend for an e-commerce site built with Express.js API and configured to use Sequelize to interact with a MySQL database.  It provides a robust back-end structure for an internet retail company to manage categories, products, and tags.

## Table of Contents

- [ecommerce-backend](#ecommerce-backend)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [API Routes](#api-routes)
  - [Database Models](#database-models)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [Links](#links)

## Installation
1. Clone the Repository:
```bash
git clone https://github.com/your-username/your-repository.git
```
2. Navigate to the Project Directory:
```bash
cd ecommerce-backend
```
3.  Install dependencies
```bash
npm install
```
4. Seed the Database:
```bash
node seeds/index.js
```
5. Start the server:
```bash
node server.js
```
6. Open your browser and visit http://localhost:3002

## API Routes
Categories:

GET /api/categories: Retrieve all categories with associated products.
GET /api/categories/:id: Retrieve a specific category by ID with associated products.
POST /api/categories: Create a new category with optional associated products.
PUT /api/categories/:id: Update a category by ID with optional associated products.
DELETE /api/categories/:id: Delete a category by ID.
Products:

GET /api/products: Retrieve all products with associated categories and tags.
GET /api/products/:id: Retrieve a specific product by ID with associated categories and tags.
POST /api/products: Create a new product with optional associated categories and tags.
PUT /api/products/:id: Update a product by ID with optional associated categories and tags.
DELETE /api/products/:id: Delete a product by ID.
Tags:

GET /api/tags: Retrieve all tags.
GET /api/tags/:id: Retrieve a specific tag by ID.
POST /api/tags: Create a new tag.
PUT /api/tags/:id: Update a tag by ID.
DELETE /api/tags/:id: Delete a tag by ID.

## Database Models
Category
id: Integer, Primary Key, Auto Increment
category_name: String, Not Null
Product
id: Integer, Primary Key, Auto Increment
product_name: String, Not Null
price: Decimal, Not Null, Validates as Decimal
stock: Integer, Not Null, Default: 10, Validates as Numeric
category_id: Integer, Foreign Key (References Category Model)
Tag
id: Integer, Primary Key, Auto Increment
tag_name: String, Not Null
ProductTag
id: Integer, Primary Key, Auto Increment
product_id: Integer, Foreign Key (References Product Model)
tag_id: Integer, Foreign Key (References Tag Model)
Associations
Product belongs to Category.
Category has many Product models.
Product belongs to many Tag models (through ProductTag).
Tag belongs to many Product models (through ProductTag).

## Technologies Used
Node.js
Express.js
Sequelize
MySQL2
dotenv

## Contributing
Carmetlo
Github:  https://github.com/Carmetlo
Linkedin:  https://www.linkedin.com/in/michael-carmelo/

## Links
Github Repository:  https://github.com/Carmetlo/ecommerce-backend
How-to Video:  https://app.screencastify.com/v3/watch/decqRXqWHIJbkLSCSAzv