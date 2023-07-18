# Description
NestJS Book API

This is a simple CRUD (Create, Read, Update, Delete) RESTful API for managing books using NestJS, Sequelize (with MySQL database), and TypeScript.

## Table of Contents
- Features
- Prerequisites
- Getting Started
  - Installation
  - Database Setup
- API Endpoints
- Technologies Used
- Contributing

## Features
- Fetch a list of all books.
- Fetch a specific book by ID.
- Create a new book.
- Update an existing book.
- Delete a book.
  
## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js and npm
- MySQL Server and Workbench
- Git

## Getting Started
## Installation
1. Clone the repository:
```bash
git clone https://github.com/your-username/Nestjs_Book_Api.git
cd Nestjs_Book_Api
```

2. Install the dependencies:
```bash
npm install
```

## Database Setup
1. Create a new MySQL database named books_db.

2. In the src/app.module.ts file, update the database connection settings according to your MySQL setup:

```bash
SequelizeModule.forRoot({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'books_db',
  autoLoadModels: true,
  synchronize: true,
}),
```

Replace your_mysql_username and your_mysql_password with your MySQL credentials.

3. Run the application:
```bash
npm run start:dev
```
The API server will start at http://localhost:3000.

## API Endpoints

## Fetch All Books
- URL: /books
- Method: GET
- Response: Returns an array of all books.
 
## Fetch Book by ID
- URL: /books/:id
- Method: GET
- Parameters: id (number) - The ID of the book to retrieve.
- Response: Returns a single book object with the specified ID.
  
## Create a New Book
- URL: /books
- Method: POST
- Request Body:
  
```bash
{
  "title": "Sample Book",
  "author": "John Doe"
}
```
- Response: Returns the created book object.
  
## Update a Book
- URL: /books/:id
- Method: PUT
- Parameters: id (number) - The ID of the book to update.
- Request Body:

```bash
{
  "title": "Updated Book Title",
  "author": "Jane Smith"
}
```
- Response: Returns the updated book object.
  
## Delete a Book
- URL: /books/:id
- Method: DELETE
- Parameters: id (number) - The ID of the book to delete.
- Response: Returns a message indicating successful deletion.
  
## Technologies Used
- NestJS - A progressive Node.js framework for building efficient and scalable server-side applications.
- Sequelize - A powerful and flexible ORM (Object-Relational Mapping) library for Node.js.
- MySQL - An open-source relational database management system.
