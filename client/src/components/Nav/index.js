import React from 'react';

const Nav = (props) => {
    const { currentTab, setCurrentTab } = props;
    return (
        <nav role="navigation">
            <div id='menuToggle'>
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu" className='flex-row mobile-view'>
                    <li className={currentTab === "calendar" ? "mx-2 navActive" : "mx-2"}>
                        <a href='#calendar'
                        onClick={() => setCurrentTab("calendar")}>
                            <FontAwesomeIcon icon="fa-regular fa-calendar-days" />
                        </a>
                    </li>
                    <li className={currentTab === "finances" ? "mx-2 navActive" : "mx-2"}>
                        <a href='#finances'
                        onClick={() => setCurrentTab("finances")}>
                            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass-dollar" />
                        </a>
                    </li>
                    <li className={currentTab === "invoice" ? "mx-2 navActive" : "mx-2"}>
                        <a href='#invoice'
                        onClick={() => setCurrentTab("invoice")}>
                            <FontAwesomeIcon icon="fa-solid fa-file-invoice-dollar" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Nav;
