import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY":"b3133ae9-04b8-44c3-8a3f-cda6c4d6b193"
  }
})

export const usersAPI = {
  getUsers: (page,count) => {
    return instance.get(`users?page=${page}&count=${count}`)
      .then(response => response.data); 
  },
  follow: (id) => {
    return instance.post(`follow/${id}`).then(() => {return});                    
  },
  unfollow: (id) => {
    return instance.delete(`follow/${id}`).then(() => {return});
  },
  getProfile: (id) => {
    return instance.get(`profile/${id}`).then(response =>{
      return response.data;
    });
  }
}

export const authAPI = {
  me:() => {
    return instance.get(`auth/me`).then(response =>{
      return response;
    });  
  },
}