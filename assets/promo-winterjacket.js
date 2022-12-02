document
    .querySelectorAll(".product-form__submit")
    .forEach((button) => {
        button.addEventListener("click", () => {
            console.log("success winterjacket");

            axios.get('/cart.js')
                .then(function (response) {
                    // handle success
                    const handbagBlackMedium = response.data.items.find((item) => item.variant_id === 43989052064051);
                    console.log(handbagBlackMedium);
                    if (handbagBlackMedium) {
                        console.log("You have a free winterjacket");
                    } else {
                        console.log("No handbag Black Medium in your cart");
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        });
    });


axios.get('/cart.js')
    .then(function (response) {
        // handle success
        const handbagBlackMedium = response.data.items.find((item) => item.variant_id === 43989052064051);
        console.log(handbagBlackMedium);
        if (handbagBlackMedium) {
            console.log("You have a free winterjacket");
        } else {
            console.log("No handbag Black Medium in your cart");
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })