import { SuitStatus } from "./suit-status";

export interface Suit {
    id: string;
    serialNumber: string;
    status: SuitStatus;
    oxygenLevel: number;
    batteryLevel: number;
    temperatureRange: {
        min: number;
        max: number;
    };
    lastMaintenanceDate: Date;
    nextMaintenanceDate: Date;
}