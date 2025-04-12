/**
 * @swagger
 * tags:
 *   name: Ping
 *   description: The books managing API
 * /ping:
 *   get:
 *     summary: Create a new book
 *     tags: [ping]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ping'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Status'
 *       500:
 *         description: Some server error
 *
 */