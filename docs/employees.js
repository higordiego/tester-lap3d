/**
    * @api {post} /api/v1/employees Create Employees
    * @apiGroup Employees
    * @apiVersion 1.0.0
    * @apiSuccess {String} name Employees name
    * @apiSuccess {String} lastName Employees lastName
    * @apiSuccess {String} participation Employees participation
    * @apiExample {curl} Example:
        curl -X POST  http://localhost:4000/api/v1/employees \
        -H 'Cache-Control: no-cache' \
        -H 'Content-Type: application/x-www-form-urlencoded' \
        -d 'name=higor&lastName=diego&participation=0.15'
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
        {
            "__v": 0,
            "_id": "5aa59832aa1c5a1c53c70056",
            "lastName": "Diego",
            "name": "higor",
            "participation": "0,15"
        }
    * @apiErrorExample {json} Empty Body
    *    HTTP/1.1 404 Bad Request
    [
        {
            "location": "params",
            "msg": {
                "message": "Sobrenome é requerido!",
                "title": "Sobrenome"
            },
            "param": "lastName"
        },
        {
            "location": "params",
            "msg": {
                "message": "Nome é requerido!",
                "title": "Nome"
            },
            "param": "name"
        },
        {
            "location": "params",
            "msg": {
                "message": "Participação é requerido!",
                "title": "Participação"
            },
            "param": "participation"
        }
    ]
    * @apiErrorExample {json} Create Employees error
    *    HTTP/1.1 500 Internal Server Error
**/

/**
   * @api {get} /api/v1/employees Find All Employees
   * @apiGroup Employees
   * @apiVersion 1.0.0
   * @apiExample {curl} Example:
    curl  http://localhost:4000/api/v1/employees/
    -H 'Cache-Control: no-cache' \
    -H 'Content-Type: application/x-www-form-urlencoded'
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   [
        {
            "__v": 0,
            "_id": "5aa59832aa1c5a1c53c70056",
            "lastName": "Diego",
            "name": "higor",
            "participation": "0,15"
        }
    ]

   * @apiErrorExample {json} Empty Register
   *    HTTP/1.1 404 Bad Request
   [
        {
            "message": "Não conseguimos retornar o que procura!",
            "title": "Error em Procurar"
        }
    ]
   * @apiErrorExample {json} Find All error
   *    HTTP/1.1 500 Internal Server Error
**/

/**
   * @api {get} /api/v1/employees/:_id Find One Employees
   * @apiParam {_id} _id Employees _id
   * @apiVersion 1.0.0
   * @apiGroup Employees
   * @apiExample {curl} Example:
    curl  http://localhost:4000/api/v1/employees/5aa59832aa1c5a1c53c70056 \
    -H 'Cache-Control: no-cache' \
    -H 'Content-Type: application/x-www-form-urlencoded'
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
    {
        "__v": 0,
        "_id": "5aa59832aa1c5a1c53c70056",
        "lastName": "Diego",
        "name": "higor",
        "participation": "0,15"
    }
   * @apiErrorExample {json} Id Invalid
   *    HTTP/1.1 404 Bad Request
   [
        {
            "title": "Id",
            "message": "Id invalido!"
        }
    ]
   * @apiErrorExample {json} Find One error
   *    HTTP/1.1 500 Internal Server Error
**/

/**
    * @api {put} /api/v1/employees/:_id Update Employees
    * @apiGroup Employees
    * @apiVersion 1.0.0
    * @apiParam {_id} _id Employees _id
    * @apiSuccess {String} name Employees name Optional
    * @apiSuccess {String} lastName Employees lastName Optional
    * @apiSuccess {String} participation Employees participation Optional
    * @apiExample {curl} Example:
        curl -X PUT  http://localhost:4000/api/v1/employees/5aa59832aa1c5a1c53c70056 \
        -H 'Cache-Control: no-cache' \
        -H 'Content-Type: application/x-www-form-urlencoded' \
        -d 'name=higor2&lastName=diego2'
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
    [
            {
                "title": "Alterado com sucesso!",
                "message": "Conseguimos alterar o seu registro com sucesso!"
            }
    ]
    * @apiErrorExample {json} Id Invalid
    *    HTTP/1.1 404 Bad Request
    [
        {
            "title": "Id",
            "message": "Id invalido!"
        }
    ]
    * @apiErrorExample {json} Create Employees error
    *    HTTP/1.1 500 Internal Server Error
**/

/**
    * @api {delete} /api/v1/employees/:_id Delete Employees
    * @apiGroup Employees
    * @apiVersion 1.0.0
    * @apiParam {_id} _id Employees _id
    * @apiExample {curl} Example:
        curl -X DELETE  http://localhost:4000/api/v1/employees/5aa59832aa1c5a1c53c70056 \
        -H 'Cache-Control: no-cache' \
        -H 'Content-Type: application/x-www-form-urlencoded'
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
    [
        {
            "title": "Deletado",
            "message": "Deletado com Sucesso!"
        }
    ]
    * @apiErrorExample {json} Id Invalid
    *    HTTP/1.1 404 Bad Request
    [
        {
            "title": "Id",
            "message": "Id invalido!"
        }
    ]
    * @apiErrorExample {json} Create Employees error
    *    HTTP/1.1 500 Internal Server Error
**/