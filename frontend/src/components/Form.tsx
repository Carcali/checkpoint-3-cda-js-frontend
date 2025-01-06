import React, { useState } from 'react';

function Form ({ onAddCountry }) {
    const [name, setName] = useState('');
    const [emoji, setEmoji] = useState('');
    const [code, setCode] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();
        onAddCountry({ name, emoji, code });
        setName('');
        setEmoji('');
        setCode('');
    };

    return (
        <section className='formSection'>
            <div className='formGlobalDiv'>
                <form onSubmit={handleAdd} className='formBlock'>
                    <div className='formDiv'>
                        <label className='formLabel'>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className='formDiv'>
                        <label className='formLabel'>Emoji:</label>
                        <input
                            type="text"
                            value={emoji}
                            onChange={(e) => setEmoji(e.target.value)}
                            required
                        />
                    </div>
                    <div className='formDiv'>
                        <label className='formLabel'>Code:</label>
                        <input
                            type="text"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className='formButton'>Add</button>
                </form>
            </div>
        </section>
    );
};

export default Form;
