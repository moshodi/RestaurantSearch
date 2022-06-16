import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer stA5sx9e67F7nLN6get3NtNfHTnuhVJu5QJffo69J40CT9dPpCtL9n6ZzwhNpk6nK77udSYXf_cnGEx9fubiNJ7ZTP6lbVxGkf4WRiECOqi99gzsBHXN5yfQKJZ-YnYx'
    }
})