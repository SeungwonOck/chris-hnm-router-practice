import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({authenticate, setAuthenticate}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const menuList = [
        "여성",
        "Divided",
        "남성",
        "신생아/유아",
        "아동",
        "H&M Home",
        "Sale",
        "지속가능성",

    ];

    const navigate = useNavigate();

    const goToLogin = () => {
        if (authenticate === true) {
            setAuthenticate(false);
        }
        navigate('/login');
    }

    const search = (e) => {
        if (e.key === "Enter") {
            let keyword = e.target.value;
            //url 바꿔줌
            navigate(`/?q=${keyword}`)
        }
    }

    return (
        <div>
            <div className="login-button">
                <FontAwesomeIcon icon={faUser} />
                <div onClick={goToLogin} style={{ marginLeft: '10px' }}>{authenticate === true ? "로그아웃" : "로그인"}</div>
            </div>
            <div className="nav-section">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="menu-icon"
                />
                <img
                    onClick={() => navigate("/")}
                    width={100}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUWu61FjsOEMt2iFZggl56DSrc--YHV8S6968BiteV2A&s"
                    alt="logo"
                    className="logo"
                />
            </div>
            {isSidebarOpen && (
                <div className="sidebar">
                    <FontAwesomeIcon
                        icon={faTimes}
                        onClick={() => setIsSidebarOpen(false)}
                        className="close-icon"
                    />
                    <div className="sidebar-search-box">
                        <FontAwesomeIcon icon={faSearch} />
                        <input type="text" onKeyUp={(e) => search(e)} placeholder="검색" />
                    </div>
                    <ul className="sidebar-menu-list">
                        {menuList.map((menu, index) => (
                            <li key={index} onClick={() => setIsSidebarOpen(false)}>{menu}</li>
                        ))}
                    </ul>
                </div>
            )}
            <div className={`menu-area ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                <ul className="menu-list">
                    {menuList.map((menu, index) => (
                        <li key={index}>{menu}</li>
                    ))}
                </ul>
                <div className="search search-box">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" onKeyUp={(e) => search(e)} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
