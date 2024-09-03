import { User } from "../component/types";

export class Api {
    private readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    private async request(url = '', method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET', body?: any) {
        const response = await fetch(`${this.url}${url}`, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-type': 'application/json',
            },
        });

        if (response.ok) {
            return response.json();
        }

        throw new Error(`${response.status} ${response.statusText}`);
    }

    public async getList(): Promise<User[]> {
        try {
            return await this.request();
        } catch (error) {
            throw new Error(`Cannot fetch list: ${error}`);
        }
    }
}