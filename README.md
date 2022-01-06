# Backend e-commerce

* Solo un usuario admin puede realizar peticiones post, put y delete
<hr/>

## Url
```
https://backend-e-commerce-2022.herokuapp.com/api
```
---

## Login

#### Ednpoint
* ``/auth/login``
#### Body

* ```js
    "email":"test1@test.com",
    "password":"123456" 
    ```
 
#### Response

*  ```js
    "msg": "login ok",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWQyMDgyOTY3ZjY2NjlmM2I3YTZhYWMiLCJpYXQiOjE2NDE0ODg1NjMsImV4cCI6MTY0MTUwMjk2M30.bSsxRYEhtS6RTf9rqQEaC5RHQqyjw0HkYRxY6tP8H5A",
        "user": {
            "name": "test1",
            "email": "test1@test.com",
            "role": "ADMIN_ROLE",
            "google": false,
            "uid": "61d2082967f6669f3b7a6aac"
        }}
   ```
---
## Register

#### Ednpoint
* ``/auth/register``
#### Body

* ```js
    "name":"test4",
    "email":"test4@test.com",
    "password":"123456"
    ```
 
#### Response

*  ```js
    "msg": "Usuario creado",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWQ3M2EwOWRhNDA0NzBkMDU4YzExNDQiLCJpYXQiOjE2NDE0OTUwNDksImV4cCI6MTY0MTUwOTQ0OX0.rr6gXWJ-Zm4QXpZ_X_CjoTaUty7goRSbBokO6rm5CFE",
        "NewUser": {
            "name": "test4",
            "email": "test4@test.com",
            "role": "USER_ROLE",
            "google": false,
            "uid": "61d73a09da40470d058c1144"
        }
    }
   ```
---
## Categories

#### Get

* Endpoint ``/categories``
* Response
```js
    "total": 1,
    "data": [
        {
            "name": "CONSOLAS Y VIDEOJUEGOS",
            "user": {
                "_id": "61d2082967f6669f3b7a6aac",
                "name": "test1"
            },
            "uid": "61d49eb83efca6d0f6a32349"
        }
    ] 
```
 
#### Post
* Endpoint ``/categories``
* Header ``x-token:token``
* Body ``"name":"moviles"``

* Response 
```js
    "msg": "Categoria creada",
    "category": {
        "name": "MOVILES",
        "user": "61d2082967f6669f3b7a6aac",
        "uid": "61d73c09da40470d058c114c"
     }
```

#### Put
* Endpoint ``/categories/id``
* Header ``x-token:token``
* Body ``"name":"Hogar"``

* Response
```js
    "msg": "Categoria actualizada",
    "categorie": {
        "name": "HOGAR",
        "user": "61d2082967f6669f3b7a6aac",
        "uid": "61d73c09da40470d058c114c"
    }
```
#### Delete
* Endpoint ``/categories/id``
* Header ``x-token:token``

* Response
```js
    "msg": "Categoria borrada",
    "category": {
        "name": "HOGAR",
        "user": "61d2082967f6669f3b7a6aac",
        "uid": "61d73c09da40470d058c114c"
    }
```

---
## Users

#### Get

* Endpoint ``/users``
* Response
```js
    "total": 1,
    "users": [
        {
            "name": "test1",
            "email": "test1@test.com",
            "role": "ADMIN_ROLE",
            "google": false,
            "uid": "61d2082967f6669f3b7a6aac"
        }
    ]
```
 
#### Post
* Endpoint ``/users``
* Header ``x-token:token``
* Body 
```js 
    "name":"test6",
    "email":"test6@test.com",
    "password":"123456",
    "role":"USER_ROLE" 
```

* Response 
```js
    "msg": "usuario creado",
    "user": {
        "name": "test6",
        "email": "test6@test.com",
        "role": "USER_ROLE",
        "google": false,
        "uid": "61d73ef0da40470d058c115b"
    }
```

#### Put
* Endpoint ``/users/id``
* Header ``x-token:token``
* Body ``"role":"ADMIN_ROLE"``

