import { Status } from "./status";
import { User } from "./user";
import { Hardware } from "./hardware";
import { Area } from "./area";

export interface Incident {
    id: number;
    title: string;
    description:string;
    status:Status;
    user:User;
    created_at:string;
    updated_at:string;
    hardware:Hardware|null;
    area:Area;
    img:string;




}