export const Product = {
    getProductList : () => {
        return new Promise((resolve,reject) => {
            fetch('http://localhost/cartApi/getProducts.php').then((res) => {
                if( (res.status === 200 || res.status === 201) && res.ok === true ) {
                    return res.json();
                    // return res.text();
                }
                throw new Error('Invalid Data');
            })
            .then( (result) => {
                resolve((result));
                // resolve(JSON.parse(result));
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
}

