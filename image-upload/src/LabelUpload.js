import React, { useState } from 'react';
import axios from 'axios';

function LabelUpload() {
    const [userId, setUserId] = useState('');
    const [projectId, setProjectId] = useState('');
    const [imageId, setImageId] = useState('');
    const [label, setLabel] = useState('');

    const handleSubmit = async event => {
        event.preventDefault();
        const labelData = {
            user_id: userId,
            project_id: projectId,
            image_id: imageId,
            label: label
        };

        try {
            const response = await axios.post('http://localhost:5000/upload_label', labelData);
            alert('Label uploaded successfully: ' + response.data);
        } catch (error) {
            alert('Error uploading label: ' + error.message);
        }
    };

    return (
        <div>
            <h1>Upload Label</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="User ID" value={userId} onChange={e => setUserId(e.target.value)} />
                <input type="text" placeholder="Project ID" value={projectId} onChange={e => setProjectId(e.target.value)} />
                <input type="text" placeholder="Image ID" value={imageId} onChange={e => setImageId(e.target.value)} />
                <input type="text" placeholder="Label" value={label} onChange={e => setLabel(e.target.value)} />
                <button type="submit">Submit Label</button>
            </form>
        </div>
    );
}

export default LabelUpload;
