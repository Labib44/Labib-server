
const mongoose = require('mongoose');

// Schema Design
const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please, Provide a name for this product."],
        trim: true,
        unique: [true, "Name must be unique."],
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [50, "Name is too large"],
    },
    description: {
        type: String,
        required: true,
    },
  
   
  




}, {
    timestamps: true,
})


// Mongooes middelware for saving data: pre / post

// pre method
projectSchema.pre('save', function (next) {
    console.log('Before saving data');
    if (this.quantity == 0) {
        this.status = 'Out-of-stock'
    }
    next()
})


// post method
// productSchema.post('save', function(doc, next){
//     console.log('After saving data');
//     next()
// })

// Model
const Project = mongoose.model('Project', projectSchema)

module.exports = Project;