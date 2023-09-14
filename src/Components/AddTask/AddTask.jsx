import { useFormik } from 'formik'
import React from 'react'

export default function AddTask({ handleAdd,updateTask }) {
  let formik = useFormik({
    initialValues: updateTask || {
      title: "",
      Description: "",
      status: "Not Started",
      },
    onSubmit: handleAdd,
    enableReinitialize:true
  })

  return <>
  <section className='py-5'>
    <div className="container">
        <div className="row">
            <div className="">
                <h2>Add Task</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Task Title</label>
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.title} type="text" className="form-control" id="title" required/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Description" className="form-label">Task Description</label>
                      <textarea onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.Description} className="form-control" id="Description" rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="status" className="form-label">Task Status</label>
                      <select  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.status} className="form-select" id="status" required>
                          <option value="Not Started">Not Started</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Finished">Finished</option>
                      </select>
                    </div>
                    <button type="submit" className="btn btn-success">Add Task</button>
                    
                </form>
            </div>
        </div>
    </div>
  </section>
  </>
}
