import { User } from './user.interface'

export interface Doctor extends User{
    role: 'doctor'
}