import userModel from '../model/userModel.js';
import express from 'express';
// import { addUser, getUsers } from '../controller/userCon.js';
const userRouter = express.Router();

//adding data
userRouter.post('/addUser', async (req, res, next) => {
	const { name, phone, image, gender, isActive } = req.body;   
	try {
		const instructorData = new userModel({ name, phone, image, gender, isActive });
		const savedData = await instructorData.save();
		res.status(200).send(savedData);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});
//getting all data
userRouter.get('/allUser', async (req, res, next) => {
	try {
		const All = await userModel.find();
		if (!All) {
			res.status(400).json({ message: 'data not found' });
		}
		res.status(200).send(All);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

// Update data
userRouter.put('/updateUser/:id', async (req, res) => {
	const data = await userModel.findById(req.params.id);
	if (!data) {
		res.status(400).json({ message: 'data not found' });
	}

	const { name, phone, image, gender, isActive } = req.body;

	const updateData = await userModel.findByIdAndUpdate(req.params.id, { name, phone, image, gender, isActive }, { new: true });

	if (!updateData) {
		res.status(400).json({ message: 'do not updated' });
	}
	if (updateData) {
		res.status(201).json({ updateData, message: 'data updated' });
	}
});


userRouter.delete('/deleteUser/:id', async (req, res) => {
	try {
		const deleteData = await userModel.findByIdAndDelete(req.params.id);
		res.json({
			message: 'deleted successful .',
			deleteData,
		});
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

export default userRouter;
