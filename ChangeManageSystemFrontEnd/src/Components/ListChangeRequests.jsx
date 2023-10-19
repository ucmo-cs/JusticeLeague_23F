import React, { Component } from 'react';
import ChangeRequestDataService from '../Service/ChangeRequestDataService';

const userid = document.cookie;
var page = 1;

class ListChangeRequests extends Component {
    constructor(props) {
      super(props)
      this.state = {
        changeRequests: [],
        message: null
      }
      this.refreshChangeRequests = this.refreshChangeRequests.bind(this);
    }
    componentDidMount() {
      this.refreshChangeRequests();
    }

    refreshChangeRequests() {
      ChangeRequestDataService.getAllChangeRequests(userid).then(
        response => {
          this.setState({ changeRequests: response.data});
        }
      )
    }

    render() {
      if (page == 1) {
        return (
            <div id="u520" class="ax_default" data-label="Table Repeater">
              {
                this.state.changeRequests.map(
                  changeRequest =>
                  <div id="u520-1" class="preeval" style={{width: '1317px', height: '60px'}}>
                    <div id="u521-1" class="ax_default box_1 u521" data-label="Full_Name" style={{width: '120px', height: '30px', left: '119px', top: '0px', visibility: 'inherit'}}>
                    <div id="u521-1_div" class="u521_div" style={{width: '120px', height: '30px', visibility: 'inherit'}}></div>
                    <div id="u521-1_text" class="text u521_text" style={{visibility: 'inherit'}}>
                    <p><span>{changeRequest.name}</span></p>
                      </div>
                    </div>

                    <div id="u522-1" class="ax_default box_1 u522" data-label="Change_Number" style={{width: '120px', height: '30px', left: '0px', top: '0px', visibility: 'inherit'}}>
                    <div id="u522-1_div" class="u522_div" style={{width: '120px', height: '30px', visibility: 'inherit'}}></div>
                    <div id="u522-1_text" class="text u522_text" style={{visibility: 'inherit'}}>
                      <p><span>{changeRequest.id}</span></p>
                      </div>
                    </div>

                    <div id="u523-1" class="ax_default box_1 u523" data-label="Application_ID" style={{width: '120px', height: '30px', left: '239px', top: '0px', visibility: 'inherit'}}>
                    <div id="u523-1_div" class="u523_div" style={{width: '120px', height: '30px', visibility: 'inherit'}}></div>
                    <div id="u523-1_text" class="text u523_text" style={{visibility: 'inherit'}}>
                      <p><span>{changeRequest.applicationId}</span></p>
                      </div>
                    </div>

                    <div id="u524-1" class="ax_default box_1 u524" data-label="Description" style={{width: '120px', height: '60px', left: '359px', top: '0px', visibility: 'inherit'}}>
                    <div id="u524-1_div" class="u524_div" style={{width: '120px', height: '60px', visibility: 'inherit'}}></div>
                    <div id="u524-1_text" class="text u524_text" style={{visibility: 'inherit'}}>
                      <p><span>{changeRequest.description}</span></p>
                      </div>
                    </div>

                    <div id="u525-1" class="ax_default box_1 u525" data-label="Reason" style={{width: '120px', height: '30px', left: '479px', top: '0px', visibility: 'inherit'}}>
                    <div id="u525-1_div" class="u525_div" style={{width: '120px', height: '30px', visibility: 'inherit'}}></div>
                    <div id="u525-1_text" class="text u525_text" style={{visibility: 'inherit'}}>
                      <p><span>{changeRequest.reason}</span></p>
                      </div>
                    </div>

                    <div id="u526-1" class="ax_default box_1 u526" data-label="Reason_Number" style={{width: '120px', height: '30px', left: '597', top: '0px', visibility: 'inherit'}}>
                    <div id="u526-1_div" class="u526_div" style={{width: '120px', height: '30px', visibility: 'inherit'}}></div>
                    <div id="u526-1_text" class="text u526_text" style={{visibility: 'inherit'}}>
                      <p><span>{changeRequest.reasonType}</span></p>
                      </div>
                    </div>
                    <div id="u527-1" class="ax_default box_1 u527" data-label="Change_Type" style={{width: '120px', height: '30px', left: '717px', top: '0px', visibility: 'inherit'}}>
                    <div id="u527-1_div" class="u527_div" style={{width: '120px', height: '30px', visibility: 'inherit'}}></div>
                    <div id="u527-1_text" class="text u527_text" style={{visibility: 'inherit'}}>
                      <p><span>{changeRequest.changeType}</span></p>
                      </div>
                    </div>

                    <div id="u528-1" class="ax_default box_1 u528" data-label="Why" style={{width: '120px', height: '60px', left: '837px', top: '0px', visibility: 'inherit'}}>
                    <div id="u528-1_div" class="u528_div" style={{width: '120px', height: '60px', visibility: 'inherit'}}></div>
                    <div id="u528-1_text" class="text u528_text" style={{visibility: 'inherit'}}>
                      <p><span>{changeRequest.whyDescription}</span></p>
                      </div>
                    </div>
                  
                  <div id="u529-1" class="ax_default box_1 u529" data-label="What" style={{width: '120px', height: '60px', left: '957px', top: '0px', visibility: 'inherit'}}>
                    <div id="u529-1_div" class="u529_div" style={{width: '120px', height: '60px', visibility: 'inherit'}}></div>
                    <div id="u529-1_text" class="text u529_text" style={{visibility: 'inherit'}}>
                      <p><span>{changeRequest.whatDescription}</span></p>
                      </div>
                    </div>

                  <div id="u530-1" class="ax_default box_1 u530" data-label="Who" style={{width: '120px', height: '30px', left: '1077px', top: '0px', visibility: 'inherit'}}>
                    <div id="u530-1_div" class="u530_div" style={{width: '120px', height: '30px', visibility: 'inherit'}}></div>
                    <div id="u530-1_text" class="text u530_text" style={{visibility: 'inherit'}}>
                      <p><span>{changeRequest.whoDescription}</span></p>
                      </div>
                    </div>
                  
                  <div id="u531-1" class="ax_default box_1 u531" data-label="Action" style={{width: '120px', height: '30px', left: '1197px', top: '0px', visibility: 'inherit'}}>
                    <div id="u531-1_div" class="u531_div" style={{width: '120px', height: '30px', visibility: 'inherit'}}></div>
                    <div id="u531-1_text" class="text u531_text" style={{display: 'none', visibility: 'hidden'}}>
                      <p>{changeRequest.stateLevel}</p>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          )
        } else {
          
        }
    }
}

export default ListChangeRequests;