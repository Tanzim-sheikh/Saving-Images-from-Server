import express from 'express';
import multer from 'multer';
import { multerConfig } from '../config/multerConfig.js'

const router = express.Router();

const upload = multer(multerConfig);

router.post('/', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    res.json({ message: 'File uploaded successfully', file: req.file });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

export default router;
