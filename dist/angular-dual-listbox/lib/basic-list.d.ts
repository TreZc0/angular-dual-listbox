export declare class BasicList {
    /** Name of the list */
    private _name;
    /** Last element touched */
    last: any;
    /** text filter */
    picker: string;
    dragStart: boolean;
    dragOver: boolean;
    pick: Array<any>;
    list: Array<any>;
    sift: Array<any>;
    constructor(name: string);
    get name(): string;
}
