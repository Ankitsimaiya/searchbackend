const { default: axios } = require("axios")

const youtube = async (req,res) => {
    const YOUTUBE_API_KEY = "AIzaSyCodcvFJHBsxLWFTzGLFEHeFyCnyztWRFk"
    const searchTerm = req.query.q
    console.log("searchTerm" , searchTerm)
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&key=${YOUTUBE_API_KEY}&type=video`
    console.log(url)
    try {
        const response = await axios.get(url)
        console.log("data 1 " ,response.data)
       return res.status(200).json(response.data.items)
    } catch (error) { 
        res.status(500).json({msg : "error",error})
    } 
    // res.json({msg:"jbkdg"})  
} 

module.exports = youtube