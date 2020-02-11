export const ProductList = () => {
    return new Promise((resolve, reject) => {
        fetch('http://localhost/cartApi/getProducts.php').then((res) => {
            if ((res.status === 200 || res.status === 201) && res.ok === true) {
                return res.json();
                // return res.text();
            }
            throw new Error('Invalid Data');
        })
            .then((result) => {
                return resolve((result));
                // resolve(JSON.parse(result));
            })
            .catch((error) => {
               return reject(error);
            });
    });
}

