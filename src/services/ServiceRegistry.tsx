import { AuthService } from "./AuthService/AuthService";
import { NetworkCallService } from "./NetworkCallService/NetworkCallService";
import { URLService } from "./URLService/URLService";

export class ServiceRegistry {
    static init() {
        AuthService.initialize();
        URLService.initialize();
        NetworkCallService.initialize();
    }
}