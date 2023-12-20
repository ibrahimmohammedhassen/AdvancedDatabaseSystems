const mongoose = require("mongoose")

const hosuePriceSchema = mongoose.Schema(
    {
        title:{
            type: String,
            require:[true, "Please Enter a Title"]
        },
        price:{
            type: Number,
            require:[true, "Please Enter a Price"]
        },
        beds:{
            type: Number,
            require:[true, "Please Enter Number of Beds"]
        },
        baths:{
            type: Number,
            require:[true, "Please Enter Numebr Of Baths"]
        },
        receptions:{
            type: Number,
            require:[true, "Please Enter Number of Receptions"]
        },
        address:{
            type: String,
            require:[true, "Please Enter a Address"]
        },
        description:{
            type: String,
            require:[true, "Please Enter a Description"]
        },
        houseImageUrl:{
            type: String,
            require:[true, "Please add Image Url"]
        }      
    },
    {
        timestamps: true
    }
)

const HousePrice = mongoose.model("HousePrice", hosuePriceSchema)

module.exports = HousePrice;