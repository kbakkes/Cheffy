let api = {
    getPerson(){
        let url = 'https://swapi.co/api/people/16';
        fetch(url)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong on api server!');
                }
            })
            .then(response => {
                console.debug(response);
                // ...
            }).catch(error => {
            console.error(error);
        });
    }
};

module.exports = api;