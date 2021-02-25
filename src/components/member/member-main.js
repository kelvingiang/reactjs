import React, { Component } from 'react';
import MemberList from './member-list';
import MemberFrom from './member-from';



class MemberMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            chang: false,
        }

    }

    showForm = () => {
        if (this.state.chang) {
            return <MemberFrom></MemberFrom>;
        }
    }

    changfrom = () => {
        this.setState({ chang: !this.state.chang });
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Member Page</h2>
                </div>
                <div>
                    {this.showForm()}
                </div>
                <hr></hr>

                <div>
                    <MemberList fromstatus={this.state.chang} fromtoogle={() => this.changfrom()}></MemberList>
                </div>
            </div>
        );
    }
}

export default MemberMain;

