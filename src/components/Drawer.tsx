// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       button: React.DetailedHTMLProps<
//         React.ButtonHTMLAttributes<HTMLButtonElement>,
//         HTMLButtonElement
//       > & {
//         popovertarget?: string;
//         popovertargetaction?: string;
//       };
//       nav: React.DetailedHTMLProps<
//         React.HTMLAttributes<HTMLElement>,
//         HTMLElement
//       > & {
//         popover?: string;
//       };
//     }
//   }
// }

export const Drawer = () => {
  return (
    <div>
      <button popoverTarget="demo-mobile-nav">Drawer</button>

      <nav popover="auto" id="demo-mobile-nav">
        <button
          className="demo-button"
          popoverTarget="demo-mobile-nav"
          popoverTargetAction="hide"
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
