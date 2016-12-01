require('dotenv').config();

const AWS = require('aws-sdk');

var S3 = new AWS.S3({params: {Bucket: process.env.BUCKET_NAME}});

// File name and file body
var fileInfo = {
    Key: 'test.txt',
    Body: 'Upload me!'
};

// Upload
S3.putObject(fileInfo, (error, data) => {
    if (error)
        console.log('Something goes wrong...', error);
    else
        console.log('Uploaded! Check your bucket.', data);
})

//Get File
S3.getSignedUrl('getObject', {Bucket: process.env.BUCKET_NAME, Key: fileInfo.Key, Expires: 60}, (error, data) => {
    if (error)
        console.log('Error when fetching object', error);
    else
        console.log('Ok!', data);
})
