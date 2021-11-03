const APIError = require("../../utils/error");

module.exports = {
    validate:async(data)=>{
        try {

            const error_arr = [];
            if (!data.name || data.name === null || data.name === "") {
              error_arr.push({ name: "name field is required" });
            }
           
            if (!data.price || data.price === null || data.price === "") {
                error_arr.push({ price: "price field is required" });
            }
            if (!data.image || data.image === null || data.image === "") {
                error_arr.push({ image: "image field is required" });
            }
            return error_arr;
        } catch (error) {
            throw APIError(error)
        }
    }
}