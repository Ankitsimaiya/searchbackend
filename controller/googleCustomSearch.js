const axios = require('axios')

const googleCustomSearch = async (req,res) => {
    const searchTerm = req.query.q

    const url = `https://www.googleapis.com/customsearch/v1?q=${searchTerm}&key=${process.env.GOOGLE_API_KEY }&cx=${process.env.GOOGLE_CX  }`;
    try {
        
        const response = await axios.get(url);
        console.log(response.data.items) 
       
        res.json(response.data.items);
    } catch (error) {
        res.status(500).send({msg : 'Error fetching data' ,error });
    }

}

module.exports = googleCustomSearch