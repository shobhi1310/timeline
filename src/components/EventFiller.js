import React, { Component } from 'react'

export default class EventFiller extends Component {

    state={
        file_exists : false,
        files : []
    }

    dragEnter=(e)=>{
        e.stopPropagation();
        e.preventDefault();
    }

    dragOver=(e)=>{
        e.stopPropagation();
        e.preventDefault();
    }
    
    onFileDrop=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const filesArray = e.dataTransfer.files;
        if (!filesArray[0].type.startsWith('image/')){ 
            console.warn("Not an image file.") 
        }else{
            this.handleFile(filesArray[0]);
        }
    }
    
    handleFile=(file)=>{
        const {file_exists, files} = this.state
        let copy = files;
        const li = document.createElement('li');
        const img = document.createElement("img");

        img.src = URL.createObjectURL(file);
        img.height = 60;
        img.onload = function() {
            URL.revokeObjectURL(this.src);
        }

        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload=(event)=>{
            copy.push(event.target.result);
        }

        li.appendChild(img);
        if(!file_exists){
            const dropzone = document.getElementById('dropzone');
            dropzone.innerHTML = '';
            const ul = document.createElement('ul');
            ul.setAttribute('class', "list-unstyled");
            ul.setAttribute('id',"set");
            ul.appendChild(li);
            dropzone.appendChild(ul);
            this.setState({
                file_exists : true,
                files : copy
            })
        }else{
            const ul = document.getElementById('set');
            ul.appendChild(li);
            this.setState({
                files : copy
            })
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
                            <div id="dropzone"
                            onDraEnter={this.dragEnter}
                            onDragOver={this.dragOver}
                            onDrop={this.onFileDrop}
                            >
                                Drag & drop your file here...
                            </div>
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
