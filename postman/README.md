# Postman Assessment

This folder contains the Postman collection for Library API testing.

## Instructions
- Import `Library_API_Collection.json` into Postman
- baseUrl: `https://library-api.postmanlabs.com`
- apiKey: `postmanrulz`

## Requests included
1. Create a new book (POST /books)
2. Update book (PATCH /books/:id)
3. Delete book (DELETE /books/:id)

## Tests/Assertions
- Status code verification
- Response body validation
- Dynamic `bookId` stored in collection variables for chaining requests
