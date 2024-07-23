/**
  @openapi
 *  paths: 
 *  /login:
 *   post:
 *    summary: Login user with email and password
 *    tags:
 *        - Users module
 *    requestBody:
 *        description: JSON
 *        required: true
 *        content:
 *          application/json:
 *             schema:
 *                 type: object
 *                 properties:
 *                   correo:
 *                     type: string
 *                     example: sthefan@gmail.com
 *                   password:
 *                     type: string
 *                     example: abc123
 *            
 *    responses:
 *        200:
 *          description: Login successfully
 *          content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   token:
 *                     type: string
 *                     example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVpZCI6IjYzMmQwNDRjZDljOGFhNTFjM2YzYjE4NCJ9LCJleHAiOjE2NjYzNzY2NDEsImlhdCI6MTY2NjI5MDI0MX0.rsRYXVc8spSxea-UZbpgGBSqdw0r47s_x84CkT8e8Ds
 *                   usuario:
 *                     type: object
 *                     properties:
 *                       correo:
 *                         type: string
 *                         example: sthefanopoli@email.com
 *  /google:
 *     get:
 *      summary: Sing in and create user with google
 *      tags:
 *          - Users module
 *      parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *       - in: query
 *         name: offset
 *         schema:
 *          type: integer
 *         description: The number of items to skip before starting to collect the result set
 *       - in: query
 *         name: limit
 *         schema:
 *          type: integer
 *          minimum: 1
 *         description: The numbers of items to return 
 *  
 */
