import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY":"b3133ae9-04b8-44c3-8a3f-cda6c4d6b193"
  }
})

export const getUsers = (page,count) => {
  return instance.get(`users?page=${page}&count=${count}`)
    .then(response => response.data); 
}

export const follow = (id) => {
  return instance.post(`follow/${id}`).then(() => {return});                    
}

export const unfollow = (id) => {
  return instance.delete(`follow/${id}`).then(() => {return});
}

export const login = () => {
  return instance.get(`auth/me`).then(response =>{
    return response.data.data;
  });  
}