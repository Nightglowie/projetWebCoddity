import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "./index.css";
import "../styles/layout-overide.css";

import Media from "react-media";

const Header = () => (
  <div
    style={{
      background: "#f5f5f5",
      marginBottom: "3rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 980,
        padding: "1.45rem 1.0875rem",
        height: 35
      }}
    >
      <h1 style={{ margin: 0, textAlign: "left", fontSize: "25px" }}>
      <div style={{ 
        width: "40px",
        height: "40px",
        float: "left",
        position: "relative"
        }}>
      <img src={require('./logo.png')} />
      </div>
      <div
      style={{ 
        float: "right",
        position: "fixed",
        marginTop: 13,
        marginLeft: 45
        }}
      >
        <Link
          to="/"
          style={{
            color:"#FA4343",
            textDecoration: "none"
          }}
        >
          C
        </Link>
        <Link
          to="/"
          style={{
            color: "#333",
            textDecoration: "none"
          }}
        >
          ODDITY
        </Link>
      </div>
      </h1>
    </div>
  </div>
);

const Header2 = () => (
  <div>
    <div
      class="body" 
      id="background" 
      style={{
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 500,
        width: "100%",
        marginTop: 5,
        borderBottom: "2px solid #e6e6e6"
        }}
    >
    </div>
    <div
      style={{
      borderBottom: "2px solid #e6e6e6",
      height: 35,
      }}
    >
    </div>
  </div>
);

const Sidebar = props => (
  <div
    style={{
      border: "2px solid #e6e6e6",
      maxWidth: 960,
      padding: "0.5rem",
      marginBottom: "25px"
    }}
  >
    <strong>{props.title}.</strong> {props.description}
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <Header2 />
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

              <div style={{ flex: 1 }}>
                <Sidebar
                  title="Codestack"
                  description="Articles on React and Node.js. All articles are written by Emmanuel Yusufu, Fullstack Web Development."
                />
                <Sidebar
                  title="About author"
                  description="Emmanuel Yusufu is a Full-stack Web Developer specializing in React and Node.js based in Nigeria."
                />
              </div>
            </div>
          )
        }
      </Media>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;