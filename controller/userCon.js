// import mongoose from 'mongoose';
// import userModel from '../model/userModel';

// //Create new data
// exports.addUser = async (req, res, next) => {
// 	const { name, phone, avatar, gender, isActive } = req.body;
// 	try {
// 		const instructorData = new userModel({ name, email, phone, address, status });
// 		const savedData = await instructorData.save();
// 		res.status(200).send(savedData);
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).send(error);
// 	}
// };

// // getting all of user
// exports.getUsers = async (req, res, next) => {
// 	try {
// 		const All = await userModel.find();
// 		if (!All) {
// 			res.status(400).json({ message: 'data not found' });
// 		}
// 		res.status(200).send(All);
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).send(error);
// 	}
// };
