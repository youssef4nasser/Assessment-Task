/* eslint-disable react/jsx-no-undef */
import React from 'react'

export default function DisplyTask({ task, handleDelete, handleUpdate }) {
    let statusClass = "";
  switch (task.status) {
    case 'Not Started':
      statusClass = 'bg-primary';
      break;
    case 'In Progress':
      statusClass = 'bg-secondary';
      break;
    case 'Finished':
      statusClass = 'bg-success';
      break;
    default:
      statusClass = '';
  }
  return <>
    <div className="col-md-6 mb-3">
        <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <p>{task.Description}</p>
                <p>{task.title}</p>
                <span className={`badge ${statusClass}`}>{task.status}</span>
                <button onClick={handleUpdate} className="btn btn-warning btn-sm me-2">Edit</button>
                <button onClick={handleDelete} className="btn btn-danger btn-sm">Delete</button>
            </li>
        </ul>
    </div>
  </>
}
