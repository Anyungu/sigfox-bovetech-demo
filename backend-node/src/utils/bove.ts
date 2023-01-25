import {
    BOVE_BECO_X_WATER_BYTES_AND_POSITIONS,
    BOVE_BECO_X_WATER_ST1_DEFINITIONS_BY_INDEX,
    BOVE_BECO_X_WATER_ST2_DEFINITIONS_BY_INDEX,
    BOVE_LENGTH,
    BOVE_START_CONSTANT
} from "../configs/bove"
import { WaterMeterDecoded } from "../moidels/water-meter";



export const decodeBecoXWater = (data: string, device: string): WaterMeterDecoded => {

    // is string length OK
    if (data.length !== BOVE_LENGTH) return;


    //istartByte 68?
    const startStart = BOVE_BECO_X_WATER_BYTES_AND_POSITIONS?.start?.start;
    const startEnd = BOVE_BECO_X_WATER_BYTES_AND_POSITIONS?.start?.end;

    if (data.substring(startStart, startEnd) !== BOVE_START_CONSTANT) return;


    const totalizerStart = BOVE_BECO_X_WATER_BYTES_AND_POSITIONS?.totalizer?.start;
    const totalizerEnd = BOVE_BECO_X_WATER_BYTES_AND_POSITIONS?.totalizer?.end;

    const total = calculateBigEdianValue(data.substring(totalizerStart, totalizerEnd))

    const st1Start = BOVE_BECO_X_WATER_BYTES_AND_POSITIONS?.st1?.start;
    const st2Start = BOVE_BECO_X_WATER_BYTES_AND_POSITIONS?.st2?.start;

    const st1End = BOVE_BECO_X_WATER_BYTES_AND_POSITIONS?.st1?.end;
    const st2End = BOVE_BECO_X_WATER_BYTES_AND_POSITIONS?.st2?.end;

    const st1Value = convertToBinary(data.substring(st1Start, st1End));
    const st2Value = convertToBinary(data.substring(st2Start, st2End));

    const st1Alarms = getSt1AndSt2Alarms(st1Value, 'st1');
    const st2Alarms = getSt1AndSt2Alarms(st2Value, 'st2');

    return { total, device, payload: data, alarms: { ...st1Alarms, ...st2Alarms } }


}

const calculateBigEdianValue = (data: string): number => {

    const subs: any = data.match(/.{1,2}/g) || [];
    let res = subs.reverse().join('');
    return Number(res) / 100;

}

const convertToBinary = (data: string): string => {
    let binary = Number(data).toString(2).padStart(8, '0');
    return binary;
}

const getSt1AndSt2Alarms = (data: string, val: string): {} => {
    let alarms: { [key: string]: boolean } = {};

    for (let i = 0; i < data.length; i++) {
        const char = data.charAt(i);

        if (val === 'st2' && (BOVE_BECO_X_WATER_ST2_DEFINITIONS_BY_INDEX?.[i] ?? 'ignore') !== 'ignore') {
            const currentName = BOVE_BECO_X_WATER_ST2_DEFINITIONS_BY_INDEX?.[i]
            alarms[currentName] = char === '1' ? true : false
        }

        if (val === 'st1' && (BOVE_BECO_X_WATER_ST1_DEFINITIONS_BY_INDEX?.[i] ?? 'ignore') !== 'ignore') {
            const currentName = BOVE_BECO_X_WATER_ST1_DEFINITIONS_BY_INDEX?.[i]
            alarms[currentName] = char === '1' ? true : false
        }

    }
    return alarms;
}