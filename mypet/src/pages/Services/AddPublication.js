import React from 'react';


function AddPublication(props) {
    return (
        <div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" />
                <span class="input-group-text">Title</span>
                <input type="text" class="form-control" placeholder="Title" aria-label="Title" />
            </div>

            <div class="input-group">
                <span class="input-group-text">Message</span>
                <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
        </div>
    );
}

export default AddPublication;