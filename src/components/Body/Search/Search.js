import React from "react";
import "./Search.scss";
import { TiLocationOutline } from "react-icons/ti";
function Search() {
  return (
    <section className="search">
      <div className="container">
        <div className="search-wrap">
          <div className="search-title">
            <h1>Lorem ipsum dolor amet , consecteur adipiscnig. </h1>
          </div>

          <div className="color-buttons">
            <div className="inputs-content">
              <svg
                className="search-icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="30"
                viewBox="0 0 32 32"
              >
                <path d="M13.455 2.182c6.226 0 11.273 5.047 11.273 11.273 0 2.851-1.058 5.454-2.803 7.439l7.483 7.485-1.029 1.029-7.485-7.483c-1.985 1.745-4.588 2.803-7.439 2.803-6.226 0-11.273-5.047-11.273-11.273s5.047-11.273 11.273-11.273zM13.455 3.636c-5.422 0-9.818 4.396-9.818 9.818s4.396 9.818 9.818 9.818c5.422 0 9.818-4.396 9.818-9.818s-4.396-9.818-9.818-9.818z"></path>
              </svg>

              <input
                className="icon-btn"
                type="text"
                placeholder="Lorem ipsum"
              />

              <TiLocationOutline className="location-icon" />

              <input
                className="icon-btn"
                type="text"
                placeholder="Lorem ipsum"
              />
            </div>

            <button className="btn-color">Lorem ipsum</button>
          </div>
          <h3 className="subtitle">Lorem ipsum dolor sit amet</h3>
          <div className="trasparent-buttons">
            <div className="btn-top">
              <button className="btn-primary">Lorem ipsum</button>
              <button className="btn-primary">
                Lorem ipsum dolor sit amet
              </button>
            </div>
            <div className="btn-botom">
              <button className="btn-primary">Lorem ipsum</button>
              <button className="btn-primary">Cnsecteur adipiscnig</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
