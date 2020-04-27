import React, { Component } from 'react'
import CommentPopulator from './CommentPopulator'
import Post from './Post'

export class CommentModal extends Component {
    render() {
        return (
            <div>
                
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                Launch demo modal
                </button>

                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Comments</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <CommentPopulator/>
                        <CommentPopulator/>
                        <CommentPopulator/>
                        <Post/>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default CommentModal