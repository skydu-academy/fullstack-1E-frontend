import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 className="header">Skybook</h1>
        <p>
          Skybook membantu Anda terhubung dan berbagi dengan orang-orang dalam
          kehidupan Anda
        </p>

        <div className="card">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="example@gmail.com"
              aria-label="example@gmail.com"
              aria-describedby="basic-addon2"
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Kata Sandi"
              aria-label="Kata Sandi"
              aria-describedby="basic-addon2"
            />
            <span class="input-group-text" id="basic-addon2">
              <i class="fas fa-eye fa-sm" id="togglePassword" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
