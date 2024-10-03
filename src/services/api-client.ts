import axios from 'axios'

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '37b8cd9121eb4531ad5fd6d443db3d8e'
    }
})