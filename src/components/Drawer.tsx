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
      <button popoverTarget="drawer-nav">Drawer</button>

      <nav popover="auto" id="drawer-nav">
        <button
          className="button"
          popoverTarget="drawer-nav"
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