* Response
```js
    "msg": "usuario actualizado",
    "user": {
        "name": "test6",
        "email": "test6@test.com",
        "role": "ADMIN_ROLE",
        "google": false,
        "uid": "61d73ef0da40470d058c115b"
    }
}
```
#### Delete
* Endpoint ``/users/id``
* Header ``x-token:token``

* Response
```js
    "msg": "usuario borrado",
    "user": {
        "name": "test6",
        "email": "test6@test.com",
        "role": "ADMIN_ROLE",
        "google": false,
        "uid": "61d73ef0da40470d058c115b"
    }
```

---
## Products

#### Get

* Endpoint ``/products``
* Response
```js
    "total": 1,
    "data": [
        {
            "_id": "61d4a55b499dfb24c27385c8",
            "name": "PRODUCTO1",
            "state": true,
            "user": {
                "_id": "61d2082967f6669f3b7a6aac",
                "name": "test1"
            },
            "category": {
                "_id": "61d49eb83efca6d0f6a32349",
                "name": "CONSOLAS Y VIDEOJUEGOS"
            },
            "description": "descripcion producto 1",
            "img": null,
            "price": 0
        },
    ]
```
 
#### Post
* Endpoint ``/products``
* Header ``x-token:token``
* Body 
```js
    "name":"producto5",
    "category":"61d49eb83efca6d0f6a32349",
    "description":"descripcion producto 5",
    "price":4.52
```

* Response 
```js
    "msg": "Producto creado",
    "product": {
        "name": "PRODUCTO5",
        "state": true,
        "user": "61d2082967f6669f3b7a6aac",
        "category": "61d49eb83efca6d0f6a32349",
        "description": "descripcion producto 5",
        "img": null,
        "price": 4.52,
        "_id": "61d751275f4d0d24e4bbfa8e"
     }
```

#### Put
* Endpoint ``/products/id``
* Header ``x-token:token``
* Body 
```js
    "description":"test descripcion",
    "category":"61d49eb83efca6d0f6a32349",
    "price":"5"
```

* Response
```js
    "msg": "Producto actualizado",
    "product": {
        "_id": "61d751275f4d0d24e4bbfa8e",
        "name": "PRODUCTO5",
        "state": true,
        "user": "61d2082967f6669f3b7a6aac",
        "category": "61d49eb83efca6d0f6a32349",
        "description": "test descripcion",
        "img": null,
        "price": 5
     }
```
#### Delete
* Endpoint ``/products/id``
* Header ``x-token:token``

* Response
```js
    "msg": "Producto borrado",
    "productoBorrado": {
        "_id": "61d751275f4d0d24e4bbfa8e",
        "name": "PRODUCTO5",
        "state": false,
        "user": "61d2082967f6669f3b7a6aac",
        "category": "61d49eb83efca6d0f6a32349",
        "description": "test descripcion",
        "img": null,
        "price": 5
    }
```

---
## Search products

#### By name

* Endpoint ``/products/productname``
* Response
```js
    "results": [
        {
            "_id": "61d642fe84890708c318780a",
            "name": "PRODUCTO SONY PS",
            "state": true,
            "user": "61d2082967f6669f3b7a6aac",
            "category": {
                "_id": "61d49eb83efca6d0f6a32349",
                "name": "CONSOLAS Y VIDEOJUEGOS"
            },
            "description": "descripcion producto ps",
            "img": null,
            "price": 0
        },
        {
            "_id": "61d6431084890708c318780e",
            "name": "PRODUCTO XBOX",
            "state": true,
            "user": "61d2082967f6669f3b7a6aac",
            "category": {
                "_id": "61d49eb83efca6d0f6a32349",
                "name": "CONSOLAS Y VIDEOJUEGOS"
            },
            "description": "descripcion producto xbox",
            "img": null,
            "price": 0
        },
    ]
```
 
#### By category
* Endpoint ``/categories/categoryID``

* Response 
```js
    "results": [
        {
            "_id": "61d4a55b499dfb24c27385c8",
            "name": "PRODUCTO1",
            "state": true,
            "user": "61d2082967f6669f3b7a6aac",
            "category": {
                "_id": "61d49eb83efca6d0f6a32349",
                "name": "CONSOLAS Y VIDEOJUEGOS"
            },
            "description": "descripcion producto 1",
            "img": null,
            "price": 0
        },
    ]
```

---

