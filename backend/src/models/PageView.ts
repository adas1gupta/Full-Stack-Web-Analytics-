import mongoose from "mongoose";
const Schema = mongoose.Schema;
const Document = mongoose.Document;

// These are the structure of documents for MongoDB
const PageViewSchema = new Schema ({
    url: { type: String, required: true },
    timestamp: { type: Date, required: true, default: Date.now},
    userId: { type: String },
    deviceInfo: { type:String }
});

//interface to make the model that's based off of PageViewSchema
export interface IPageView extends mongoose.Document {
    url: string;
    timestamp: Date;
    userId?: string;
    deviceInfo?: string;
}

export default mongoose.model<IPageView>('PageView', PageViewSchema);