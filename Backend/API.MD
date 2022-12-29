

# API ROUTES

## user authentication

***EXAMPLE***
```
"id":  1,
"name":  "somebody",
"email":  "somebody@example.io",
"email_verified_at":  null,
"created_at":  "2022-12-28T09:40:09.000000Z",
"updated_at":  "2022-12-28T09:40:09.000000Z"
```
***ROUTES***

**/register** - POST
register a new user

**/login** - POST
log in as an existing user

**/logout** - POST
log out and clear auth keys

## user_phones

***EXAMPLE***
```
"id":  1,
"phone":  "1234567890",
"company":  'Some Company,
"user_id":  1,
"created_at":  "2022-12-22T09:22:48.000000Z",
"updated_at":  "2022-12-22T09:22:48.000000Z"
```

***ROUTES***

**/user_phones** - GET/POST
get all user phones/add new

**/user_phones/{id}** - GET/PUT/DELETE

**/user_phones/{id}/user** - GET
get this phone's user

## customers

***EXAMPLE***
```
"id":  1,
"name": 'Example Name' ,
"phone":  "000000000",
"email":  'somebody@example.com',
"location":  'Somewhere, Some Where',
"comment":  'Comment Here,
"created_at":  "2022-12-22T09:39:36.000000Z",
"updated_at":  "2022-12-28T04:25:19.000000Z"
```

***ROUTES***

**/customers** - GET/POST
get customer list/add new

**/customers/{phone}** - GET/PUT/DELETE
get includes addresses as an array - one_to_many

**/customers/search/{query}** - GET
find customers by name
(returns array of customers that match)

