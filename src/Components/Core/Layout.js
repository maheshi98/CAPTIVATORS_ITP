import React from "react";
import "./styles.css";

const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div>
        <div className="jumbotron">
            <h3>{title}</h3>
            <h4 className="lead">{description}</h4>
        </div>
            <div className={className}>{children}</div>
    </div>
);

export default Layout;