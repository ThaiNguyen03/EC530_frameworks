import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
    const [file, setFile] = useState(null);
    const [userId, setUserId] = useState('');
    const [projectId, setProjectId] = useState('');
    const [imageId, setImageId] = useState('');

    const handleFileChange = event => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('user_id', userId);
        formData.append('project_id', projectId);
        formData.append('image_id', imageId);

        try {
            const response = await axios.post('http://localhost:5000/upload_images', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Image uploaded successfully: ' + response.data);
        } catch (error) {
            alert('Error uploading image: ' + error.message);
        }
    };

    return (
        <div>
            <h1>Upload Image</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="User ID"
                    value={userId}
                    onChange={e => setUserId(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Project ID"
                    value={projectId}
                    onChange={e => setProjectId(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Image ID"
                    value={imageId}
                    onChange={e => setImageId(e.target.value)}
                />
                <input
                    type="file"
                    onChange={handleFileChange}
                />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default ImageUpload;
