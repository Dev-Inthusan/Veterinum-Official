const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please enter veterinarian name"],
        trim: true,
        maxLength: [50, "Veterinarian name cannot exceed 50 characters"]
    },
    price: {
        type: Number,
        default: 0.0
    },
    description: {
        type: String,
        required: [true, "Please enter Veterinarian description"]
    },
    ratings: {
        type: String,
        default: 0
    },
    images: [
        {
            image: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please enter veterinarian category"],
        enum: {
            values: [
                'Surgery',
                'Internal medicine',
                'Ophthalmology',
                'Emergency and Critical care',
                'Dentistry',
                'Poultry',
                'Oncology',
                'Dermatology',
                'Beauty/Health',
                'Exotic Animal Medicine',
                'Outdoor',
                'Indoor',
                'Animal',
                'All',
                'Home'
 
            ],
            message : "Please select correct category"
        }
    },
    seller: {
        type: String,
        required: [true, "Please enter veterinarian location"]
    },
    stock: {
        type: Number,
        required: [true, "Please enter veterinarian service"],
        maxLength: [20, 'Veterinarian service cannot exceed 20']
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            rating: {
                type: String,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type : mongoose.Schema.Types.ObjectId
    }
    ,
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('Product', productSchema)

module.exports = schema