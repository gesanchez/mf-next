export default function ProfileBox() {
  return (
    <div className="card card-user">
      <div className="image">
        <img src="/images/damir-bosnjak.jpg" alt="banner" />
      </div>
      <div className="card-body">
        <div className="author">
          <a href="#">
            <img className="avatar border-gray" src="/images/mike.jpg" alt="profile" />
            <h5 className="title">Chet Faker</h5>
          </a>
          <p className="description">
            @chetfaker
          </p>
        </div>
        <p className="description text-center">
          "I like the way you work it <br />
          No diggity <br />
          I wanna bag it up"
        </p>
      </div>
      <div className="card-footer">
        <hr />
        <div className="button-container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-6 ml-auto">
              <h5>12<br /><small>Files</small></h5>
            </div>
            <div className="col-lg-4 col-md-6 col-6 ml-auto mr-auto">
              <h5>2GB<br /><small>Used</small></h5>
            </div>
            <div className="col-lg-3 mr-auto">
              <h5>24,6$<br /><small>Spent</small></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}