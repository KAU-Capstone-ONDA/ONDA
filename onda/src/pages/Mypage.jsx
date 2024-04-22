/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Mypage = () => {
  return (
    <div css={styles.container}>
      <div css={styles.section}>
        <h2>Basic Information</h2>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" />

        <label htmlFor="website">Website/Blog</label>
        <input id="website" type="url" />
      </div>

      <div css={styles.section}>
        <h2>Security</h2>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input id="confirm-password" type="password" />
      </div>

      <div css={styles.section}>
        <h2>Additional Info</h2>
        <label htmlFor="fullname">Full Name</label>
        <input id="fullname" type="text" />

        <label htmlFor="mobile">Mobile</label>
        <input id="mobile" type="tel" />

        <label htmlFor="nationality">Nationality</label>
        <input id="nationality" type="text" />

        <label htmlFor="code">Code</label>
        <input id="code" type="text" />
      </div>
    </div>
  );
};

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
  }),
  section: css({
    '&:not(:last-of-type)': {
      marginBottom: '30px',
    },
    'h2': {
      marginBottom: '15px',
    },
    'label': {
      display: 'block',
      marginBottom: '5px',
    },
    'input': {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    }
  }),
};

export default Mypage;
