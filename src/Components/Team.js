import React, {useState, useEffect} from 'react'
import "./Team.css";
import ReactDOM from "react-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import tdata from '../data/mock-data.json';
import Checkbox from './checkbox';
import { nanoid } from '@reduxjs/toolkit';



const Team = () => {
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [members, setmembers] = useState([]);
    const [show, setshow] = useState(false);
   

    useEffect(() => {
        setmembers(tdata);
    }, [members]);

    const [addMember, setAddMember] = useState(
      {
        name: "",
        company: "",
        status: "",
        lastupdated: "",
        notes: ""
      })

      const handleAddMemberChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newMemberdata = {...addMember};
        newMemberdata[fieldName] = fieldValue;

        setAddMember(newMemberdata);
      };

      const handleAddFormSubmit = (event) => {
        {
          event.preventDefault();
          const newMember = {
            id: nanoid(),
            name: addMember.name,
            company: addMember.company,
            status: addMember.status,
            lastupdated: addMember.lastupdated,
            notes: addMember.notes

          };

          const newMembers = [...members, newMember];
          setmembers(newMembers);
        };
      };

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
    <span className="addmember">
    <button className="addmember-btn" onClick=''>Add Member</button>
    </span>
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