import React, { Component } from 'react'

export class DescrModal extends Component {
    render() {
        const {eventParcel} = this.props
        return (
            <div class="modal fade" id="eventModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{eventParcel.title}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        {eventParcel.descr}
                        <div className="tagged photos">
                            {
                                (eventParcel.photos.length>0) ? (
                                    <div className="descr-photo">
                                    <h3 className="display-4">Tagged Photos</h3>
                                    {
                                        (eventParcel.photos).map((each)=>{
                                            return(
                                                <img src={Buffer(each.image).toString('utf8')} />
                                            )
                                        })
                                    }
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DescrModal
