export declare const homeAssistantService: {
    setTemperature(entityId: string, temperature: number): Promise<Response>;
    turnOn(entityId: string): Promise<Response>;
    turnOff(entityId: string): Promise<Response>;
    getSnapshot(entityId: string): Promise<Response>;
    getStream(entityId: string): Promise<Response>;
};
//# sourceMappingURL=homeAssistantService.d.ts.map