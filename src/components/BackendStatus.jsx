import React, { useState, useEffect } from 'react';

function BackendStatus() {
    const [isBackendUp, setIsBackendUp] = useState(false);

    useEffect(() => {
        const local_func = async () => {
            const response = await fetch("https://app-server.up.railway.app");
            if (response.status === 200) {
                setIsBackendUp(true);
            }
        }
        local_func();
    }, []);


    const [show, setShow] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(false);
        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);


    return (
        <div>
            {isBackendUp ? (show &&
                <p style={{ textAlign: 'center', padding: '10px', fontSize: '14px', color: 'green' }}>Backend is up & running</p>
            ) : (
                <p style={{ textAlign: 'center', padding: '10px', fontSize: '14px', color: 'red' }}>Backend is Down. Please try again after some time or try informing the admin.</p>
            )}
        </div>
    );
}

export default BackendStatus;
