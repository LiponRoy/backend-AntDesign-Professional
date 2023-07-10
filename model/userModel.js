import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		phone: { type: String, required: true },
		image: { type: String, required: true },
		gender: { type: String, default: "male" },
		isActive: { type: String},
	},
	{ timestamps: true },
);

const antdUser = mongoose.model('antdUser', userSchema);
export default antdUser;
