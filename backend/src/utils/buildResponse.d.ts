declare const buildResponse: <T>(success: boolean, message: string, data?: T) => {
    success: boolean;
    message: string;
    data: T | undefined;
};
export default buildResponse;
//# sourceMappingURL=buildResponse.d.ts.map