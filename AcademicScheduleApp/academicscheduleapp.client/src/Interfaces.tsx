export enum daysOfWeek {monday=1, tuesday, wednesday, thursday, friday, saturday}

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
    timeBegin: string;
    timeEnd: string;
    dateBegin: string;
    dateEnd: string;
}