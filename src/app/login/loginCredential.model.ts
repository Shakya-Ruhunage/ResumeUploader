export class LoginCredential {
    private name: string;
    private password: string;

    public constructor() {}

    public set $email(name: string) {
        this.name = name;
    }

    public get $email(): string {
        return this.name;
    }

    public set $password(password) {
        this.password = password;
    }

    public get $password(): string {
        return this.password;
    }
}