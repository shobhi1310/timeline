import React, { Component } from 'react'

import CommentPopulator from './CommentPopulator'
import Post from './Post'

export class CommentModal extends Component {
    render() {
        return (
            <div>
                <div class="modal fade" id="commentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
