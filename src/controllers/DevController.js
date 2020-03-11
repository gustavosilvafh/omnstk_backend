const axios = require('axios');

module.exports = {
    async store(req, res){
        
        const { username } = req.body;

        const response = await axios.get(`https://api.github.com/users/${username}`);
        
        const{ name, bio, avatar_url } = response.data; 
        
        return res.json({ username, name, bio, avatar_url});
    }




};

