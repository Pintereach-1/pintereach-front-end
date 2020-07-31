import React from 'react';
import { connect } from 'react-redux'
import { editUser } from '../../store/actions';
import { useHistory } from 'react-router-dom'


class EditUser extends React.Component {
    
  
  state = {
        inputValue: {
            username: this.props.username.first_name,
            
        }
    }


    handleChanges = event => {
        this.setState({
            inputValue: {
                ...this.state.inputValue,
                [event.target.name]: event.target.value
            }

        })
    }

    editUser = event => {
        event.preventDefault();
        this.props.editUser(this.state.inputValue)
        
    }

    render() {
        return (
          <div className='login-container'>
            <form className='login-form' onSubmit={this.editUser} >
            <h1>Edit User</h1> 
              <input  name='username' required value={this.state.inputValue.first_name} onChange={this.handleChanges} />

              <button className='register-button'>Submit Changes</button>
            </form>
          </div>
        );
      }
    }

const mapStateToProps = state => ({
    username: state.username,
    
})

export default connect(
    mapStateToProps,
    { editUser }
  )(EditUser);
  