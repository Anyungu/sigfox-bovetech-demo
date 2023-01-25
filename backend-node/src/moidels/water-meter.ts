export interface WaterMeterDecoded {
    device: string;
    total: number;
    payload: string;
    alarms: { [key: string]: boolean; }


}