import React, { useEffect, useState } from "react";

const ProfileForm = () => {
  return (
    <div className="card card-user">
      <div className="card-header">
        <h5 className="card-title">Edit Profile</h5>
      </div>
      <div className="card-body">
        <form>
          <div className="row">
          <div className="col-md-5 pr-1">
            <div className="form-group">
              <label>Company (disabled)</label>
              <input type="text" className="form-control" disabled="" placeholder="Company" defaultValue="Creative Code Inc." />
            </div>
          </div>
          <div className="col-md-3 px-1">
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" placeholder="Username" defaultValue="michael23" />
            </div>
          </div>
          <div className="col-md-4 pl-1">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" placeholder="Email" />
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col-md-6 pr-1">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" className="form-control" placeholder="Company" defaultValue="Chet" />
            </div>
          </div>
          <div className="col-md-6 pl-1">
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" className="form-control" placeholder="Last Name" defaultValue="Faker" />
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label>Address</label>
              <input type="text" className="form-control" placeholder="Home Address" defaultValue="Melbourne, Australia" />
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col-md-4 pr-1">
            <div className="form-group">
              <label>City</label>
              <input type="text" className="form-control" placeholder="City" defaultValue="Melbourne" />
            </div>
          </div>
          <div className="col-md-4 px-1">
            <div className="form-group">
              <label>Country</label>
              <input type="text" className="form-control" placeholder="Country" defaultValue="Australia" />
            </div>
          </div>
          <div className="col-md-4 pl-1">
            <div className="form-group">
              <label>Postal Code</label>
              <input type="number" className="form-control" placeholder="ZIP Code" />
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col-md-12">
             <div className="form-group">
              <label>About Me</label>
              <textarea className="form-control textarea" defaultValue="Oh so, your weak rhyme You doubt I'll bother, reading into it"></textarea>
            </div>
          </div>
          </div>
          <div className="row">
            <div className="update ml-auto mr-auto">
                <button type="submit" className="btn btn-primary btn-round">Update Profile</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;