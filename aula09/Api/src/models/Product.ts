import mongoose, { Schema, Document } from 'mongoose';

interface IProduct extends Document {
name: string;
description: string;
price: number;
stock: number;
category: string;
createdAt: Date
}

const productSchema: Schema = new Schema({
name: { type: String, required: true },
description: { type: String },
price: { type: Number, required: true },
stock: { type: Number, default: 0 },
category: { type: String },
createdAt: { type: Number, default: Date.now }
});

const Person = mongoose.model<IProduct>('Product', productSchema, 'Product');

export default Person;