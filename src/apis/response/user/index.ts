export default interface ResponsDto<Data> {
    result: boolean;
    message: string;
    data: Data | null;
}