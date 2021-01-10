const axios = require('axios');

const grabInfo = {
    async getUser(userResponses){
        try { let response = await axios
        
        .get(`https://api.github.com/users/${userResponses.userName}`);
        return response.data;
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = grabInfo;