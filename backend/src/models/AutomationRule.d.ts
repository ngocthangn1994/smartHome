import mongoose, { Document } from "mongoose";
export type TriggerType = "smoke_detected" | "motion_detected" | "state_change" | "temperature" | "time";
export type ActionType = "turn_on" | "turn_off" | "set_temperature" | "send_alert";
export interface IAutomationRule extends Document {
    name: string;
    home: mongoose.Types.ObjectId;
    triggerDevice: mongoose.Types.ObjectId;
    triggerType: TriggerType;
    condition: Record<string, unknown>;
    actionDevice: mongoose.Types.ObjectId;
    actionType: ActionType;
    actionValue?: Record<string, unknown>;
    enable: boolean;
}
declare const AutomationRule: mongoose.Model<IAutomationRule, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, IAutomationRule, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<IAutomationRule & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<IAutomationRule, mongoose.Model<IAutomationRule, any, any, any, any, any, IAutomationRule>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IAutomationRule, mongoose.Document<unknown, {}, IAutomationRule, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<IAutomationRule & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId, IAutomationRule, mongoose.Document<unknown, {}, IAutomationRule, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IAutomationRule & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    name?: mongoose.SchemaDefinitionProperty<string, IAutomationRule, mongoose.Document<unknown, {}, IAutomationRule, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IAutomationRule & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    home?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId, IAutomationRule, mongoose.Document<unknown, {}, IAutomationRule, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IAutomationRule & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    triggerDevice?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId, IAutomationRule, mongoose.Document<unknown, {}, IAutomationRule, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IAutomationRule & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    triggerType?: mongoose.SchemaDefinitionProperty<TriggerType, IAutomationRule, mongoose.Document<unknown, {}, IAutomationRule, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IAutomationRule & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    condition?: mongoose.SchemaDefinitionProperty<Record<string, unknown>, IAutomationRule, mongoose.Document<unknown, {}, IAutomationRule, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IAutomationRule & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    actionDevice?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId, IAutomationRule, mongoose.Document<unknown, {}, IAutomationRule, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IAutomationRule & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    actionType?: mongoose.SchemaDefinitionProperty<ActionType, IAutomationRule, mongoose.Document<unknown, {}, IAutomationRule, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IAutomationRule & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    actionValue?: mongoose.SchemaDefinitionProperty<Record<string, unknown> | undefined, IAutomationRule, mongoose.Document<unknown, {}, IAutomationRule, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IAutomationRule & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    enable?: mongoose.SchemaDefinitionProperty<boolean, IAutomationRule, mongoose.Document<unknown, {}, IAutomationRule, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IAutomationRule & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, IAutomationRule>, IAutomationRule>;
export default AutomationRule;
//# sourceMappingURL=AutomationRule.d.ts.map