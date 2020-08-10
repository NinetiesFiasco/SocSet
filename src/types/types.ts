export type UserType = {
  id: number
  name: string 
  status: string 
  photos: PhotosType
  followed: boolean
}


export type PostType = {
  id: number
  txt: string
  likesCount: number
}

export type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string 
  twitter: string
  website: string
  youtube: string 
  mainLink: string
}

export type PhotosType = {
  small: string | null
  lagre: string | null
}

export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: PhotosType
}
