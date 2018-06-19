import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "./index.css";
import "../styles/layout-overide.css";

import Header from './Header.js';
import HeaderDeux from './HeaderDeux.js';
import Menu from './Menu.js';
import SearchBar from './SearchBar.js';
import Signin from './Signin.js';

import Media from "react-media";

const TemplateWrapper = ({ children }) => (
  <div>  
  <Menu />
  <div
  id="biggestDiv"
  >
  <Helmet
  title="Gatsby Default Starter"
  meta={[
    { name: "description", content: "Sample" },
    { name: "keywords", content: "sample, something" }
    ]}
    >
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    </Helmet>
    <Header />
    <div>
  <Signin />
  </div>
    <div>
    <HeaderDeux />
    <SearchBar />
    <div
        style={{
          margin: "0 auto",
          maxWidth: 980,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "100%"
        }}
    >

    <Media query={{ maxWidth: 848 }}>
    {matches =>
      matches ? (
        <div
        style={{
          margin: "0 auto",
          maxWidth: 980,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "100%",
          padding: "25px"
        }}
        >
        <div style={{ flex: 1 }}>{children()}</div>
        </div>
        ) : (
        <div
        style={{
          margin: "0 auto",
          maxWidth: 980,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "100%",
          padding: "25px"
        }}
        >
        <div style={{ flex: 2.5, paddingRight: "30px" }}>
        {children()}
        </div>
        </div>
        )
      }
      </Media>
      </div>
      </div>
      </div>
      </div>
      );

      TemplateWrapper.propTypes = {
        children: PropTypes.func
      };

      export default TemplateWrapper;