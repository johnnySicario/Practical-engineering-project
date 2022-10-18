import { useState } from 'react';
import React, { useEffect } from 'react';


function AddPublication(props) {
    const [photo, setPhoto] = useState(null)
    const [photoSize, setPhotoSize] = useState(false)
    const [ UserName , setUserName ] = useState('')
    const [ Title , setTitle ] = useState('')
    const [ Message , setMessage ] = useState('')

    const hadleSubmitForm = (e) => {
        e.preventDefault();
        let data = { UserName , Title , Message , photo }
        console.log(data);
      }

    useEffect(() => {
        if(photo !== null) {
          photo.file.size <= 1048576 ? setPhotoSize(false) : setPhotoSize(true)
        }
      },[photo])
  
    const handleFileInputChange = data => {
        if (data.file) {
            let reader = new FileReader();
            reader.readAsDataURL(data.file);
            reader.onload = () => {
                setPhoto({ url: reader.result, file: data.file })
            };
            reader.onerror = (error) => {
                console.log('Error: ', error);
            };
        } else {
            setPhoto(null);
        }
    };



    return (
        <div>
            <div class="input-group mb-3">
                <input onChange={ (e) => setUserName(e.target.value)} type="text" class="form-control" placeholder="Username" aria-label="Username" />
                <span class="input-group-text">Title</span>
                <input onChange={ (e) => setTitle(e.target.value)} type="text" class="form-control" placeholder="Title" aria-label="Title" />
            </div>

            <div class="input-group">
                <span class="input-group-text">Message</span>
                <textarea onChange={ (e) => setMessage(e.target.value)} class="form-control" aria-label="With textarea"></textarea>
            </div>

            <div className="input-group mb-3">
                <label className="input-group-text" for="inputGroupFile01">Upload your pet</label>
                <input required type="file" className="form-control" id="inputGroupFile01" onChange={e => handleFileInputChange({ file: e.target.files[0] })} accept="image/*" />
            </div>
            <div><span style={photoSize ? { color: "red" } : { color: 'green' }}>The image should be up to 1MB</span></div>
            <button disabled={UserName === "" || Title === "" ||Message === "" || photo === null || photoSize ? true : false} onClick={hadleSubmitForm} type="submit" className="btn btn-primary">Submit</button>
        </div>
    );
}

export default AddPublication;