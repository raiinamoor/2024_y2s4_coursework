export enum daysOfWeek {monday=1, tuesday, wednesday, thursday, friday, saturday}

export interface Option {
    value: any;
    label: string
}

export const dayOptions:Array<Option> = [
    ({value: daysOfWeek.monday, label:'Понедельник'}),
    ({value: daysOfWeek.tuesday, label:'Вторник'}),
    ({value: daysOfWeek.wednesday, label:'Среда'}),
    ({value: daysOfWeek.thursday, label:'Четверг'}),
    ({value: daysOfWeek.friday, label:'Пятница'}),
    ({value: daysOfWeek.saturday, label:'Суббота'})
]

export interface Subject {
    name: string;
}

export interface Classroom {
    name: string;
    type: string;
}

export interface Professor {
    firstName: string;
    secondName: string;
    lastName: string;
}

export interface StudentGroup {
    number: string;
    year: string;
    degree: string;
}

export interface Class {
    id: number;
    type: string;
    dayOfWeek: daysOfWeek;
    subject: Subject;
    classroom: Classroom
    professors: Professor[];
    studentGroup: StudentGroup;
    timeBegin: string;
    timeEnd: string;
    dateBegin: string;
    dateEnd: string;
}