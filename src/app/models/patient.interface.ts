import { User } from './user.interface'

export interface Patient extends User {
    role: 'patient'
    sip: string,
    historiesIds: Array <string>,

}