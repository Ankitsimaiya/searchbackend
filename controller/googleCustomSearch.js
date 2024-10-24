const axios = require('axios')

const googleCustomSearch = async (req,res) => {
    const searchTerm = "react";

    const url = `https://www.googleapis.com/customsearch/v1?q=${searchTerm}&key=${process.env.GOOGLE_API_KEY || "AIzaSyBKyB-AvtSNNMNeud8-TjnZ-2afkvC-fZQ"}&cx=${process.env.GOOGLE_CX || "a717e4bcf750c4ab6" }`;
console.log(url)
    try {
        // console.log("response")
        const response = await axios.get(url);
        console.log("response")
        res.json(response.data.items);
    } catch (error) {
        res.status(500).send({msg : 'Error fetching data' ,error });
    }

}

module.exports = googleCustomSearch