export interface IInput {
    placeholder: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface IStepsList{
    explanation: string;
    bucketXAmount: string;
    bucketYAmount: string;
}

export interface ITable {
    steps: Array<IStepsList>;
}