// [CRUD] JavaScript/Node

// CREATE   

const create = (books) => {     
    books.post('/books', (req, res) => {
        const book = req.body;
        books.push(book);
        res.status(201).send('Livro criado com sucesso!');
    });
    return books;
};

// READ

const read = (books) => {
    books.get('/books', (req, res) => {
        res.send(books);
    });
    return books;
};

// UPDATE   

const update = (books) => { 
    books.put('/books/:id', (req, res) => {
        const { id } = req.params;
        const book = books.find((book) => book.id == id);
        const index = books.indexOf(book);
        const keys = Object.keys(req.body);
        keys.forEach((key) => {
            book[key] = req.body[key];
        });
        books[index] = book;
        res.send('Livro atualizado com sucesso!');
    });
    return books;
};

// DELETE   

const remove = (books) => { 
    books.delete('/books/:id', (req, res) => {
        const { id } = req.params;
        const book = books.find((book) => book.id == id);
        const index = books.indexOf(book);
        books.splice(index, 1);
        res.send('Livro deletado com sucesso!');
    });
    return books;
};

// Path: Teste Blanmo\questao3.js


