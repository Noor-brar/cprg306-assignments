// // app/page.js
// import Link from 'next/link';
// import StudentInfo from './student-info';

// export default function Page() {
//   return (
//     <main>
//       <h1>CPRG 306: Web Development</h1>
//       <p>
//         <Link href="/week-2" passHref>
//           <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
//             Week 2 Assignment (lab 2)
//           </span>
//         </Link>
//       </p>
//     </main>
//   );
// }

// app/week-2/page.js
import StudentInfo from './student-info';

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <StudentInfo />
    </main>
  );
}
