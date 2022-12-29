## **API REFERENCE**

API Reference for the CRM-3CX Backend

## user authentication

_**EXAMPLE**_

```plaintext
"id":  1,
"name":  "somebody",
"email":  "somebody@example.io",
"email_verified_at":  null,
"created_at":  "2022-12-28T09:40:09.000000Z",
"updated_at":  "2022-12-28T09:40:09.000000Z"
```

_**ROUTES**_

**/register** - POST  
Register a new user

**/login** - POST  
Log in as an existing user

**/logout** - POST  
Log out and clear auth keys

## user\_phones

_**EXAMPLE**_

```plaintext
"id":  1,
"phone":  "1234567890",
"company":  'Some Company,
"user_id":  1,
"created_at":  "2022-12-22T09:22:48.000000Z",
"updated_at":  "2022-12-22T09:22:48.000000Z"
```

_**ROUTES**_

**/user\_phones** - GET/POST  
get all user phones/add new

**/user\_phones/{id}** - GET/PUT/DELETE

**/user\_phones/{id}/user** - GET  
get this phone's user

## customers

_**EXAMPLE**_

```plaintext
"id":  1,
"name": 'Example Name' ,
"phone":  "000000000",
"email":  'somebody@example.com',
"location":  'Somewhere, Some Where',
"comment":  'Comment Here,
"created_at":  "2022-12-22T09:39:36.000000Z",
"updated_at":  "2022-12-28T04:25:19.000000Z"
```

_**ROUTES**_

**/customers** - GET/POST  
Get customer list/add new

**/customers/{phone}** - GET/PUT/DELETE  
Get includes addresses as an array - one\_to\_many

**/customers/search/{query}** - GET  
Find customers by name  
(returns an array of customers that match)

## inquiries

_**EXAMPLE**_

```plaintext
"id": 1,
"brand": "Brand",
"brand_availability": "Available",
"product_category": "Home",
"action": "Refund",
"status_remark": "Completed Successfully",
"user_id": 4,
"customer_id": 27,
"call_type_id": 1,
"created_at": "2022-12-29T03:03:01.000000Z",
"updated_at": "2022-12-29T03:03:01.000000Z",
```

_**ROUTES**_

**/inquiries** - GET/POST  
Get inquiries list/add new

**/inquiries/{id}** - GET/PUT/DELETE  
Get includes feedback - one\_to\_many