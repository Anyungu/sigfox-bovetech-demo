
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
    2: 'Leakage Alarm',
    3: 'Burst Alarm',
    4: 'Tamper Alarm',
    5: 'Freezing Alarm',
}

export const BOVE_BECO_X_WATER_ST2_DEFINITIONS_BY_INDEX = {
    0: 'Meter Battery Alarm',
    1: 'Empty Pipe Alarm',
    2: 'Reverse Flow Alarm',
    3: 'Over Range Alarm',
    4: 'Temperature Alarm',
    5: 'EE Error',
    6: 'Transduce IN Error',
    7: 'Transduce OUT Error',
}

