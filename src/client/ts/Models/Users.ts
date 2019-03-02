import { User } from "./User"

export class Users {
    private users: User[] = [];

    public addUser(user: User) {
        this.users.push(user);
    }

    public deleteUser(user: User) {
        for(let i: number = 0; i < Users.length; i++) {
            if(this.users[i].getName() == user.getName()) {
                this.users.splice(i,1);
                break;
            }
        }
    }

    public getListOfUsers(): User[] {
        return this.users;
    }
}