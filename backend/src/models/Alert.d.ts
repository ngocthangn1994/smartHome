import mongoose, { Document } from "mongoose";
export type AlertType = "smoke_detected" | "motion_detected" | "battery_low" | "offline";
export type SeverityType = "low" | "medium" | "high" | "critical";
export interface IAlert extends Document {
    homeId: mongoose.Types.ObjectId;
    deviceId?: mongoose.Types.ObjectId;
    message: string;
    type: AlertType;
    severity: SeverityType;
    createdAt: Date;
    updatedAt: Date;
}
declare const Alert: mongoose.Model<IAlert, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, IAlert, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<IAlert & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<IAlert, mongoose.Model<IAlert, any, any, any, any, any, IAlert>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IAlert, mongoose.Document<unknown, {}, IAlert, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<IAlert & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId, IAlert, mongoose.Document<unknown, {}, IAlert, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IAlert & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    type?: mongoose.SchemaDefinitionProperty<AlertType, IAlert, mongoose.Document<unknown, {}, IAlert, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IAlert & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createdAt?: mongoose.SchemaDefinitionProperty<Date, IAlert, mongoose.Document<unknown, {}, IAlert, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IAlert & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    updatedAt?: mongoose.SchemaDefinitionProperty<Date, IAlert, mongoose.Document<unknown, {}, IAlert, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IAlert & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    message?: mongoose.SchemaDefinitionProperty<string, IAlert, mongoose.Document<unknown, {}, IAlert, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IAlert & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    homeId?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId, IAlert, mongoose.Document<unknown, {}, IAlert, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IAlert & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    deviceId?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId | undefined, IAlert, mongoose.Document<unknown, {}, IAlert, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IAlert & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    severity?: mongoose.SchemaDefinitionProperty<SeverityType, IAlert, mongoose.Document<unknown, {}, IAlert, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IAlert & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, IAlert>, IAlert>;
export default Alert;
//# sourceMappingURL=Alert.d.ts.map