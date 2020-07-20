import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY":"9ab9f4b8-e05f-4f13-878d-4c6db4b504fb"
  }
})

export const usersAPI = {
  getUsers: (page,count) => {
    return instance.get(`users?page=${page}&count=${count}`)
      .then(response => response.data); 
  },
  follow: (id) => {
    return instance.post(`follow/${id}`);
  },
  unfollow: (id) => {
    return instance.delete(`follow/${id}`);
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
  },
  savePhoto(photoFile){
    let formData = new FormData();
    formData.append("image", photoFile);
    return instance.put('profile/photo',formData,{
      headers: {
        "Content-Type":"multipart/form-data"
      }
    });
  },
  saveProfile(profile){
    return instance.put("profile",profile);  
  }
}

export const authAPI = {
  me(){
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false, captcha){
    return instance.post(`auth/login`, {email, password, rememberMe, captcha})
  },
  logout(){
    return instance.delete(`auth/login`);
  }
}

export const securityAPI = {
  getCaptchaUrl(){
    return instance.get('security/get-captcha-url');
  }
}