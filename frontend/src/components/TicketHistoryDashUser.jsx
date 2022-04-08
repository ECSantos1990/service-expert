import React from 'react'
import TicketDetailsModal from '../modals/TicketDetailsModal'


const TicketHistoryDashUser = () => {
  return (
    <div >
        <div id="rightDashboard" className="col-lg-12 col-sm-12">
            <div className="navbar mt-3 mb-3">
                    <div className="container-fluid">
                        <span className="navbar-brand">Ticket History</span>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Enter Ticket No." aria-label="Search"/>
                            <button className="btn buttonStyleGlobal mx-1" type="submit">Search</button>
                            <div className="dropdown mx-2">
                            <button className="btn dropdown-toggle buttonStyleGlobal" type="button" id="dropdownMenuButtonCreate" data-bs-toggle="dropdown" aria-expanded="false"> Sort
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonCreate">
                                <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdropUAM" >by Date</a></li>
                                <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdropSR">by Type</a></li>
                            </ul>
                        </div> 
                        </form>
                    </div>  
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="row ">
                                <div className="col-sm-12">
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th scope="col">Ticket No.</th>
                                            <th scope="col">Date Requested</th>
                                            <th scope="col">Type of Request</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row"> <a href="#" data-bs-toggle="modal" data-bs-target="#ticketDetails">TN-001</a></th>
                                            <td>03/22/2022 08:00:00</td>
                                            <td>UAM - New User Account Creation</td>
                                            <td>Closed</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>                               
                        </div>
                </div>
            </div>
        </div>
        <TicketDetailsModal/>
    </div>
  )
}

export default TicketHistoryDashUser