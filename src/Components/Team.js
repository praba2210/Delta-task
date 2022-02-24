import React, {useState, useEffect} from 'react'
import "./Team.css";
import ReactDOM from "react-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import tdata from '../data/mock-data.json';
import Checkbox from '../Components/checkbox';


const Team = () => {
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [members, setmembers] = useState([]);

    useEffect(() => {
        setmembers(tdata);
    }, [members]);

    const handleSelectAll = e => {
      setIsCheckAll(!isCheckAll);
      setIsCheck(members.map(members => members.id));
      if (isCheckAll) {
        setIsCheck([]);
      }
    };
  
    const handleClick = e => {
      const { id, checked } = e.target;
      setIsCheck([...isCheck, id]);
      if (!checked) {
        setIsCheck(isCheck.filter(item => item !== id));
      }
    };

    const dispatch = useDispatch(); 
    const handleLogout = (e) => {
        e.preventDefault();
        
        dispatch(logout());
    }
  return (
    <div className="tdiv">

    <div className="Team">
    <h1 className="tm">Team Members</h1>

        <div className="mtable">
            <table>
                <thead>
                <tr>
                  <th>
                    <Checkbox 
                    type="checkbox"
                    name="selectAll"
                    id="checkAll"
                    handleClick={handleSelectAll}
                    isChecked={isCheckAll}
                    />
                  </th>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Status</th>
                  <th>Last Updated</th>
                  <th>Notes</th>
                </tr>
                </thead>
                <tbody>
                {members.map((member) =>(

                <tr>
                <td>
                    <Checkbox 
                    id={member.id} 
                    type="checkbox" 
                    handleClick={handleClick}
                    isChecked={isCheck.includes(member.id)}
                    />
                </td>
                <td>{member.name}</td>
                <td>{member.company}</td>
                <td>{member.status}</td>
                <td>{member.lastupdated}</td>
                <td>{member.notes}</td>  
                </tr>

                ))}
                  </tbody>
            </table>
            
        </div>
        <button className="logout-btn" onClick={(e) => handleLogout(e)}>
            Logout
            </button>
    </div>
    
    </div>
  )
}

export default Team