"use client"
import React, { useState } from 'react';

import Navbar from "./navbar";
import Page7 from './page7/page';
import "./dashboard.css";

const Dashboard = () => {

    const [page, setPage] = useState("page1");

    return (
        <div className="row">
            <div className="col-3">
                <Navbar />
            </div>
            <div className="col-9">
                {
                    page === "page7" ?
                        <>
                            <Page7 />
                        </> : <></>
                }
                <button onClick={() => setPage("page2")}>Go to step 2</button>
            </div>
        </div>
    )
}

export default Dashboard