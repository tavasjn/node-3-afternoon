module.exports = {
    create: (req, res, next) => {
        const dbInstatnce = req.app.get('db');
        const { name, description, price, image_url } = req.body;
        dbInstatnce.create_product([name, description, price, image_url])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Well that isnt right!' });
                console.log(err)
            })
    },
    getOne: (req, res, next) => {
        const dbInstatnce = req.app.get('db');
        const { id } = req.params;

        dbInstatnce.read_product(id)
            .then(product => res.status(200).send(product))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Well that isnt right!' });
                console.log(err)
            })
    },
    getAll: (req, res, next) => {
        const dbInstatnce = req.app.get('db');

        dbInstatnce.read_products()
            .then(products => res.status(200).send(products))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Well that isnt right!' });
                console.log(err)
            })
    },
    update: (req, res, next) => {
        const dbInstatnce = req.app.get('db');
        const { params, query } = req;

        dbInstatnce.update_product([params.id, query.desc])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Well that isnt right!' });
                console.log(err)
            })
    },
    delete: (req, res, next) => {
        const dbInstatnce = req.app.get('db');
        const { id } = req.params;

        dbInstatnce.delete_product(id)
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Well that isnt right!' });
                console.log(err)
            })
    },

}