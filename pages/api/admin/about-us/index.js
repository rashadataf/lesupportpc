import { connectToDatabase } from "../../../../util/mongodb";
import nextConnect from "next-connect";
import multer from "multer";
import fs from "fs";
import path from "path";

const fileStorage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: fileStorage,
  limits: { fieldSize: 25 * 1024 * 1024 },
  fileFilter: fileFilter,
});

const apiRoute = nextConnect({});

const uploadMiddleware = upload.single("image");

apiRoute.use(uploadMiddleware);
apiRoute.post(async (req, res) => {
  try {
    let imageUrl;
    if (req.file) {
      imageUrl = req.file.path;
    }
    let title = req.body.title;
    let content = req.body.content;
    const { client, db } = await connectToDatabase();
    const blogs = db.collection("about-us");
    const oldAboutUs = await blogs.find({}).toArray();
    if (oldAboutUs.length === 0) {
      const result = await blogs.insertOne({
        title,
        content,
        imageUrl,
      });
    } else {
      const id = oldAboutUs[0]._id;
      if (oldAboutUs[0].imageUrl) {
        if (imageUrl) {
          if (imageUrl !== oldAboutUs[0].imageUrl) {
            fs.unlinkSync(path.join(process.cwd(), oldAboutUs[0].imageUrl));
          }
        } else {
          fs.unlinkSync(path.join(process.cwd(), oldAboutUs[0].imageUrl));
        }
      }
      const result = await blogs.updateOne(
        { _id: id },
        {
          $set: {
            title,
            content,
            imageUrl,
          },
        }
      );
    }
    res.send(true);
  } catch (error) {
    console.log(error);
  }
});

apiRoute.get(async (req, res) => {
  try {
    const { client, db } = await connectToDatabase();
    const aboutUs = await db.collection("about-us").find({});
    const result = await aboutUs.toArray();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ error: "there was an error happened!" });
  }
});

export default apiRoute;
export const config = {
  api: {
    bodyParser: false,
  },
};
