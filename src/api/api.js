import * as axios from 'axios';

export const getUsers = (page,count) => {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`,{
    withCredentials: true
  })
  .then(response => response.data); 
}

export const followDAL = (id) => {
  return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,null,{ 
    withCredentials: true,
    headers: {
      "API-KEY":"b3133ae9-04b8-44c3-8a3f-cda6c4d6b193"
    }
  }).then(() => {return});                    
}

export const unfollowDAL = (id) => {
  return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, 
  {
    withCredentials: true,
    headers: {
      "API-KEY":"b3133ae9-04b8-44c3-8a3f-cda6c4d6b193"
    }
  }).then(() => {return});
}