import React from 'react';

function Contact(props) {
    return (
        <div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" />
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" placeholder="Mail" aria-label="Mail" />
            </div>

            <div class="input-group">
                <span class="input-group-text">Message</span>
                <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
        </div>
    );
}

export default Contact;