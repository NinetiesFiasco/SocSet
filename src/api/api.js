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
    console.warn("Obsolete method. Please profileAPI object.");
    return profileAPI.getProfile(id);
  }
}

export const profileAPI = {
  getProfile(userId){
    return instance.get('profile/'+userId);
  },
  getStatus(userId){
    return instance.get('profile/status/' + userId);
  },
  updateStatus(status){ 
    return instance.put('profile/status', {
      status: status
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