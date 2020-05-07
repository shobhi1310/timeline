import React, { Component } from 'react'

import CommentPopulator from './CommentPopulator'
import Post from './Post'

export class CommentModal extends Component {
    render() {
        const {closeComments, comments, admin, events, event_id} = this.props;
        return (
            <div class="modal-dialog" role="document" id="comment-box" >
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Comments</h5>
                        <button type="button" class="close" aria-label="Close" onClick={closeComments}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        {
                            (comments).map((comment)=>{
                                return(
                                    <CommentPopulator/>
                                )
                            })
                        }
                        {
                            (!admin) ? (<Post event_id={event_id} />) : null
                        }
                    </div>
                    </div>
                </div>
        )
    }
}

export default CommentModal
