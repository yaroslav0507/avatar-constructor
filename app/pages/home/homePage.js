'use strict';

import React from 'react';
import users from './mock/users';
import UserInfo from './components/UserInfo';
import InputFilter from './components/InputFilter';

let HomePage = React.createClass({
    getInitialState(){
        return {
            userList: users
        }
    },

    handleInputChange(event){
        let filterValue = event.target.value.toLowerCase();
        let filteredUsers = users.filter(user => {
            let name = user.name.toLowerCase();
            return name.indexOf(filterValue) !== -1;
        });

        this.setState({
            userList: filteredUsers
        });
    },

    render() {
        return (
            <div>
                <h2>List of users</h2>
                <InputFilter onChange={this.handleInputChange}></InputFilter>

                <ul className="names">{
                    this.state.userList.map((user) =>
                        <UserInfo key={user.id} user={user}></UserInfo>
                    )
                }</ul>
            </div>
        );
    }
});

module.exports = HomePage;