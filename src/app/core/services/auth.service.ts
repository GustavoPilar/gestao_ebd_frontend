import { Service } from "@angular/core";

@Service()
export class AuthService {
    private readonly urlBase: string = '';

    public Login(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 3000);
        })
    }
}