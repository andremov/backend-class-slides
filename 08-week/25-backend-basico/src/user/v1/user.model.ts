import { model, Schema } from "mongoose";

// DECLARE MODEL TYPE
type UserType = {};

// DECLARE MONGOOSE SCHEMA
const UserSchema = new Schema<UserType>({});

// DECLARE MONGO MODEL
const UserModel = model<UserType>("User", UserSchema);

// EXPORT ALL
export { UserModel, UserSchema, UserType };
