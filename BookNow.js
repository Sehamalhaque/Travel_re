const mongoose = require('mongoose');

const bookNowSchema = new mongoose.Schema(
  {
    destinationName: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    photo: {
      type: Array,
      required: true
    },
    hotelName: {
      type: String,
      required: true
    },
    vehicleType: {
      type: String,
      required: true
    },
    tourGuideName: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    },
    userEmail: {
      type: String,
      required: true
    },
    totalPrice: {
      type: Number,
      required: true
    },
    bookingDate: {
      type: Date,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("BookNow", bookNowSchema);
