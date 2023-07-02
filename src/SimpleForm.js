import "./SimpleForm.css";

function SimpleForm() {
  return (
    <div>
      <div className="container">
        <form>
          <div className="form-group">
            <p className="text-start m-2" for="name">
              Name
            </p>
            <input
              type="text"
              className="form-control input-all"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <p className="m-2 text-start" for="age">
              Age
            </p>
            <input
              type="number"
              className="form-control input-all"
              id="age"
              placeholder="Enter your age"
            />
          </div>
          <div className="form-group">
            <p className="m-2 text-start" for="weight">
              Weight
            </p>
            <input
              type="number"
              className="form-control input-all"
              id="weight"
              placeholder="Enter your weight"
            />
          </div>
          <div className="form-group">
            <p className="m-2 text-start" for="email">
              Email
            </p>
            <input
              type="email"
              className="form-control input-all"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group float-left">
            <p className="m-2" for="health-report">
              Upload Health Report
            </p>
            <input
              type="file"
              className="form-control-file p-2"
              id="health-report"
            />
          </div>
          <button type="submit" className="btn btn-primary m-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SimpleForm;
