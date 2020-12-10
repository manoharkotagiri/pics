import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{ Authorization: 'Client-ID J-hewNQHCK-e4b9BmhgWG9VLQIU3FGTILwXUHqwRyNg' }
});