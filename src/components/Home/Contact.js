import React from 'react';
import Title from '../Globals/Title';
export default function Contact() {
  return (
    <section className="menu py-5">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/mvobeogl" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" name="name" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" name="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea name="description" id="description" cols="30" rows="10" className="form-control"></textarea>
            </div>
            <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
