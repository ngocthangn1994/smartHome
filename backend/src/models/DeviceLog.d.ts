import mongoose, { Document } from "mongoose";
export interface IDeviceLog extends Document {
    homeId: mongoose.Types.ObjectId;
    deviceId: mongoose.Types.ObjectId;
    previousState?: string;
    newState: string;
    source: "user" | "automationRule" | "system" | "home_assistant";
}
declare const DeviceLog: mongoose.Model<IDeviceLog, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, IDeviceLog, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<IDeviceLog & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<IDeviceLog, mongoose.Model<IDeviceLog, any, any, any, any, any, IDeviceLog>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IDeviceLog, mongoose.Document<unknown, {}, IDeviceLog, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<IDeviceLog & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId, IDeviceLog, mongoose.Document<unknown, {}, IDeviceLog, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IDeviceLog & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    source?: mongoose.SchemaDefinitionProperty<"user" | "automationRule" | "system" | "home_assistant", IDeviceLog, mongoose.Document<unknown, {}, IDeviceLog, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IDeviceLog & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    homeId?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId, IDeviceLog, mongoose.Document<unknown, {}, IDeviceLog, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IDeviceLog & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    deviceId?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId, IDeviceLog, mongoose.Document<unknown, {}, IDeviceLog, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IDeviceLog & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    previousState?: mongoose.SchemaDefinitionProperty<string | undefined, IDeviceLog, mongoose.Document<unknown, {}, IDeviceLog, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IDeviceLog & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    newState?: mongoose.SchemaDefinitionProperty<string, IDeviceLog, mongoose.Document<unknown, {}, IDeviceLog, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IDeviceLog & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, IDeviceLog>, IDeviceLog>;
export default DeviceLog;
//# sourceMappingURL=DeviceLog.d.ts.map