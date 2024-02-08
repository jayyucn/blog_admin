export interface UserLoginType {
  username: string
  password: string
}

export interface UserLoginToken {
  access_token: string
  expires_in: number
}

export interface UserType {
  username: string
  password: string
  role: string
  roleId: string
}
