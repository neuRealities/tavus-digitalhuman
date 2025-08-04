import React, { useEffect, useState } from 'react';

import styles from './welcome.module.css';

const tavus_API_FROM_ENV = import.meta.env.VITE_APP_TAVUS_API_KEY;

function API_Message({api_key}) {
  if (api_key) {
    return <p>API Key set</p>;
  }
  return <p>You can set an API key at <pre>.env.local</pre>{api_key}</p>;
}

export const WelcomeScreen = ({ onStart, loading }: { onStart: (key: string) => void, loading: boolean }) => {
  const [apiKey, setApiKey] = useState('');
  // On initial mount, get token from localStorage if present
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setApiKey(token);
    } else {
      setApiKey(tavus_API_FROM_ENV);
    }
  }, []);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(event.target.value);
  };

  const handleStart = (event: React.FormEvent) => {
    event.preventDefault();
    if (apiKey) {
      onStart(apiKey);
    } else {
      alert('Please enter your API key');
    }
  };

  return (
    <div className={styles.container}>
      
      <div>
        <img
          src="/images/neuRealities-Logo.svg"
          alt="neuRealities"
          className="relative logo"
        />
      </div>

      <h1 className={styles.title}>
        Welcome to neuRealities Digital Human
      </h1>

      <form className={styles.form} >
        <API_Message api_key={tavus_API_FROM_ENV} />
        
        <input
          type='text'
          className={styles.input}
          placeholder='Enter your API key'
          onChange={handleInputChange}
          defaultValue={tavus_API_FROM_ENV}
          value={apiKey}
        />
        <button type='submit' className={styles.button} onClick={handleStart} disabled={!apiKey || loading}>
          {loading ? 'Loading...' : 'Start Conversation'}
        </button>
      </form>
    </div >
  );
};
