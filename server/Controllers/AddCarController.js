const AddCar = require('../Models/AddCar.js');
const cloudinary = require('../Config/CloudinaryConfig.js');
const fs = require('fs');

const uploadToCloudinary = async (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder: "Profile" },
            (error, result) => {
                if (error) return reject(error);
                resolve(result.secure_url);
            }
        );
        stream.end(fileBuffer);
    });
};


const AddCarInDB = async (req, res) => {
    try {

        const imageFields = ['UserProfile'];
        const imageUrls = {};

        for (const field of imageFields) {
            if (req.files[field]) {
                const fileBuffer = req.files[field][0].buffer;
                const cloudinaryUrl = await uploadToCloudinary(fileBuffer);
                imageUrls[field] = cloudinaryUrl;
            }
        }


        for (const field of imageFields) {
            if (imageUrls[field]) {
                req.body[field] = imageUrls[field];
            }
        }

        const AddcarDetails = req.body;
        const newCar = new AddCar(AddcarDetails);
        await newCar.save();
        res.status(201).json({
            success: true,
            message: "Car Details Added Successfully."
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports = { AddCarInDB };