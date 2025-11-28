import { useState } from 'react';
import './App.css';

function App() {
    return (
        <>
            <main className="app">
                <div className="app__header">
                    <h1 className="app__title">
                        Always get the real exchange rate
                    </h1>
                    <p className="app__subtitle">
                        Banks markup the exchange rate when you spend or
                        transfer money abroad. We don't.
                    </p>
                </div>
                <div className="converter">
                    <div className="converter__currency converter__currency--from">
                        <label
                            className="converter__label"
                            htmlFor="home-select"
                        >
                            From
                        </label>
                        <select
                            className="converter__select"
                            name="home-select"
                            id="home-select"
                        >
                            <option className="converter__option" value="GBP">
                                GBP · Bristish Pound
                            </option>
                            <option className="converter__option" value="USD">
                                USD · US Dollar
                            </option>
                            <option className="converter__option" value="EUR">
                                EUR · Euro
                            </option>
                        </select>
                        <input
                            type="text"
                            className="converter__input"
                            placeholder="0"
                        />
                    </div>
                    <div className="converter__currency converter__currency--to">
                        <label
                            className="converter__label"
                            htmlFor="travel-select"
                        >
                            To
                        </label>
                        <select
                            className="converter__select"
                            name="travel-select"
                            id="travel-select"
                        >
                            <option className="converter__option" value="GBP">
                                GBP · Bristish Pound
                            </option>
                            <option className="converter__option" value="USD">
                                USD · US Dollar
                            </option>
                            <option className="converter__option" value="EUR">
                                EUR · Euro
                            </option>
                        </select>
                        <input
                            type="text"
                            className="converter__input"
                            placeholder="0"
                        />
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
