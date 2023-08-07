import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FetchUserList } from '../Redux/Action';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';


const Users = (props) => {

    useEffect(() => {
        props.loaduser();
    },[])

    const handleDelete = id => {
    //   if(Window.confirm("Do you want to remove ?")){
    //     props.removeuser(id);
    //     props.loaduser();
    //     toast.success("User removed successfully");
    //   }  
    }

  return (
    <div>
        <div className="card">
            <div className="card-header" >
                <Link to={'/user/add'} className="btn btn-success">Add User [+]</Link>
            </div>
            <div className="card-body">
                <table className="table table-bordered">
                    <thead className="bg-dark text-white">
                        <tr>
                            <td>Code</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Role</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.user.userlist && props.user.userlist.map(item => 
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button onClick={()=> handleDelete(item.id)} className="btn btn-danger">delete</button>
                                    </td>                                    
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loaduser: () => dispatch(FetchUserList()),
        // removeuser: () => dispatch()
    }
}


//export default Users;
 export default connect(mapStateToProps, mapDispatchToProps)(Users);