import { codeToHtml } from "shiki";

async function CodeBlock() {
  const code = `
    {
      name: "Andrew Gilliland",
      role: "Full Stack Developer",
      location: "Bloomington, Illinois"
    }
  `;

  const out = await codeToHtml(code, {
    lang: "ts",
    theme: "aurora-x",
  });

  return (
    <div
      className="mt-20 border border-white rounded-md overflow-hidden"
      dangerouslySetInnerHTML={{ __html: out }}
    />
  );
}

export default CodeBlock;
