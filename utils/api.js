const id = '47d5b17b';
const key = '9ae07c47a0474c4c05fac5cd08278edd';
let api = {
    getPerson(){
        let url = 'http://api.yummly.com/v1/api/recipes?_'+id+'=app-id&_'+key+'=app-key&cheese';
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