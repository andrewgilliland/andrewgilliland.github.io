export const Drawer = () => {
  return (
    <div>
      <button popovertarget="demo-mobile-nav">Drawer</button>

      <nav popover="auto" id="demo-mobile-nav">
        <button
          className="demo-button"
          popovertarget="demo-mobile-nav"
          popovertargetaction="hide"
        >
          Close Nav
        </button>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Store</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
