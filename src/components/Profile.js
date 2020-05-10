import React, { Component } from 'react'

export class Profile extends Component {

    handleImage=(files)=>{
        for (let i = 0; i < files.length; i++) {

            const file = files[i];
            
            if (!file.type.startsWith('image/')){ 
                continue 
            }
            
            const img = document.createElement("img");
            img.classList.add("obj");
            img.file = file;
            //preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.
            
            const reader = new FileReader();
            reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
            reader.readAsDataURL(file);
        }
      }

    render() {
        return (
            <div className="container" style={{position: "absolute", left: "27%",marginTop: "6%"}}>
                <div>
                    <form>
                        <div class="form-group row">
                            <label className="profile-pic">
                                <input type="file"/>
                                <img src="./assets/ceo.png" id="selected-pic" />
                            </label>
                            <div>
                                <h5 class="mt-0">Choose your Gravatar</h5>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-5">
                                <input type="text" class="form-control" id="username"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Occupation</label>
                            <div class="col-sm-5">
                                <select class="form-control">
                                    <option>Default select</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Work Schedule</label>
                            <div class="col-sm-1">
                                <input type="text" class="form-control" id="username"/>
                            </div>
                            <div class="col-sm-1">
                                <input type="text" class="form-control" id="username"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-2"></div>
                            <div class="col-sm-10">
                                <input class="btn btn-primary" type="submit" value="Save"/>
                            </div>
                        </div>       
                    </form>
                </div>
            </div>
        )
    }
}

export default Profile
