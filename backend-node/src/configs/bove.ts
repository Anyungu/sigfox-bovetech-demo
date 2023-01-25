
export const BOVE_LENGTH = 24

export const BOVE_START_CONSTANT = '68'

export const BOVE_BECO_X_WATER_BYTES_AND_POSITIONS = {
    start: { start: 0, end: 2 },
    totalizer: { start: 2, end: 10 },
    interval: { start: 10, end: 14 },
    st1: { start: 14, end: 16 },
    st2: { start: 16, end: 18 }
}

export const BOVE_BECO_X_WATER_ST1_DEFINITIONS_BY_INDEX = {
    2: 'leakageAlarm',
    3: 'burstAlarm',
    4: 'tamperAlarm',
    5: 'freezingAlarm',
}

export const BOVE_BECO_X_WATER_ST2_DEFINITIONS_BY_INDEX = {
    0: 'meterBatteryAlarm',
    1: 'emptyPipeAlarm',
    2: 'reverseFlowAlarm',
    3: 'overRangeAlarm',
    4: 'temperatureAlarm',
    5: 'eEError',
    6: 'transduceINError',
    7: 'transduceOUTError',
}

