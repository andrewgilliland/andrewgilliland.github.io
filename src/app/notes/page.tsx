import NoteCard from "@/components/NoteCard";
import { Note, Topic } from "@/types";
import TopicCard from "@/components/TopicCard";
import { getNotesAndTopics } from "@/lib/actions/notes";

// type NotesPageProps = {
//   topic?: string;
//   notes: Note[];
//   topics: Topic[];
// };

const NotesPage = async ({ topic }) => {
  const { notes, topics } = await getNotesAndTopics();

  return (
    <div className="max-w-3xl w-full mx-auto mt-14">
      {topics.length > 0 && (
        <section className="mt-10 md:mt-0 mx-8 md:mx-0 mb-24">
          <h2 className="capitalize font-bold text-gray-100 text-3xl md:text-4xl stroke-white">
            {`${topic ? `${topic} ` : ""}Topics`}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            {topics.map((topic, index) => (
              <TopicCard key={index} topic={topic} />
            ))}
          </div>
        </section>
      )}
      {notes.length > 0 && (
        <section className="mt-10 mx-8 md:mx-0 mb-24">
          <h2 className="capitalize font-bold text-gray-100 text-3xl md:text-4xl stroke-white">
            {`${topic ? `${topic} ` : ""}Notes`}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            {notes.map((note, index) => (
              <NoteCard key={index} note={note} index={index} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

// export async function getStaticProps() {
//   const topics = fs
//     .readdirSync("./posts", { withFileTypes: true })
//     .map((dirent) => (dirent.isDirectory() ? dirent.name : null))
//     .filter((dirent) => dirent !== null)
//     .map((topic) => ({
//       name: topic,
//       path: `/notes/${topic}`,
//     }));

//   const files = fs
//     .readdirSync("./posts", { withFileTypes: true })
//     .map((dirent) => (dirent.isFile() ? dirent.name : null))
//     .filter((dirent) => dirent !== null);

//   // const mostRecentPosts = fs
//   //   .readdirSync("./posts", { withFileTypes: true })
//   //   .map((dirent) =>
//   //     dirent.isFile()
//   //       ? {
//   //           name: dirent.name,
//   //           lastUpdated: fs.statSync(path.join("./posts", dirent.name)).mtime,
//   //         }
//   //       : null
//   //   )
//   //   .filter((file) => file !== null)
//   //   .sort((a, b) => b.lastUpdated.getTime() - a.lastUpdated.getTime())
//   //   .slice(0, 5);

//   const notes = files.map((filename) => {
//     const markdownWithMeta = fs.readFileSync(
//       path.join("posts", filename!),
//       "utf-8"
//     );
//     const { data: frontmatter } = matter(markdownWithMeta);
//     frontmatter.date = new Date(frontmatter.date);

//     return {
//       path: filename?.replace(".md", ""),
//       frontmatter,
//     };
//   });

//   notes.sort(
//     (a, b) => b.frontmatter.date.getTime() - a.frontmatter.date.getTime()
//   );

//   return {
//     props: {
//       notes: JSON.parse(JSON.stringify(notes)),
//       topics: topics,
//     },
//   };
// }

export default NotesPage;
