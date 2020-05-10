import React, { Component } from 'react'

export default class EventFiller extends Component {
    componentDidMount=()=>{
        const dropzone = document.getElementById("dropzone");
            dropzone.ondragover = dropzone.ondragenter = function(event) {
                event.stopPropagation();
                event.preventDefault();
            }
    
            dropzone.ondrop = function(event) {
                event.stopPropagation();
                event.preventDefault();

                const filesArray = event.dataTransfer.files;
                // for (let i=0; i<filesArray.length; i++) {
                //     sendFile(filesArray[i]);
                // }
            }
    }
    render() {
        return (
            <div className="container" style={{marginTop:"2%",position:"absolute",left:"20%"}}>
                <h2>Add your event</h2>
                <form>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Title</label>
                        <div class="col-sm-5">
                            <input type="text" class="form-control" id="title"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Description</label>
                        <div class="col-sm-5">
                            <textarea type="text" class="form-control" id="description"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Tag Photos</label>
                        <div class="col-sm-5">
                        <div>
                            <div id="dropzone" >Drag & drop your file here...</div>
                        </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-2"></div>
                        <div class="col-sm-10">
                            <input class="btn btn-success" type="submit" value="Add Event"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
