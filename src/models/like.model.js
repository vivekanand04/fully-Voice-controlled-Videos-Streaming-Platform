// import mongoose, {Schema} from "mongoose";


// const likeSchema = new Schema({
//     video: {
//         type: Schema.Types.ObjectId,
//         ref: "Video"
//     },
//     // comment: {
//     //     type: Schema.Types.ObjectId,
//     //     ref: "Comment"
//     // },
//     // tweet: {
//     //     type: Schema.Types.ObjectId,
//     //     ref: "Tweet"
//     // },
//     likedBy: {
//         type: Schema.Types.ObjectId,
//         ref: "User"
//     },
    
// }, {timestamps: true})

// export const Like = mongoose.model("Like", likeSchema)


import mongoose, {Schema} from "mongoose";

const likeSchema = new Schema({
  targetType: { type: String, enum: ["Video","Message"], required: true },
  target: { type: Schema.Types.ObjectId, required: true, index: true },
  likedBy: { type: Schema.Types.ObjectId, ref: "newUser", required: true }
}, { timestamps: true });

likeSchema.index({ targetType: 1, target: 1, likedBy: 1 }, { unique: true });

export const Like = mongoose.model("Like", likeSchema);
