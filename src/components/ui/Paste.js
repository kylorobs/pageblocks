/* eslint-disable react/prop-types */
const Paste = ({ save }) => (
  <div
    style={{
      position: 'absolute',
      right: '0.5rem',
      bottom: '1rem',
      margin: '1em',
      'z-index': '10000',
    }}
  >
    <button
      type="button"
      onClick={save}
      style={{ padding: '1rem', background: 'green' }}
    >
      {' '}
      Save
    </button>
  </div>
);

export default Paste;
