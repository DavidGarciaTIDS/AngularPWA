import { Level } from "./level";
export interface User {
    id:number;
    name:string;
    username:string;
    email:string;
    phone:string;
    level_id:number;
    deleted_at:string|null;
    created_at:string;
    updated_at:string;
    email_verified_at:string|null;
    img:string;
}
