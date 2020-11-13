module.exports = app => {

    return {

        findUser: (params, callback) => {
            return callback([
            	{id: 1},
                { name: "Josue Yenga"},
                { email: "scottavalone@gmail.com"},
                { work: "Software Developer"},
                { language: "Nodejs, Golang, Python"}
            ]);
        },

        Node: (params, callback) => {
            return callback([
            	{Home: "Welcome to Nodejs!"},
            ]);
        }
    };
};