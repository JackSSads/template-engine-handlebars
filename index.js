const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get("/dashboard", (req, res) => {
    const itens = ["item a", "item b", "item c"];

    res.render('dashboard', { itens });
});

app.use(express.static('public'));

app.get("/post", (req, res) => {
    const post = {
        title: "Aprender Node.js",
        category: "JavaScript",
        body: "Nesse blog vc vai aprender JavaScript de maneira rápida e sem enrolação",
        Comments: 4,
    };

    res.render("blogpost", { post });
});

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: "Aprender Js",
            category: "JavaScript",
            body: "Teste",
            comments: 4
        },
        {
            title: "Aprender Java",
            category: "Java",
            body: "Teste",
            comments: 4
        },
        {
            title: "Aprender Python",
            category: "Python",
            body: "Teste",
            comments: 4
        },
        {
            title: "Aprender C#",
            category: "C#",
            body: "Teste",
            comments: 4
        },
        {
            title: "Aprender C++",
            category: "C++",
            body: "Teste",
            comments: 4
        },
        {
            title: "Aprender Ruby",
            category: "Ruby",
            body: "Teste",
            comments: 4
        },
        {
            title: "Aprender R",
            category: "R",
            body: "Teste",
            comments: 4
        },
        {
            title: "Aprender PHP",
            category: "PHP",
            body: "Teste",
            comments: 4
        },
    ]
    res.render('blog' , { posts });
});

app.get('/', (req, res) => {

    const user = {
        name: "Jackson",
        surname: "Souza",
        age: 21
    };

    const palavra = 'Teste';

    const auth = true;

    const approved = true;

    res.render('home', { user: user, palavra, auth, approved });
})



app.listen(3000, () => { console.log("App roning in port: 3000") });
