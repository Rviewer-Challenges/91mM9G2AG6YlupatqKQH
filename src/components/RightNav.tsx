import React from 'react';

const RightNav = () => {
    return (
        <div className="right-nav">
            <h2>Who to follow</h2>
            <ul>
                <li>
                    <img src="https://via.placeholder.com/50" alt="profile" />
                    <div>
                        <h3>John Doe</h3>
                        <p>@johndoe</p>
                    </div>
                    <button>Follow</button>
                </li>
                <li>
                    <img src="https://via.placeholder.com/50" alt="profile" />
                    <div>
                        <h3>Jane Smith</h3>
                        <p>@janesmith</p>
                    </div>
                    <button>Follow</button>
                </li>
                <li>
                    <img src="https://via.placeholder.com/50" alt="profile" />
                    <div>
                        <h3>Bob Johnson</h3>
                        <p>@bobjohnson</p>
                    </div>
                    <button>Follow</button>
                </li>
            </ul>
        </div>

    
    );
};

export default RightNav;
