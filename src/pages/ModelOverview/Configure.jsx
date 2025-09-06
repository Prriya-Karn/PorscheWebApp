import React, { Fragment, useState } from 'react'
const Configure = () => {
    const [carColor, setCarColor] = useState("#7D1722");
    return (
        <Fragment>
            <div className="flex flex-wrap justify-center items-center min-h-screen w-screen font-sans">
                {/* Feature Section */}
                <div className="text-center w-full">
                    <h2 style={{ color: carColor }} className="text-2xl font-bold mb-4">
                        CHOOSE A COLOR:
                        <br />
                        <input
                            type="color"
                            value={carColor}
                            onChange={(e) => setCarColor(e.target.value)}
                            className="mt-2"
                        />
                    </h2>

                    <div
                        className="max-w-[600px] w-4/5 mx-auto leading-none"
                        style={{ background: carColor }}
                    >
                        <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/13764/color-change-car-base.png"
                            alt="Car"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Configure;